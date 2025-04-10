"use client";

import { useState } from "react";
import { UserContext as UserContextProvider } from ".";

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [userId, setUserId] = useState(undefined);

  const authUser = () => {
    if (!user) {
      setUser("User");
      setUserId("user-context-hardcoded-id");
    } else {
      setUser(undefined);
      setUserId(undefined);
    }
  };

  return (
    <UserContextProvider value={{ user, userId, authUser }}>
      {children}
    </UserContextProvider>
  );
};
