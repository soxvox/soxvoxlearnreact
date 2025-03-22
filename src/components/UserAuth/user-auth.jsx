import { use } from "react";
import { Button } from "../Button/button";
import { UserContext } from "../UserContext";

export const UserAuth = () => {
  const { user, authUser } = use(UserContext);

  return (
    <>
      {user && <>Hi, {user}!</>}
      <Button onClick={authUser}>{user ? "Log out" : "Log in"}</Button>
    </>
  );
};
