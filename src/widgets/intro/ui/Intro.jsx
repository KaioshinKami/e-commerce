import "../assets/styles/intro.css";
import "../../../shared/assets/style/fonts/josefin-sans.css";
import "../../../shared/assets/style/fonts/josefin-slab.css";
import "../../../shared/assets/style/fonts/marcellus.css";

import image3 from "../assets/img/plant-1.svg";
import fresh from "../assets/img/fresh-helmet.svg";
import image4 from "../assets/img/plant-4.svg";
import image5 from "../assets/img/plant-5.svg";
import rectangle from "../assets/img/Rectangle-4.svg";
import image52 from "../assets/img/plant-5-2.svg";
import sale from "../assets/img/sale-15.svg";
import image2 from "../assets/img/plant-2.svg";

const Intro = () => {
  return (
    <div className="grid-main">
      <div className="left">
        <img src={image3} alt="" id="plant3" />
        <img src={fresh} alt="" id="fresh" />

        <div className="grid-authentic">
          <div className="image4">
            <img src={image4} alt="" />
          </div>

          <div className="descrp">
            <p id="info-1">100%</p>
            <p id="info-2">authentic product</p>
          </div>
        </div>
      </div>

      <div className="middleText">
        <p>Beautify Your Home With Plants</p>

        <div className="chto-to">
          <div className="image5">
            <img src={rectangle} alt="" />
            <img src={image5} alt="" id="image5-1" />
            <img src={image52} alt="" id="image5-2" />
          </div>

          <div className="more-items-div">
            <p id="more-items-descr">More items you can find in our store</p>

            <button id="button-more-items">Shop Now</button>
          </div>
        </div>
      </div>

      <div className="rightSide">
        <div id="salePng">
          <img src={sale} alt="" />
        </div>
        <div id="image2">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
