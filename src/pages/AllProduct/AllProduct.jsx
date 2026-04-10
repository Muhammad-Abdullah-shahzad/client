import React from "react";
import useGET from "../../hooks/useGET";
import { renderProduct } from "../../components/Home/Products";

export default function AllProduct() {
  const { data: fetchedProducts, loading, error } = useGET(
    `${import.meta.env.VITE_API_URL}/myecom/products`
  );
  console.log(fetchedProducts);

  if (loading) {
    return (
      <div className="max-w-screen-xl mx-auto py-32 px-4 flex justify-center items-center">
        <p className="text-lg tracking-widest uppercase text-gray-500 animate-pulse">Loading Collection...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-screen-xl mx-auto py-32 px-4 text-center">
        <p className="text-red-500 tracking-wide">Error loading products: {error}</p>
      </div>
    );
  }

  // Transform API data to match the format expected by ProductCard


  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4">
      <h1 className="text-center text-3xl tracking-widest uppercase mb-16 text-[#2c2c2c] font-normal">
        All Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {renderProduct(fetchedProducts)}
      </div>
    </div>
  );
}
