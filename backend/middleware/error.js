const ErrorHandler = require("../utils/errorHandler");
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 5000;
  err.message = err.message || "internal error";
  res.status(err.statusCode).json({
    success: false,
    error: err,
  });
};
