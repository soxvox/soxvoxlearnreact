import { useState, useEffect } from "react";

const getPosition = () => {
  return parseInt(
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      100
  );
};

export const ScrollProgressBar = () => {
  const [scrollPositionPercent, setScrollPositionPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollPositionPercent(getPosition());
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div
      style={{
        backgroundColor: "red",
        width: `${scrollPositionPercent}%`,
        height: "2px",
      }}
    />
  );
};
