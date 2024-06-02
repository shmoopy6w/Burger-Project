import "./App.css";
import BigBurger from "./components/BigBurger";
import Burger from "./components/Burger";
import Hero from "./components/Hero";
import OurChef from "./components/OurChef";
import Extra from "./components/Extra";
import Statistics from "./components/Statistics";
import PopularPackage from "./components/PopularPackage";
import Updates from "./components/Updates";
import Order_now from "./components/Order_now";


function App() {
  return (
    <>
      <Hero/>
      <OurChef/>
      <Burger/>
      <BigBurger/>
      <Statistics/>
      <PopularPackage/>
      <Extra/>
      <Updates/>
    </>
  );
}

export default App;
