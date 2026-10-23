const mongoose = require("mongoose");

async function connectDB() {
  const mongoUrl = process.env.MONGO_URL;

  if (!mongoUrl) {
    throw new Error("MONGO_URL is required to start the backend");
  }

  await mongoose.connect(mongoUrl);
  console.log("Database connected successfully");
}

module.exports = connectDB;
