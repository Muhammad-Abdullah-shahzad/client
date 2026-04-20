import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineLoading3Quarters, AiOutlineCheck } from "react-icons/ai";
import { getDataLocalStorage } from "../../Utils/LocalStorage";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function AddToCartBtn({ product, imageUrl, className = "", isLarge = false }) {
  const [cartStatus, setCartStatus] = useState("idle"); // idle | loading | success | error

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

      if (!response.ok) throw new Error("Failed to add to cart");

      setCartStatus("success");
      setTimeout(() => setCartStatus("idle"), 1500);
    } catch (err) {
      console.error("Add to cart error:", err);
      setCartStatus("error");
      setTimeout(() => setCartStatus("idle"), 1500);
    }
  };

  if (isLarge) {
    return (
      <button
        onClick={handleAddToCart}
        disabled={cartStatus === "loading" || cartStatus === "success"}
        className={`
          w-full py-4 px-6 flex items-center justify-center gap-3
          transition-all duration-300 ease-in-out uppercase text-xs tracking-[0.2em]
          cursor-pointer border-none outline-none font-medium
          ${cartStatus === "success"
            ? "bg-green-600 text-white"
            : cartStatus === "error"
              ? "bg-red-500 text-white"
              : "bg-[#2c2c2c] text-white hover:bg-[#444]"
          }
          ${className}
        `}
      >
        {cartStatus === "loading" ? (
          <AiOutlineLoading3Quarters className="animate-spin text-lg" />
        ) : cartStatus === "success" ? (
          <><AiOutlineCheck className="text-lg" /> Added to Bag</>
        ) : cartStatus === "error" ? (
          "Error Occurred"
        ) : (
          "Add to Bag"
        )}
      </button>
    );
  }

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
