import { Header } from "../../widgets/header";
import { Name } from "../../entities/nameOfPage";
import SortingProducts from "../../features/sortingProducts/ui/SortingProducts";
import ProductsShop from "../../entities/productsShop/ui/ProductsShop";
import { Footer } from "../../widgets/footer";

const Shop = () => {
  return (
    <>
      <Header></Header>

      <Name></Name>

      <SortingProducts></SortingProducts>

      <ProductsShop></ProductsShop>

      <Footer></Footer>
    </>
  );
};

export default Shop;
