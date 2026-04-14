import { Link } from "react-router-dom";
import AddToCartBtn from "../Cart/AddToCartBtn";

const textColor = "text-[rgb(157,82,72)]";

export default function ProductCard({ product }) {
  const productId = product._id || product.productId || product.id;
  const imageUrl = product.image || product.images?.[0]?.imageUrl || "";
  const label = product.material || product.tags?.[0] || "Premium Quality";

  return (
    <div className="relative flex flex-col items-center cursor-pointer group">
      <Link to={`/product/${productId}`} className="flex flex-col items-center w-full no-underline">
        <div className="bg-[var(--bg-color-main)] w-full aspect-[3/4] flex items-center justify-center overflow-hidden rounded-sm relative">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="bg-[var(--bg-color-main)] transition-all ease-in-out duration-300 px-16 py-2 group-hover:translate-y-[-50px]">
          <h3 className="mt-3 text-sm tracking-wide text-[#2c2c2c] font-normal text-center">
            {product.name}
          </h3>
          <p className={`mt-1 text-xs tracking-wide ${textColor} text-center`}>
            {label}
          </p>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <AddToCartBtn
        product={product}
        imageUrl={imageUrl}
        className="absolute bottom-[70px] right-3 z-10 opacity-100"
      />
    </div>
  );
}

