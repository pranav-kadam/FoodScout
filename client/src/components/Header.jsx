import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const foodScoutStyle = {
    color: "white",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "3rem",
    textAlign: "center",
  };

  return (
    <div style={headerStyle}>
      <h1 style={foodScoutStyle}>FoodScout</h1>
    </div>
  );
};

export default Header;
