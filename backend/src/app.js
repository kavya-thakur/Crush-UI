const express = require("express");
const authRoute = require("./routes/auth.route");
const componentRoute = require("./routes/component.route");
const paymentRoute = require("./routes/payment.route");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/auth", authRoute);
app.use("/api", componentRoute);
app.use("/api/payment", paymentRoute);
module.exports = app;
