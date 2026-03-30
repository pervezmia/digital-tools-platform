import { use, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import DigitalTools from "./components/DigitalTools";
import Nav from "./components/Nav";
import Stat from "./components/Stat";
import Cart from "./components/Cart";
import DigitalToolsCard from "./components/DigitalToolsCard";
import ActiveBtn from "./components/ActiveBtn";


const dataFetch = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

//ai promise jodi function er bire call kora hoi taile suspense er dorkar nai but function er vitor a dei taile akta error khete hobe ja suspense use korle sei error chole jabe.
const productsPromise = dataFetch();



function App() {
  const [isActive, setIsActive] = useState("products");
  // console.log(isActive);
  const [isCartSection, setIsCartSection] = useState("carts");

  const [cartContainer, setCartContainer] = useState([]);
  console.log(cartContainer.length);

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Stat></Stat>
      <ActiveBtn setIsActive={setIsActive} isActive={isActive} cartContainer = {cartContainer}></ActiveBtn>

      {isActive === "products" && <DigitalTools productsPromise={productsPromise} cartContainer = {cartContainer} setCartContainer = {setCartContainer}></DigitalTools>}

      {isActive === "carts" && <Cart cartContainer = {cartContainer} setCartContainer = {setCartContainer}></Cart>}
    </>
  );
}

export default App;
