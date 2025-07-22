import React from "react";

const Header = ({ name }) => {
  return (
    <header role="banner">
      <h1>{name}</h1>
    </header>
  );
};

export default Header;
