"use client";

import { MenuContainer } from "../Menu/menu-container";

export const MenuPage = ({ children, restaurantId }) => {
  return <MenuContainer restaurantId={restaurantId}>{children}</MenuContainer>;
};
