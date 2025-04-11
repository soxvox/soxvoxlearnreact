import { DishContainer } from "../../Menu/dish-container";

const DishPage = async ({ params }) => {
  const { dishId } = await params;

  return <DishContainer id={dishId} />;
};

export default DishPage;
