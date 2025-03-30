import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import { CartListItemContainer } from "./cart-list-item-container";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return null;
  }

  return (
    <ul>
      {items.map((cartItem) => (
        <CartListItemContainer key={cartItem.id} item={cartItem} />
      ))}
    </ul>
  );
};
