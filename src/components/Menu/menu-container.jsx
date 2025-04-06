import { useSelector } from "react-redux";
import { Menu } from "./menu";
import { selectMenuIds } from "../../redux/entities/dish/slice";
import { getMenu } from "../../redux/entities/dish/get-menu";
import { useRequest } from "../../redux/hooks/use-request";

export const MenuContainer = ({ restaurantId }) => {
  const requestStatus = useRequest(getMenu, restaurantId);
  const menu = useSelector((state) => selectMenuIds(state, restaurantId));

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading menu...";
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  if (!menu.length) {
    return <div>menu not present. just give us a call!</div>;
  }

  return <Menu menuIds={menu} />;
};
