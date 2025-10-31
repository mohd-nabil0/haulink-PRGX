export const handleAuthError = (error: any) =>{
  const errCode = error.code || error.name;

  //TODO need to change based on the requirements
  const messages: Record<string, string> = {
    UserNotFoundException: "User not found. Please check your username.",
    NotAuthorizedException: "Incorrect password. Please try again.",
    UserNotConfirmedException: "User not confirmed. Please verify your account.",
    PasswordResetRequiredException: "Password reset required. Please reset your password.",
    InvalidParameterException: "Invalid input. Please check your credentials.",
    TooManyRequestsException: "Too many requests. Please wait and try again.",
  };

  return messages[errCode] || `An unexpected error occurred: ${error.message}`;
}
