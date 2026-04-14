import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function CheckoutBtn({ items, total, onClose }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      setLoading(false);
      alert(`Checkout successful! You paid $${total.toFixed(2)}.`);
      if (onClose) onClose();
      // Normally here you'd redirect to payment gateway via React Router or Stripe
    }, 1500);
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
