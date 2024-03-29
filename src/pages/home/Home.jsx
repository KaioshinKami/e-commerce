import { Header } from "../../widgets/header/index";
import { Intro } from "../../widgets/intro";
import { TovaryHome } from "../../entities/Tovary";
import { Facts } from "../../entities/factsAboutPlants";
import { PopularPlants } from "../../entities/popularPlants";
import { InstagramPosts } from "../../entities/instagramPosts";
import { Footer } from "../../widgets/footer";

export default function Home() {
  return (
    <div>
      <Header></Header>

      <Intro></Intro>

      <TovaryHome></TovaryHome>

      <Facts></Facts>

      <PopularPlants></PopularPlants>

      <InstagramPosts></InstagramPosts>

      <Footer></Footer>
    </div>
  );
}
