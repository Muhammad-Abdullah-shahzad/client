import React from "react";
import { products, renderProduct } from "../../components/Home/Products";

export default function AllProduct() {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4">
      <h1 className="text-center text-3xl tracking-widest uppercase mb-16 text-[#2c2c2c] font-normal">
        All Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {renderProduct(products)}
      </div>
    </div>
  );
}
