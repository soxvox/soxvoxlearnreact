import { Dish } from "./dish";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </ul>
    </>
  );
};
