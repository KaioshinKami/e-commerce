import "../assets/style/header.css";

import image from "../assets/img/Group.svg";
import cart from "../assets/img/cart.svg";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <img src={image} alt="" id="logo" />
        <div>
          <a href="" className="links">
            Home
          </a>
          <a href="" className="links">
            Shop
          </a>
          <a href="" className="links">
            Product
          </a>
          <a href="">
            <img src={cart} alt="" className="cartLink" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
