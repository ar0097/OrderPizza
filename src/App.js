import React from "react";
import Home from "./component/Home";
import { store } from "./component/store";
import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CartForm from "./component/CartForm";
import OrderSucess from "./component/OrderSuccess";
import MenuLight from "./component/MenuLight";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<CartForm />} />
            <Route path="/order-sucess" element={<OrderSucess />} />
            <Route path="/menu-light" element={<MenuLight />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
