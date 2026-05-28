const jwt = require("jsonwebtoken");

async function protect(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Authentication required",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "unauthorized user token is not verified",
    });
  }
}
function isAdmin(req, res, next) {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied. Admin only",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}
module.exports = { protect, isAdmin };
