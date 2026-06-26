import './style.css';

import Nav from "./Navigation/Nav";
import Product from "./Product/Product";
import Recommended from "./Recommended/Recommended";

// import Category from "./Sidebar/Category";
// import Price from "./Price/Price";
// import Color from "./Color/Color";

const App = () => {
  return (
    <>
      <Nav />
      <Product />
      <Recommended />
      {/* <Category /> */}
      {/* <Price /> */}
      {/* <Color /> */}
    </>
  )
}

export default App;
