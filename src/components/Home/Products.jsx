import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import useGET from "../../hooks/useGET";

export const renderProduct = (products) => {
  return products.map((product) => (
    <ProductCard key={product._id} product={product} />
  ))
}
export default function Products() {
  const { data, loading, error } = useGET(`${import.meta.env.VITE_API_URL}/myecom/products?limit=8`);

  if (loading) {
    return (
      <section className="py-16 px-4 bg-[var(--bg-color-main)]">
        <h2 className="text-center text-2xl tracking-widest uppercase mb-12 text-[#2c2c2c] font-light">
          Our Collection
        </h2>
        <div className="flex justify-center items-center h-64">
           <p className="text-sm tracking-[0.2em] uppercase text-gray-400 animate-pulse">Loading collection...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 bg-[var(--bg-color-main)] text-center">
        <p className="text-red-500 text-xs tracking-widest uppercase">Error loading collection: {error}</p>
      </section>
    );
  }

  const products = data?.products || [];

  return (
    <section className="py-16 px-4 bg-[var(--bg-color-main)]">
      <h2 className="text-center text-2xl tracking-widest uppercase mb-12 text-[#2c2c2c] font-normal sticky top-0 bg-[var(--bg-color-main)] z-10 py-2">
        Our Collection
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
        {renderProduct(products)}
      </div>
      <div className="flex justify-center mt-12">
        <Link
          to="/all-products"
          className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[#2c2c2c] border-b border-transparent hover:border-[#2c2c2c] transition-all duration-300 pb-1"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
