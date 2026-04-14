import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineLoading3Quarters, AiOutlineCheck } from "react-icons/ai";
import { getDataLocalStorage } from "../../Utils/LocalStorage";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function AddToCartBtn({ product, imageUrl, className = "" }) {
  const [cartStatus, setCartStatus] = useState("idle"); // idle | loading | success | error
  console.log(product);
  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (cartStatus === "loading" || cartStatus === "success") return;

    setCartStatus("loading");

    try {
      const userId = getDataLocalStorage("ecom_user_Id");
      const response = await fetch(`${BASE_URL}/myecom/cart/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id,
          itemImg: imageUrl,
          itemName: product.name,
          itemPrice: product.price,
        }),
      });
      console.log(response.status);
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
    <button
      onClick={handleAddToCart}
      title="Add to cart"
      className={`
        w-9 h-9 rounded-full flex items-center justify-center
        transition-all duration-300 ease-in-out
        cursor-pointer border-none outline-none
        ${cartStatus === "success"
          ? "bg-green-600 text-white shadow-lg"
          : cartStatus === "error"
            ? "bg-red-500 text-white shadow-lg"
            : "bg-[#2c2c2c] text-white shadow-md hover:bg-[#444] hover:shadow-lg"
        }
        ${className}
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
  );
}
