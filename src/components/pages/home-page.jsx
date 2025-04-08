import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div>
      <div>home page</div>
      <Link to="/restaurants">view restaurants</Link>
    </div>
  );
};
