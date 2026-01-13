const errorMiddleware = (err,req,res,next) =>{
    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";

    console.log("X Error:", err.message);

    res.status(statusCode).json({
        success: false,
        message: message
    })
}
module.exports = errorMiddleware;