import { Header } from "./components/Header";
import Carousel from "../src/components/Carousel/index";
import Titulo from "../src/assets/Título.png";
import SliderCard from "./components/SliderCards";
import { Footer } from "./components/Footer/inde";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="flex ml-96 pt-10 ">
        <img src={Titulo} alt="tituloProdutos" />
      </div>
      <SliderCard />
      <Footer />
    </>
  );
}

export default App;
