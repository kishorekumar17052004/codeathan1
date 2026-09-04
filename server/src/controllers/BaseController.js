export class BaseController {
  handleSuccess(res, data = null, message = 'Success', statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  handleError(res, error, defaultMessage = 'An unexpected error occurred', statusCode = 500) {
    console.error(`[Controller Error]: ${error.message || error}`);
    return res.status(error.statusCode || statusCode).json({
      success: false,
      message: error.message || defaultMessage,
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
    });
  }
}
