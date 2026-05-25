// Global error handler middleware
// This runs when any route calls next(error)

const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);
  const statusCode = err.status || 500;
  let message = err.message || "Something went wrong. Please try again.";
  if (statusCode === 401) {
    message = "Unauthorized";
  }
  res.status(statusCode).json({ success: false, message });
  // TODO #2 — Complete this error handler
  // It should:
  // 1. Get the status code from err.status, but default to 500 if not set
  // 2. Send a JSON response with the status code and this shape:
  //    { success: false, message: err.message }
  // 3. If the status code is 401, the message should always be "Unauthorized" (ignore err.message)
};

export default errorHandler;
