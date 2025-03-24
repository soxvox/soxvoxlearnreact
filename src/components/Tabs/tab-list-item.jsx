import styles from "./tab-list-item.module.css";
import { Button } from "../Button/button";

export const TabListItem = ({ children, onClick, active }) => {
  return (
    <Button
      onClick={onClick}
      className={styles.tabListItem}
      colorViewVariant={active ? "active" : undefined}
      sizeViewVariant="padding5"
    >
      {children}
    </Button>
  );
};
