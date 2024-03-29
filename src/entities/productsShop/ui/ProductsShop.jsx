import "../assets/style/productsShop.css";

import ph1 from "../assets/img/g-1.svg";
import ph2 from "../assets/img/g-2.svg";
import ph3 from "../assets/img/g-3.svg";
import ph4 from "../assets/img/g-4.svg";
import ph5 from "../assets/img/g-5.svg";
import ph6 from "../assets/img/g-6.svg";
import ph7 from "../assets/img/g-7.svg";
import ph8 from "../assets/img/g-8.svg";
import ph9 from "../assets/img/g-9.svg";
import ph10 from "../assets/img/g-10.svg";
import ph11 from "../assets/img/g-11.svg";
import ph12 from "../assets/img/g-12.svg";
import ph13 from "../assets/img/g-13.svg";
import ph14 from "../assets/img/g-14.svg";
import ph15 from "../assets/img/g-15.svg";
import ph16 from "../assets/img/g-16.svg";
import ph17 from "../assets/img/g-17.svg";
import ph18 from "../assets/img/g-18.svg";

const ProductsShop = () => {
  return (
    <>
      <div className="products-grid">
        <img src={ph1} alt="ph1" className="products" />
        <div className="img-div">
          <img src={ph2} alt="ph2" className="products" />
          <button id="cartBtn2">Add to Cart</button>
        </div>
        <img src={ph3} alt="ph3" className="products" />

        <img src={ph4} alt="ph4" className="products" />
        <img src={ph5} alt="ph5" className="products" />
        <div className="img-div">
          <img src={ph6} alt="ph6" className="products" />
          <button id="cartBtn7">Add to Cart</button>
        </div>

        <div className="img-div">
          <img src={ph7} alt="ph7" className="products" />
          <button id="cartBtn1">Add to Cart</button>
        </div>
        <img src={ph8} alt="ph8" className="products" />
        <div className="img-div">
          <img src={ph9} alt="ph9" className="products" />
          <button id="cartBtn7">Add to Cart</button>
        </div>

        <img src={ph10} alt="ph10" className="products" />
        <img src={ph11} alt="ph11" className="products" />
        <img src={ph12} alt="ph12" className="products" />

        <img src={ph13} alt="ph13" className="products" />
        <img src={ph14} alt="ph14" className="products" />
        <div className="img-div">
          <img src={ph15} alt="ph15" className="products" />
          <button id="cartBtn7">Add to Cart</button>
        </div>

        <div className="img-div">
          <img src={ph16} alt="ph16" className="products" />
          <button id="cartBtn1">Add To Cart</button>
        </div>
        <img src={ph17} alt="ph17" className="products" />
        <div className="img">
          <img src={ph18} alt="ph18" className="products" />
          <button id="cartBtn7">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductsShop;
