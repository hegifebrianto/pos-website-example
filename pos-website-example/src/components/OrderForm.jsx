import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import useCart from "../store/useCart";

const OrderForm = () => {
  const history = useHistory();

  const { clearCart}  = useCart();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Your order has been sent!`, {
      closeButton: false,
      style: {
        backgroundColor: "black",
        border: "2px solid grey",
        color: "#fff",
        fontSize: "14px",
        padding: "15px",
        borderRadius: "4px",
      },
      duration: "200",
    });
    console.log('masuk sini after submit')
    clearCart();
    history.push("/");
  };

  return (
    <div className="order-form-container">
      <h2 className="order-form-heading">Confirm Your Order</h2>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Shipping Address</label>
          <input type="text" id="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" required />
        </div>
        <div className="form-group">
          <label htmlFor="zip">ZIP Code</label>
          <input type="text" id="zip" required />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" required />
        </div>
        <div className="form-group">
          <label htmlFor="payment">Payment Method</label>
          <select id="payment" required>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>
        <div className="form-group"></div>
        <div className="order-form-btn-container">
          <button type="submit" className="order-form-btn">
            Order Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
