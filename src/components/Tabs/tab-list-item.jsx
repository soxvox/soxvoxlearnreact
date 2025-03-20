import styles from "./tab-list-item.module.css";

export const TabListItem = ({ children, onClick, active }) => {
  return (
    <li
      style={{
        backgroundColor: active ? "#FFFFFF" : "#DDDDDD",
      }}
      className={styles.tabListItem}
    >
      <button onClick={onClick}>{children}</button>
    </li>
  );
};
