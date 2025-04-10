import { MenuContainer } from "../../../../components/Menu/menu-container";

const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;
  console.log(`MenuPage ${restaurantId}`);
  return <MenuContainer restaurantId={restaurantId} />;
};

export default MenuPage;
