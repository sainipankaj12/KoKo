import Navbs from "./component/Navbs";
import Home from "./component/Home";
import Product from "./component/Product";
import Contact from "./component/Contact";
import About from "./component/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Registration from "./component/Registration";
import Cart from "./component/Cart";
import SingleProduct from "./component/SingleProduct";
import Error from "./component/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbs />

      <Routes>
        <Route exact path="/KoKo/" element={<Home />} />

        <Route exact path="/Product" element={<Product />} />
        <Route exact path="/Product/:id" element={<SingleProduct />} />

        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Registration" element={<Registration />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
