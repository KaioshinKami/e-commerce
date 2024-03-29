import "../assets/style/tovary.css";

import t1 from "../assets/img/t-1.svg";
import t2 from "../assets/img/t-2.svg";
import t3 from "../assets/img/t-3.svg";
import t4 from "../assets/img/t-4.svg";
import t5 from "../assets/img/t-5.svg";
import t6 from "../assets/img/t-6.svg";
import t7 from "../assets/img/t-7.svg";
import t8 from "../assets/img/t-8.svg";
import d1 from "../assets/img/t-9.svg";
import d2 from "../assets/img/t-10.svg";

const TovaryHome = () => {
  return (
    <div>
      <p className="new-arrival">New Arrival</p>
      <div className="grid-tovary">
        <div>
          <img src={t1} alt="t1" id="t1" />
        </div>
        <div>
          <img src={t2} alt="t2" id="t2" />
        </div>
        <div id="divBtm">
          <img src={t3} alt="t3" id="t3" />
          <button className="addToCart B1">Add to Cart</button>
        </div>
        <div>
          <img src={t4} alt="t4" id="t4" />
        </div>
        <div id="divBtm">
          <img src={t5} alt="t5" id="t5" />
          <button className="addToCart B2">Add to Cart</button>
        </div>
        <div>
          <img src={t6} alt="t6" id="t6" />
        </div>
        <div>
          <img src={t7} alt="t7" id="t7" />
        </div>
        <div>
          <img src={t8} alt="t8" id="t8" />
        </div>
      </div>

      <div className="more-products">
        <div className="pervoe">
          <p id="spring-summer">SPRING SUMMER 2023</p>
          <p id="weHave">We’ ve unlimited plant collections</p>
          <p id="allOur">
            All our arrangements are hand-tied in-house by our highly skilled
            floral designers in our workshop located in the heart of the flower
            district. Our experienced staff members are masters in the art of US
            Planty techniques.
          </p>
          <button className="shopNow">Shop Now</button>

          <img src={d1} alt="d1" />
        </div>

        <div className="vtoroe">
          <img src={d2} alt="d2" id="d2img" />
          <p id="Beauti">
            {" "}
            <i>Beautiful Indoor Plants </i>
          </p>
          <p id="plants">PLANTS STORE</p>
          <p id="organie">ORGANIE</p>
          <p id="store">STORE</p>
          <p id="we-offer">
            We offer all the benefits you would find at a high end local plants
            but at much more affordable prices thanks to our unique set-up that
            brings the art of crafting bouquets into the digital era.
          </p>
          <button className="shopNow">Shop Now</button>
        </div>
      </div>
    </div>
  );
};
export default TovaryHome;
