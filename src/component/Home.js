import Navbar from "./Navbar";
import Products from "./Product";
import "../styles.css";
const Home = () => {
  return (
    <div className="home_container">
      <div className="nav_component">
        <Navbar />
      </div>

      <div className="home_content">
        <section className="intro_content">
          <div className="text_content">
            <h1>DELIVERY TO THE DOORSTEP</h1>
            <ul>
              <li>
                <img
                  src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-rev-img-4.png"
                  alt="tick mark"
                />
                <p>Choose your ingredients</p>
              </li>
              <li>
                <img
                  src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-rev-img-4.png"
                  alt="tick mark"
                />
                <p>Get free delivery 24/7</p>
              </li>
              <li>
                <img
                  src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-rev-img-4.png"
                  alt="tick mark"
                />
                <p>Special gift coupons</p>
              </li>
            </ul>
          </div>

          <div className="sub_button_text">
            <div className="sub_button">
              <input type="text" placeholder="Email..." />
              <button>SUBSCRIBE</button>
            </div>
            <div className="location_text">
              <img
                src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-rev-img-5.png"
                alt="location logo"
              />
              <p>check delivery zone</p>
            </div>
          </div>

          <div className="pizza_image rotate-animation">
            <img
              src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-rev-img-1.png"
              alt="pizza-pik"
            />
          </div>
        </section>

        <section className="products_container">
          <Products />
        </section>
      </div>
    </div>
  );
};

export default Home;
