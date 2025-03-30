import { DishListItemContainer } from "../Menu/dish-list-item-container";

export const Menu = ({ menuIds }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menuIds.map((id) => (
          <DishListItemContainer key={id} id={id} />
        ))}
      </ul>
    </>
  );
};
