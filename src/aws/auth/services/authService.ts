import {
  autoSignIn,
  confirmResetPassword,
  confirmSignIn,
  confirmSignUp,
  fetchAuthSession,
  getCurrentUser,
  resetPassword,
  signIn,
  signOut,
  signUp,
} from "aws-amplify/auth";

export const AuthService = {
  signIn: (username: string, password: string) =>
    signIn({ username, password }),

  signOut: () => signOut(),

  confirmSignIn: (challengeResponse: string) =>
    confirmSignIn({ challengeResponse }),

  signUp: (
    username: string,
    password: string,
    options: Record<string, string>
  ) =>
    signUp({
      username,
      password,
      options: {
        userAttributes: { ...options },
        autoSignIn: { enabled: true },
      },
    }),

  confirmSignUp: (username: string, confirmationCode: string) =>
    confirmSignUp({ username, confirmationCode }),

  autoSignIn: () => autoSignIn(),

  resetPassword: (username: string) => resetPassword({ username }),

  confirmResetPassword: (
    username: string,
    confirmationCode: string,
    newPassword: string
  ) => confirmResetPassword({ username, confirmationCode, newPassword }),

  currentUser: () => getCurrentUser(),

  currentSession: () => fetchAuthSession({ forceRefresh: true }),
};
