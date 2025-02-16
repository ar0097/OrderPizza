import React from "react";
import Navbar from "./Navbar";
import Products from "./Product";
import "../styles.css";

const MenuLight = () => {
  return (
    <div className="menu_light_container">
      <div className="nav_component">
        <Navbar />
      </div>

      <div className="products_container2">
        <div className="product_header">
          <h4>CHOOSE YOUR FAVORITE</h4>
          <h1>MENU LIGHT</h1>
        </div>
        <Products />
      </div>
    </div>
  );
};

export default MenuLight;
