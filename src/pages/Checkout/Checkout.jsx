import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './Checkout.css';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { items = [], total = 0 } = location.state || {};

  if (!items.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-color-main)] p-4">
        <h2 className="text-xl tracking-widest uppercase mb-4">No active order</h2>
        <Link to="/all-products" className="text-xs underline tracking-[0.2em] uppercase">Back to shop</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page min-h-screen pt-32 pb-16 px-4 bg-[var(--bg-color-main)]">
      <div className="max-w-2xl mx-auto bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
        <h1 className="text-2xl tracking-[0.3em] uppercase text-center mb-12 font-light text-[#2c2c2c]">Order Summary</h1>
        
        <div className="order-items mb-12">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0">
              <div className="flex gap-4 items-center">
                <img src={item.itemImg} alt={item.itemName} className="w-16 h-20 object-cover" />
                <div>
                  <h3 className="text-sm font-normal uppercase tracking-wide">{item.itemName}</h3>
                  <p className="text-[10px] text-gray-400 tracking-widest uppercase">Qty: {item.quantity || 1}</p>
                </div>
              </div>
              <span className="text-sm font-light">$ {(item.price * (item.quantity || 1)).toLocaleString()}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center py-6 border-t border-[#2c2c2c] mb-12">
          <span className="text-lg tracking-widest uppercase">Total Amount</span>
          <span className="text-xl font-normal">$ {total.toLocaleString()}</span>
        </div>

        <div className="payment-instructions bg-gray-50 p-8 text-center rounded-sm">
          <h2 className="text-sm tracking-[0.2em] uppercase mb-4 text-[rgb(157,82,72)] font-medium">Payment Instructions</h2>
          <p className="text-xs text-gray-600 leading-relaxed mb-6">
            Thank you for your order! To complete your purchase, please transfer the total amount shown above to the following bank account:
          </p>
          <div className="account-details inline-block text-left p-6 border border-gray-200 bg-white min-w-[280px]">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-bold">Account Holder</p>
            <p className="text-sm tracking-wide mb-4 text-[#2c2c2c]">Loom & Luxe Collections</p>
            
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-bold">Bank Name</p>
            <p className="text-sm tracking-wide mb-4 text-[#2c2c2c]">International Merchant Bank</p>
            
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-bold">Account Number (IBAN)</p>
            <p className="text-md font-normal tracking-wider text-[#2c2c2c]">US99 4000 1234 5678 9012 34</p>
          </div>
          <p className="text-[10px] text-gray-400 mt-6 italic">
            Once you've made the payment, please share the receipt with us at orders@loomandluxe.com
          </p>
        </div>

        <div className="mt-12 text-center">
            <button 
                onClick={() => navigate('/')}
                className="w-full py-4 bg-[#2c2c2c] text-white text-xs tracking-[0.3em] uppercase hover:bg-black transition-colors"
            >
                Confirm Payment & Back to Home
            </button>
        </div>
      </div>
    </div>
  );
}
