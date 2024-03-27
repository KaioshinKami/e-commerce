import "../assets/style/instagramPosts.css";

import img1 from "../assets/img/p-1.svg";
import img2 from "../assets/img/p-2.svg";
import img3 from "../assets/img/p-3.svg";
import img4 from "../assets/img/p-4.svg";
import img5 from "../assets/img/p-5.svg";
import telega from "../assets/img/telega.svg";
import comm from "../assets/img/24.svg";

const InstagramPosts = () => {
  return (
    <div>
      <p id="follow">FOLLOW US</p>

      <p id="inst">#Instagramplant</p>

      <div className="instagram-grid">
        <div>
          <img src={img1} alt="img1" />
        </div>
        <div>
          <img src={img2} alt="img2" />
        </div>
        <div>
          <img src={img3} alt="img3" />
        </div>
        <div>
          <img src={img4} alt="img4" />
        </div>
        <div>
          <img src={img5} alt="img5" />
        </div>
      </div>

      <div className="adv-grid">
        <div className="firstWithoutbr">
          <div>
            <img src={telega} alt="telega" />
          </div>
          <div>
            <p className="free">Free Shipping</p>
            <p className="emprow">Empowering all people to be plant people</p>
          </div>
        </div>

        <div className="second">
          <div>
            <img src={comm} alt="telega" />
          </div>
          <div>
            <p className="free">24/7 Delicated Support</p>
            <p className="emprow">Empowering all people to be plant people</p>
          </div>
        </div>

        <div className="second">
          <div>
            <img src={telega} alt="telega" />
          </div>
          <div>
            <p className="free">Money Back</p>
            <p className="emprow">Empowering all people to be plant people</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramPosts;
