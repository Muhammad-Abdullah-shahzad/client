import useGET from '../../hooks/useGET';
import CheckoutBtn from './CheckoutBtn';
import './Cart.css';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Cart({ userId, onClose }) {
  const { data, loading, error, refetch } = useGET(`${BASE_URL}/myecom/cart/${userId}`);
  console.log(userId);

  const items = data?.cartItems || [];
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity || 0), 0);

  const removeItem = async (itemId) => {
    await fetch(`${BASE_URL}/myecom/cart/${userId}/${itemId}`, { method: 'DELETE' });
    refetch();
  };

  const renderContent = () => {
    if (loading) {
      return <p className="cart-empty">Loading cart...</p>;
    }
    if (error) {
      return <p className="cart-empty">Error loading cart.</p>;
    }
    if (items.length === 0) {
      return <p className="cart-empty">Your cart is empty.</p>;
    }
    return (
      <>
        <ul className="cart-list">
          {items.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.itemImg} alt={item.itemName} className="cart-item-img" />
              <div className="cart-item-info">
                <p className="cart-item-name">{item.itemName}</p>
                <p className="cart-item-price">${item.price * item.quantity}</p>
              </div>
              <button className="cart-item-remove" onClick={() => removeItem(item._id)}>✕</button>
            </li>
          ))}
        </ul>
        <div className="cart-footer">
          <div className="flex justify-between w-full">
            <span>Total</span>
            <span>${total?.toFixed(2)}</span>
          </div>
          <CheckoutBtn items={items} total={total} onClose={onClose} />
        </div>
      </>
    );
  };

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}
