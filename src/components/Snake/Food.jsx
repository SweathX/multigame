import React from "react";

const Food = ({ dot }) => {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };

  return <div className="food-dot" style={style}></div>;
};

export default Food;
