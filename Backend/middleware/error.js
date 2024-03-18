const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal Server Error"

    //Wrong mongodb id error
    if (err.name === "CastError") {
        const message = `Resources not found with this id.. invalid ${err.path}`;
        err = new ErrorHandler(message, 400)
    }

    //duplicate key error
    if (err.Code === 11000) {
        const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
    }


    //wrong jwt
    if (err.name === "JasonWebTokenError") {
        const message = `your url is invalid please try again letter`;
        err = new ErrorHandler(message, 400)
    }

    // jwt expired
    if (err.name == "TokenExpiredError") {
        const message = `your Url is expired please try later`
        err = new ErrorHandler(message, 400)
    }
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    })
}