import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineLoading3Quarters, AiOutlineCheck } from "react-icons/ai";
import { getDataLocalStorage } from "../../Utils/LocalStorage";

const textColor = "text-[rgb(157,82,72)]";

export default function ProductCard({ product }) {
  const productId = product._id || product.productId || product.id;
  const imageUrl = product.image || product.images?.[0]?.imageUrl || "";
  const label = product.material || product.tags?.[0] || "Premium Quality";

  const [cartStatus, setCartStatus] = useState("idle"); // idle | loading | success | error

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (cartStatus === "loading" || cartStatus === "success") return;

    setCartStatus("loading");

    try {
      const userId = getDataLocalStorage('ecom_user_Id');
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/myecom/cart/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId: product._id,
            itemImg: imageUrl,
            itemName: product.name,
            itemPrice: product.price,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to add to cart");

      setCartStatus("success");
      setTimeout(() => setCartStatus("idle"), 1500);
    } catch (err) {
      console.error("Add to cart error:", err);
      setCartStatus("error");
      setTimeout(() => setCartStatus("idle"), 1500);
    }
  };

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
      <button
        onClick={handleAddToCart}
        title="Add to cart"
        className={`
          absolute bottom-[70px] right-3 z-10
          w-9 h-9 rounded-full flex items-center justify-center
          transition-all duration-300 ease-in-out
          opacity-100
          cursor-pointer border-none outline-none
          ${cartStatus === "success"
            ? "bg-green-600 text-white shadow-lg"
            : cartStatus === "error"
              ? "bg-red-500 text-white shadow-lg"
              : "bg-[#2c2c2c] text-white shadow-md hover:bg-[#444] hover:shadow-lg"
          }
        `}
      >
        {cartStatus === "loading" ? (
          <AiOutlineLoading3Quarters className="text-sm animate-spin" />
        ) : cartStatus === "success" ? (
          <AiOutlineCheck className="text-sm" />
        ) : (
          <HiOutlineShoppingBag className="text-sm" />
        )}
      </button>
    </div>
  );
}
