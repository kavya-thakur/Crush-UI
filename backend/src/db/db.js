const mongoose = require("mongoose");

async function connectDB() {
  mongoose.connect(process.env.MONGO_URL);
  console.log("db is connected succesffuly");
}

module.exports = connectDB;
