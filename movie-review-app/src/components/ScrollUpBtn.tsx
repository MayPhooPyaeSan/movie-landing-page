import React from "react";

const ScrollUpBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}
    >
      <button className="scrollUpBtn" onClick={scrollToTop}>
        ↑
      </button>
    </div>
  );
};

export default ScrollUpBtn;
