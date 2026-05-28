const jwt = require("jsonwebtoken");

function optionalAuth(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
  } catch (error) {
    /*
      Invalid/expired token:
      treat user as guest
    */

    req.user = null;
  }

  next();
}

module.exports = optionalAuth;
