enum ErrorMessage {
  INVALID_DATA = "Invalid data",
  USER_ALREADY_EXISTS = "User already exists",
  USER_NOT_FOUND = "User not found",
  USER_UNAUTHORIZED = "Unauthorized user",
  USER_NOT_ACTIVE = "User is not active",
  EMAIL_NOT_VERIFIED = "The email is not verified",
  PASSWORD_NOT_MATCH = "The password is incorrect",
  INTERNAL_SERVER_ERROR = "Internal Server Error",
  TOKEN_EXPIRED = "Token expired",
  PASS_NOT_ALLOWED = "The password must be at least 6 characters long and contain at least one letter, one number and one special character",
  EMAIL_IS_ALREADY_REG = "The email  is already registered",
  FORBIDDEN = "Insufficient permissions",
  ROLE_NOT_VALID = "Role not valid",
  TOKEN_INVALID = "Token invalid",
}

export { ErrorMessage };
