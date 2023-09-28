import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const OrderSucess = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return (
    <div
      className="order_sucess_container"
      style={{
        color: "#d2401e",
        textAlign: "center",
        marginTop: "5em",
        marginBottom: "5em"
      }}
    >
      <h1>Order has been sucessfully placed</h1>
      <h2 style={{ marginTop: "1em" }}>Thank You</h2>
      <div className="order_gif">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDFlMGJkZmJmOWFiMTRmNDFiNGMzMzMwNDQ5NGI4N2I4MDcwNGNhZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/FzEnTgMcYi9DEJD6QD/giphy.gif"
          alt="order completed"
        />
      </div>
    </div>
  );
};

export default OrderSucess;
