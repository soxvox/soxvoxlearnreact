export const Tab = ({ children, onClick, active }) => {
  return (
    <li
      style={{
        padding: "5px",
        marginRight: "1px",
        border: "1px solid black",
        display: "inline",
        backgroundColor: active ? "#FFFFFF" : "#DDDDDD",
      }}
      onClick={onClick}
    >
      {children}
    </li>
  );
};
