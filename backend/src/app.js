const express = require("express");
const authRoute = require("./routes/auth.route");
const componentRoute = require("./routes/component.route");
const paymentRoute = require("./routes/payment.route");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   }),
// );

const allowedOrigins = ["http://localhost:5173", process.env.FRONTEND_URL];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },

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
