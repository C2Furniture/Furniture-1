import Footer from "./pages/layout/Footer";
import Navbar from "./pages/layout/Navbar";
import "./pages/styles files/App.css";
import { Routes, Route } from "react-router-dom";
// import AboutUs from "./pages/about-us/AboutUs";
import Products from "./pages/Products/Products";
// import ContactUs from "./pages/contact-us/ContactUs";
// import Home from "./pages/Home/Home";
// import Cart from "./pages/cart/Cart";
import SignUp from "./pages/login & singin/SingnUp";
import Login from "./pages/login & singin/Login";
import DataCardProvider from "./pages/Products/Context";

function App() {
  return (
    <>
      <Navbar />
      <DataCardProvider>
        <Routes>
          {/* <Route path="/Home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} /> */}
          <Route path="/products" element={<Products />} />
          {/* <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} /> */}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </DataCardProvider>

      <Footer />
    </>
  );
}

export default App;