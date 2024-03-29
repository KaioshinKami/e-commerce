import "../assets/style/sortingProducts.css";

const SortingProducts = () => {
  return (
    <>
      <div className="sorting-div">
        <div>
          <p className="nameOfSett">Plats</p>

          <p className="place">Living Room</p>
          <p className="place">Dining Room</p>
          <p className="place">Office Room</p>
          <p className="place">Outdoor Room</p>
        </div>

        <div>
          <p className="nameOfSett">Filter By Price</p>
          <input type="range" id="inputF" /> <br />
          <button id="btnF">Filter</button>
        </div>

        <div>
          <p className="nameOfSett">Select By Color</p>

          <div id="colors-grid">
            <p className="colors">Black</p>
            <p className="countsOfColors">(6)</p>

            <p className="colors">Blue</p>
            <p className="countsOfColors">(9)</p>

            <p className="colors">Brown</p>
            <p className="countsOfColors">(15)</p>

            <p className="colors">Green</p>
            <p className="countsOfColors">(7)</p>

            <p className="colors">Pink</p>
            <p className="countsOfColors">(13)</p>
          </div>
        </div>

        <div>
          <p className="nameOfSett">Manufacturer</p>

          <div id="colors-grid">
            <p className="colors">Brake Parts</p>
            <p className="countsOfColors">(6)</p>

            <p className="colors">Accessories</p>
            <p className="countsOfColors">(9)</p>

            <p className="colors">Engine Parts</p>
            <p className="countsOfColors">(15)</p>

            <p className="colors">hermes</p>
            <p className="countsOfColors">(7)</p>

            <p className="colors">louis vuitton</p>
            <p className="countsOfColors">(13)</p>
          </div>
        </div>

        <div>
          <p className="nameOfSett">Product Tags</p>

          <div id="tags-grid">
            <button className="tags">Plant</button>
            <button className="tags">Indoor</button>
            <button className="tags">Outdoor</button> <br />
            <button className="tags">living room</button>
            <button className="tags">Garden</button>
            <button className="tags">office</button> <br />
            <button className="tags">Plant</button>
            <button className="tags">Indoor</button>
            <button className="tags">Outdoor</button>
          </div>
        </div>

        <div>
          <p className="nameOfSett">Compare</p>
        </div>
      </div>
    </>
  );
};

export default SortingProducts;
