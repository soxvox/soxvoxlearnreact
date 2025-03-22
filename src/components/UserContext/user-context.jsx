import { useState } from "react";
import { UserContext as UserContextProvider } from ".";

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const authUser = () => {
    if (!user) {
      setUser("User");
    } else {
      setUser(undefined);
    }
  };

  return (
    <UserContextProvider value={{ user, authUser }}>
      {children}
    </UserContextProvider>
  );
};
