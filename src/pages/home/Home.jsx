import { Header } from "../../widgets/header/index";
import { Intro } from "../../widgets/intro";
import { Tovary } from "../../entities/Tovary";

export default function Home() {
  return (
    <div>
      <Header></Header>

      <Intro></Intro>

      <Tovary></Tovary>
    </div>
  );
}
