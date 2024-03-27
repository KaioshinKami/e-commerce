import "../assets/style/facts.css";

import background from "../assets/img/indoorPlants.svg";
import chair from "../assets/img/chair.svg";

const Facts = () => {
  return (
    <div id="info">
      <img src={background} alt="back" id="back-img" />
      <div className="info-grid">
        <div id="info-div">
          <p id="which">Which Idoor Plants Are Best?</p>
          <p id="its">
            Choosing the best indoor plants depends on factors such as light
            availability and personal preference. Popular options include Snake
            Plant, Spider Plant, and Peace Lily for their ease of care and
            air-purifying properties. For more options and detailed information,
            visit a gardening website or nursery.
          </p>
        </div>
        <div>
          <img src={chair} alt="chair" id="chair-img" />
        </div>
      </div>
    </div>
  );
};

export default Facts;
