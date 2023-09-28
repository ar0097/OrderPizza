import React from "react";
import "../styles.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartForm = () => {
  const navigate = useNavigate();

  return (
    <div className="form_container">
      <div className="form_content">
        <div className="form_text">
          <div className="form_title">
            <h2>WELCOME TO ITALIAN PIZZA!</h2>
            <p>We deliver pizza in 40 minutes max. If not - Pizza's on us!</p>
          </div>

          <div className="form_inputs">
            <div className="email">
              <p>Email</p>
              <input type="email" />
            </div>
            <div className="phone">
              <p>Phone</p>
              <input type="number" />
            </div>
            <div className="slices">
              <p>Number of slices</p>
              <input type="number" />
            </div>
            <div className="pizza_size">
              <p>Pizza Size</p>
              <input type="radio" id="8-inch" name="pizza" checked="true" />
              &nbsp;
              <label for="8-inch">8-inch</label>
              &nbsp;
              <input type="radio" id="10-inch" name="pizza" />
              &nbsp;
              <label for="10-inch">10-inch</label>
              &nbsp;
              <input type="radio" id="12-inch" name="pizza" />
              &nbsp;
              <label for="12-inch">12-inch</label>
              &nbsp;
              <input type="radio" id="14-inch" name="pizza" />
              &nbsp;
              <label for="14-inch">14-inch</label>
            </div>

            <div className="toppings">
              <p>Toppings</p>
              <input type="checkbox" id="Pepperoni" name="pizza" />
              &nbsp;
              <label for="Pepperoni">Pepperoni</label>
              &nbsp;
              <input type="checkbox" id="Onions" name="pizza" />
              &nbsp;
              <label for="Onions">Onions</label>
              &nbsp;
              <input type="checkbox" id="Mushrooms" name="pizza" />
              &nbsp;
              <label for="Mushrooms">Mushrooms</label>
              &nbsp;
              <span className="Sausage">
                <input type="checkbox" id="Sausage" name="pizza" />
                &nbsp;
                <label for="Sausage">Sausage</label>
              </span>
            </div>

            <div className="checkbox">
              <input type="checkbox" />
              <p>I agree to the TERMS AND CONDITIONS</p>
            </div>
          </div>
        </div>

        <div className="order_button">
          <Button
            className="order_now_button"
            variant="contained"
            onClick={() => navigate("/order-sucess")}
          >
            Order Now
          </Button>
          <div className="back_home_button">
            <Button
              className="home_button"
              variant="contained"
              onClick={() => navigate("/")}
            >
              Back To Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
