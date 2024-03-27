import "../assets/style/popularPlants.css";

import p1 from "../assets/img/p-1.svg";
import p2 from "../assets/img/p-2.svg";
import p3 from "../assets/img/p-3.svg";
import p4 from "../assets/img/p-4.svg";
import p5 from "../assets/img/p-5.svg";

const PopularPlants = () => {
  return (
    <div className="popularPlants">
      <p id="more">More Popular Plants</p>

      <div className="grid-plants">
        <div id="p1">
          <img src={p1} alt="p1" />
        </div>
        <div id="p1div">
          <img src={p2} alt="p2" />
          <button id="cartBtn">Add to Cart</button>
        </div>
        <div>
          <img src={p3} alt="p3" />
        </div>
        <div>
          <img src={p4} alt="p4" />
        </div>
      </div>

      <div className="secPart">
        <div className="img5">
          <img src={p5} alt="p5" />
        </div>

        <div className="list">
          <p id="where">Where To Buy Plants Online</p>

          <div>
            <div className="first">
              <div id="n1">
                <p>1</p>
              </div>
              <div className="info">
                <p id="choose">Choose Plants</p>
                <p id="nulla">
                  Nulla suscipit lobortis viverra. Phasellus varius convallis
                  lorem at lobortis. Aliquam sit amet sem maximus
                </p>
              </div>
            </div>

            <div className="first">
              <div id="n1">
                <p>2</p>
              </div>
              <div className="info">
                <p id="choose">Place an Order</p>
                <p id="nulla">
                  Nulla suscipit lobortis viverra. Phasellus varius convallis
                  lorem at lobortis. Aliquam sit amet sem maximus
                </p>
              </div>
            </div>

            <div className="first">
              <div id="n1">
                <p>3</p>
              </div>
              <div className="info">
                <p id="choose">Get Plants Delivered</p>
                <p id="nulla">
                  Nulla suscipit lobortis viverra. Phasellus varius convallis
                  lorem at lobortis. Aliquam sit amet sem maximus
                </p>
              </div>
            </div>

            <button id="readBtn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPlants;
