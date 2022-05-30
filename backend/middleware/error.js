const ErrorHandler = require("../utils/errorHandler");
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 5000;
  err.message = err.message || "internal error";
if (err.name=="CastError") {
const message="Resourse are not found.";
err=new ErrorHandler(message,400)
}


  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
