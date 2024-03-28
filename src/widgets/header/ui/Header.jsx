import "../assets/style/header.css";
import { Link } from "react-router-dom";

import image from "../assets/img/Group.svg";
import cart from "../assets/img/cart.svg";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <img src={image} alt="" id="logo" />
        <div>
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/shop" className="links">
            Shop
          </Link>
          <Link to="/product" className="links">
            Product
          </Link>
          <Link to="/cart">
            <img src={cart} alt="" className="cartLink" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
