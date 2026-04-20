import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import AllProduct from "./pages/AllProduct/AllProduct"
import Checkout from "./pages/Checkout/Checkout"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProduct title="All Products" gender="" />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/men" element={<AllProduct title="Men" gender="Men" />} />
        <Route path="/women" element={<AllProduct title="Women's Collection" gender="Women" />} />
        <Route path="/kids" element={<AllProduct title="Kids Corner" gender="Kids" />} />
        <Route path="/gifts" element={<AllProduct title="Gifts & Accessories" category="Gifts" />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}