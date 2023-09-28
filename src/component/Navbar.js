import React from "react";
import "../styles.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav_container">
      <div className="nav_logo">
        <img
          src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/logo-left.png"
          height="91"
          alt="pizza-logo"
        />
      </div>

      <div className="nav_list">
        <ul>
          <li
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          >
            HOME
          </li>
          <li
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
              });
            }}
          >
            PAGES
          </li>
          <li
            onClick={() => {
              navigate("/menu-light");
              window.scrollTo(0, 0);
            }}
          >
            MENU
          </li>
          <li>EVENTS</li>
          <li>BLOG</li>
          <li>LANDING</li>
        </ul>
      </div>

      <div className="nav_buttons">
        <ul>
          <li>
            <TwitterIcon className="icon" />
          </li>
          <li>
            <FacebookIcon className="icon" />
          </li>
          <li>
            <InstagramIcon className="icon" />
          </li>
          <li>
            <LinkedInIcon className="icon" />
          </li>
        </ul>

        <button>ORDER ONLINE</button>
      </div>
    </div>
  );
};

export default Navbar;
