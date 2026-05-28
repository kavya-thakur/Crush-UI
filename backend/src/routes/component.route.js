const express = require("express");
const {
  getAllComponent,
  getSingleComponent,
  createComponent,
  getTheCode,
  downloadTemplate,
} = require("../controllers/component.controller");
const { protect, isAdmin } = require("../middlewares/auth.middleware");
const optionalAuth = require("../middlewares/optionalauth.middlware");
const router = express.Router();

router.get("/components", getAllComponent);
// router.post("/components", protect, isAdmin, createComponent);
router.post("/components", createComponent);

router.get("/components/:id", getSingleComponent);
router.get("/components/:slug/code", optionalAuth, getTheCode);
router.get("/template/download/:slug", downloadTemplate);
module.exports = router;
