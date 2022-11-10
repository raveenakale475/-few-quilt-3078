import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Middle from "./Components/Middle";
import { slideOne, firstSlide, secondSlide, slideTwo } from "./Components/data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      {slideOne()}
      {slideTwo()}
    </div>
  );
}

export default App;
