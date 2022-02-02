import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Shop from "./Pages/Shop";
import Productdetails from "./Pages/Productdetails";
import CheckOut from "./Pages/CheckOut";
import E404 from "./Pages/E404";
import Cart from "./Pages/Cart";
import Blog from "./Pages/Blog";
import BlogSingle from "./Pages/BlogSingle";
import Carasol from "./Pages/Carasol";
import Products from "./Products";
import UserComponent from "./Components/UserComponent";
// import Products from "./Pages/SubContainer/ProductContainer/Products";
// import Carosal from "./Pages/SubContainer/HomeContainer/Carosal";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productdetail" element={<Productdetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/error" element={<E404 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<BlogSingle />} />
        <Route path="/blogSingle" element={<BlogSingle />} />
      </Routes>
      {/* <Carosal /> */}
      {/* <Products /> */}
      {/* <UserComponent /> */}
    </div>
  );
}

export default App;
