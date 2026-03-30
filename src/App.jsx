import "./App.css";
import Banner from "./components/Banner";
import DigitalTools from "./components/DigitalTools";
import Nav from "./components/Nav";
import Stat from "./components/Stat";

const dataFetch = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

//ai promise jodi function er bire call kora hoi taile suspense er dorkar nai but function er vitor a dei taile akta error khete hobe ja suspense use korle sei error chole jabe.
const productsPromise = dataFetch();

function App() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Stat></Stat>
      <DigitalTools productsPromise={productsPromise}></DigitalTools>
    </>
  );
}

export default App;
