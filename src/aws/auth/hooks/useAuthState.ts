import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { useEffect, useState } from "react";

const useAuthState = () => {
  const [user, setUser] = useState<any>(null);
  const [tokens, setTokens] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = await getCurrentUser();
        const session = await fetchAuthSession();

        console.log("Current user:", currentUser);
        console.log("Session tokens-:", JSON.stringify(session.tokens));
        setUser(currentUser);
        setTokens(session.tokens);
      } catch (error) {
        setUser(null);
        setTokens(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  return { user, tokens, loading };
};

export default useAuthState;
