const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const {
  createSubscription,
  verifySubscription,
  cashfreeWebhook,
} = require("../controllers/payment.controller");

const router = express.Router();

router.post("/create-subscription", protect, createSubscription);

router.get("/verify/:orderId", protect, verifySubscription);

router.post("/webhook", express.raw({ type: "*/*" }), cashfreeWebhook);

module.exports = router;
