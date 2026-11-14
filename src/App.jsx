import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./page/home/Home";
import ProductDetails from "./page/productDetails/ProductDetails";
import Cart from "./page/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/CategoryPage/CategoryPage";
import SearchResults from "./page/SearchResults";
import Favorites from "./page/favorites/Favorites"
import Register from "./page/register/Register";
function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />

      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
  path="/about"
  element={
    <div style={{ padding: "50px", color: "white" }}>
      <h1>About Us</h1>
      <p>
        Welcome to Anas Online Shop! We provide high-quality products
        with the best prices and a simple shopping experience.
      </p>
    </div>
  }
/>

<Route path="/register"
element={<Register />} />

<Route
  path="/blog"
  element={
    <div style={{ padding: "50px", color: "white" }}>
      <h1>Our Blog</h1>
      <h3>Latest News</h3>
      <p>Discover the latest products, offers, and shopping tips.</p>
    </div>
  }
/>

<Route
  path="/contact"
  element={
    <div style={{ padding: "50px", color: "white" }}>
      <h1>Contact Us</h1>
      <p>Email: info@anasshop.com</p>
      <p>Phone: +20 100 0000000</p>
      <p>We are always happy to help you!</p>
    </div>
  }
/>
<Route
  path="/register"
  element={
    <div style={{ padding: "50px", color: "white" }}>
      <h1>Customer Registration</h1>

      <form>
        <div>
          <label>Full Name</label>
          <br />
          <input type="text" placeholder="Enter your full name" />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input type="email" placeholder="Enter your email" />
        </div>

        <br />

        <div>
          <label>Phone Number</label>
          <br />
          <input type="tel" placeholder="Enter your phone number" />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input type="password" placeholder="Enter your password" />
        </div>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  }
/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} /> 
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
