import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import PageNotFound from "./Components/PageNotFound";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart-products" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
