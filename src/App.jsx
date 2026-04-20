import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import AllProduct from "./pages/AllProduct/AllProduct"

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
      </Routes>
    </BrowserRouter>
  )
}