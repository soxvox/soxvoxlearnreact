import { MenuContainer } from "../Menu/menu-container";
import { useParams } from "react-router";

export const MenuPage = () => {
  const { restaurantId } = useParams();

  return <MenuContainer restaurantId={restaurantId} />;
};
