import { DishListItemContainer } from "../Menu/dish-list-item-container";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {menu.map((dish) => (
          <DishListItemContainer key={dish.id} dish={dish} />
        ))}
      </ul>
    </>
  );
};
