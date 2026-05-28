import { useEffect, useState } from "react";

import { useAuth } from "../context/AuthContext";
import API from "../lib/axios";

declare global {
  interface Window {
    Cashfree: any;
  }
}

export function useSubscription() {
  const { user, setUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  /* LOAD CASHFREE SDK */
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://sdk.cashfree.com/js/v3/cashfree.js"]',
    );

    if (existingScript) return;

    const script = document.createElement("script");

    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";

    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  /* POLL PAYMENT STATUS */
  async function pollPaymentStatus(orderId: string) {
    const maxAttempts = 10;

    const delay = 3000;

    for (let i = 0; i < maxAttempts; i++) {
      try {
        const response = await API.get(`/payment/verify/${orderId}`);

        const status = response.data.status;

        if (status === "paid") {
          return "paid";
        }

        if (status === "failed") {
          return "failed";
        }

        await new Promise((resolve) => setTimeout(resolve, delay));
      } catch (error) {
        console.log(error);

        return "failed";
      }
    }

    return "timeout";
  }
  //REFRESH THE USER

  async function refreshUserWithRetry() {
    const maxAttempts = 5;

    const delay = 1500;

    for (let i = 0; i < maxAttempts; i++) {
      try {
        const response = await API.get("/auth/me");

        const updatedUser = response.data.user;

        if (updatedUser.plan === "pro") {
          setUser(updatedUser);

          return true;
        }

        await new Promise((resolve) => setTimeout(resolve, delay));
      } catch (error) {
        console.log(error);

        return false;
      }
    }

    return false;
  }

  /* CREATE SUBSCRIPTION */
  async function upgradeToPro() {
    try {
      setLoading(true);

      setMessage("");

      if (!user) {
        setMessage("Please login to continue");

        return;
      }

      /* CHECK SDK */
      if (!window.Cashfree) {
        setMessage("Payment SDK failed to load");

        return;
      }

      /* CREATE ORDER */
      const response = await API.post("/payment/create-subscription");

      const order = response.data;

      if (!order?.payment_session_id) {
        throw new Error("Unable to initialize payment session");
      }

      /* INITIALIZE CASHFREE */
      const cashfree = window.Cashfree({
        mode: import.meta.env.MODE === "production" ? "production" : "sandbox",
      });

      /* OPEN CHECKOUT */
      const result = await cashfree.checkout({
        paymentSessionId: order.payment_session_id,

        redirectTarget: "_modal",
      });

      console.log(result);

      /*
        IMPORTANT:
        Frontend does NOT trust payment success directly.
        Backend + webhook are the source of truth.
      */

      const paymentStatus = await pollPaymentStatus(order.order_id);

      if (paymentStatus === "paid") {
        const updated = await refreshUserWithRetry();

        if (updated) {
          setMessage("Pro plan activated successfully");

          return;
        }

        setMessage("Payment successful. Please refresh the page.");

        return;
      }

      if (paymentStatus === "failed") {
        setMessage("Payment failed");

        return;
      }

      setMessage(
        "Payment verification timed out. Please refresh after a moment.",
      );
    } catch (error: any) {
      console.error(error);
      console.log(error.response?.data);

      setMessage(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    message,
    upgradeToPro,
  };
}
