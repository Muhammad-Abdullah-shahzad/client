import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function CheckoutBtn({ items, total, onClose }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setLoading(true);
    // Simulate slight delay for premium feel
    setTimeout(() => {
      setLoading(false);
      if (onClose) onClose();
      navigate("/checkout", { state: { items, total } });
    }, 800);
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading || items.length === 0}
      className={`
        w-full mt-4 py-3 px-4 rounded-md font-semibold text-[15px]
        flex items-center justify-center transition-all duration-300
        ${
          loading || items.length === 0
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[#2c2c2c] text-white hover:bg-[#444] shadow-md hover:shadow-lg cursor-pointer border-none outline-none"
        }
      `}
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin text-lg" />
      ) : (
        `Checkout • $${total.toFixed(2)}`
      )}
    </button>
  );
}
