import { DishListItem } from "./dish-list-item";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <DishListItem key={dish.id} dish={dish} />
        ))}
      </ul>
    </>
  );
};
