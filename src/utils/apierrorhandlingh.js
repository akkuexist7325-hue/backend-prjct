class ApiError extends Error {
  constructor(message, statusCode, data = null) {
    // 1. Call parent constructor to set the error message
    super(message); 
    
    // 2. Assign custom properties specific to API errors
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.data = data;
    this.isOperational = true; // Flags known application errors

    // 3. Capture stack trace, excluding this constructor call
    Error.captureStackTrace(this, this.constructor);
  }
}
 
export{ ApiError}