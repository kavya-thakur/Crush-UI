const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: ["component", "section", "template"],
      required: true,
      default: "component",
    },
    isPro: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
    },
    code: {
      component: String,
    },
    downloadUrl: {
      type: String,
    },
    demoUrl: {
      type: String,
    },
  },
  { timestamps: true },
);

const componentModel = mongoose.model("component", componentSchema);

module.exports = componentModel;
