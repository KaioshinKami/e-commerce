import "../assets/style/footer.css";

import logo from "../assets/img/logo.svg";
import facebook from "../assets/img/facebook.svg";
import inst from "../assets/img/inst.svg";
import someth from "../assets/img/in.svg";
import pinterest from "../assets/img/pinterest.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="logo" />

        <p id="planti">
          Planti gives you best plant to engage more to all customer.
          Collaborate with friends and family.
        </p>
      </div>

      <div>
        <p className="topic">Quick link</p>

        <p className="paragr">Help & Support</p>

        <p className="paragr">Product Pricing</p>

        <p className="paragr">FAQ</p>
      </div>

      <div>
        <p className="topic">Product</p>

        <p className="paragr">Living Room</p>

        <p className="paragr">Dining Room</p>

        <p className="paragr">Office</p>

        <p className="paragr">Outdoor</p>
      </div>

      <div>
        <p className="topic">Contact</p>

        <p id="address">4517 Washington Ave. Manchester, Kentucky 39495</p>

        <p className="paragr">planty@example.com</p>

        <p id="num">330-454-4066</p>
      </div>

      <div>
        <p id="term">Terms and Conditions</p>
      </div>
      <div className="app-links">
        <a href="#">
          {" "}
          <img src={facebook} alt="face" />
        </a>
        <a href="#">
          <img src={inst} alt="inst" />
        </a>
        <a href="#">
          <img src={someth} alt="some" />
        </a>
        <a href="#">
          <img src={pinterest} alt="pin" />
        </a>
      </div>

      <div id="year">
        <p id="right">@2023 Planti | All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
