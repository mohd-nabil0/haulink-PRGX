import { AuthService } from "../services/authService";

const useAuth = () => {
  const handleSignIn = async (username: string, password: string) => {
    return await AuthService.signIn(username, password);
  };
  const handleSignUp = async (
    username: string,
    password: string,
    phone: Record<string, string>
  ) => {
    return await AuthService.signUp(username, password, phone);
  };

  const handleSignOut = async () => {
    await AuthService.signOut();
  };

  const handleResetPassword = async (username: string) => {
    return await AuthService.resetPassword(username);
  };

  const handleConfirmationSignUp = async (
    username: string,
    code: string
  ) => {
    await AuthService.confirmSignUp(username, code);
  };

  const handleConfirmationSignIn = async (
    challengeResponse: string
  ) => {
    return await AuthService.confirmSignIn(challengeResponse);
  };

  const handleConfirmResetPassword = async (
    username: string,
    code: string,
    newPassword: string
  ) => {
    await AuthService.confirmResetPassword(username, code, newPassword);
  };

  return {
    handleSignIn,
    handleSignUp,
    handleSignOut,
    handleResetPassword,
    handleConfirmResetPassword,
    handleConfirmationSignUp,
    handleConfirmationSignIn,
  };
};

export default useAuth;
