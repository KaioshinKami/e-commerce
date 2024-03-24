import "./home.css";

export default function Home() {
  const image = "./src/pages/homePage/homePhotos/Group.png";
  const image2 = "./src/pages/homePage/homePhotos/plant-2.png";
  const image3 = "./src/pages/homePage/homePhotos/plant-3.png";
  const image4 = "./src/pages/homePage/homePhotos/plant-4.png";
  const image5 = "./src/pages/homePage/homePhotos/plant-5.png";
  const cart = "./src/pages/homePage/homePhotos/cart.png";
  const fresh = "./src/pages/homePage/homePhotos/freshHelmet.png";
  const sale = "./src/pages/homePage/homePhotos/sale-15.png";
  const rectangle = "./src/pages/homePage/homePhotos/Rectangle-4.png";
  const image51 = "./src/pages/homePage/homePhotos/plant-5-1.png";

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
          </a>{" "}
        </div>{" "}
      </div>

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
              <img src={image51} alt="" id="image5-2" />
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
    </header>
  );
}
