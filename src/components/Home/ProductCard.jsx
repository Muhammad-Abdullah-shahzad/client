import { Link } from "react-router-dom";

const textColor = "text-[rgb(157,82,72)]";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="flex flex-col items-center cursor-pointer group no-underline">
      <div className="bg-[var(--bg-color-main)] w-full aspect-[3/4] flex items-center justify-center overflow-hidden rounded-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="bg-[var(--bg-color-main)] transition-all ease-in-out duration-300 px-16 py-2 group-hover:translate-y-[-50px] ">
        <h3 className="mt-3 text-sm tracking-wide text-[#2c2c2c] font-normal text-center">
          {product.name}
        </h3>
        <p className={`mt-1 text-xs tracking-wide ${textColor} text-center`}>
          {product.material}
        </p>
      </div>
    </Link>
  );
}
