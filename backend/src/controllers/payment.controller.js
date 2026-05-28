const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const crypto = require("crypto");

const subscriptionModel = require("../models/subscription.model");

const userModel = require("../models/user.model");

/* CREATE SUBSCRIPTION ORDER */

async function createSubscription(req, res) {
  try {
    const user = await userModel.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.plan === "pro") {
      return res.status(400).json({
        message: "You already have Pro plan",
      });
    }

    const orderId = `crushui_${Date.now()}`;

    const amount = 499;

    const response = await fetch("https://sandbox.cashfree.com/pg/orders", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "x-client-id": process.env.CASHFREE_CLIENT_ID,
        "x-client-secret": process.env.CASHFREE_CLIENT_SECRET,
        "x-api-version": "2022-09-01",
      },

      body: JSON.stringify({
        order_id: orderId,

        order_amount: amount,

        order_currency: "INR",

        customer_details: {
          customer_id: String(user._id),

          customer_email: user.email,

          customer_phone: "9999999999",
        },

        order_meta: {
          return_url: `${process.env.FRONTEND_URL}/payment-success?order_id=${orderId}`,

          notify_url: `${process.env.BACKEND_URL}/api/payment/webhook`,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data);

      return res.status(500).json({
        message: "Cashfree order creation failed",
      });
    }

    await subscriptionModel.create({
      user: user._id,
      orderId,
      amount,
      plan: "pro",
      status: "pending",
    });

    res.status(200).json(data);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
}

/* VERIFY PAYMENT */

async function verifySubscription(req, res) {
  try {
    const { orderId } = req.params;

    const subscription = await subscriptionModel.findOne({
      orderId,
    });

    if (!subscription) {
      return res.status(404).json({
        message: "Subscription not found",
      });
    }

    if (subscription.status === "paid") {
      return res.json({
        status: "paid",
      });
    }

    const response = await fetch(
      `https://sandbox.cashfree.com/pg/orders/${orderId}`,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",

          "x-client-id": process.env.CASHFREE_CLIENT_ID,

          "x-client-secret": process.env.CASHFREE_CLIENT_SECRET,

          "x-api-version": "2022-09-01",
        },
      },
    );

    const data = await response.json();

    const paymentStatus = data.order_status?.toUpperCase();

    if (paymentStatus === "PAID") {
      subscription.status = "paid";

      await subscription.save();

      await userModel.findByIdAndUpdate(subscription.user, {
        plan: "pro",
      });

      return res.json({
        status: "paid",
      });
    }

    if (["FAILED", "CANCELLED"].includes(paymentStatus)) {
      subscription.status = "failed";

      await subscription.save();

      return res.json({
        status: "failed",
      });
    }

    return res.json({
      status: "pending",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Verification failed",
    });
  }
}

/* WEBHOOK */

async function cashfreeWebhook(req, res) {
  try {
    const event = JSON.parse(req.body.toString());

    const orderData = event?.data?.order;

    const paymentData = event?.data?.payment;

    const orderId = orderData?.order_id;

    const paymentStatus = paymentData?.payment_status;

    const subscription = await subscriptionModel.findOne({
      orderId,
    });

    if (!subscription) {
      return res.status(404).send("Not found");
    }

    if (paymentStatus === "SUCCESS") {
      subscription.status = "paid";

      subscription.paymentId = paymentData?.cf_payment_id;

      await subscription.save();

      await userModel.findByIdAndUpdate(subscription.user, {
        plan: "pro",
      });
    }

    if (paymentStatus === "FAILED") {
      subscription.status = "failed";

      await subscription.save();
    }

    res.status(200).send("OK");
  } catch (error) {
    console.log(error);

    res.status(200).send("Handled");
  }
}

module.exports = {
  createSubscription,
  verifySubscription,
  cashfreeWebhook,
};
