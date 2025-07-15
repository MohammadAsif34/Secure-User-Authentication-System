import { useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./Context";

// USER_CONTEXT_PROVIDER
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_SERVER_API}user`,
          {
            withCredentials: true,
          }
        );
        console.log("protected api :: ", res.data);
        setUser(res.data.info);
      } catch (error) {
        console.error("User fetch failed:", error.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
