import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import { Header } from "../widgets/header";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" />
      </Routes>
    </>
  );
}

export default App;
