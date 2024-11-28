import  { useMemo } from "react";
import useCart from "../store/useCart";
import { confirmAlert } from "react-confirm-alert"; // Import the library
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import the CSS for the library

const Cart = () => {
	const history = useHistory();
	const {
		cart,
		removeFromCart,
		clearCart,
		increaseQuantity,
		decreaseQuantity,
	} = useCart();
	console.log('masuk sini :',cart);

	const totalPrice = useMemo(() => {
		return cart.reduce(
			(total, item) => total + item.price * (item.quantity || 1),
			0
		);
	}, [cart]);

	const handleMoveToProceed = () => {
		console.log('handleMoveToProceed :',cart);
		history.push("/checkoutPage", { cartItems: cart });
	};

	const handleClearCart = () => {
		confirmAlert({
			title: "Confirm to Clear",
			message: "Are you sure you want to remove all items from the cart?",
			buttons: [
				{
					label: "Yes",
					onClick: () => {
						clearCart();
						toast.error(`Cart has been cleared!`, {
							closeButton: false,
							style: {
								backgroundColor: "#D2122E",
								color: "#fff",
								fontSize: "14px",
								padding: "15px",
								borderRadius: "4px",
							},
							duration: "100",
						});
					},
				},
				{
					label: "No",
				},
			],
		});
	};

	const handleRemove = (itemId) => {
		removeFromCart(itemId);
		toast.error(`removed from the cart!`, {
			closeButton: false,
			style: {
				backgroundColor: "#7F0000",
				color: "#fff",
				fontSize: "14px",
				padding: "15px",
				borderRadius: "4px",
			},
			duration: "200",
		});
	};

	return (
		<div
			className="cart-container"
			style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}
		>
			<h3 style={{ marginBottom: "3rem", textAlign: "left" }}>Your Cart</h3>
			{cart.length === 0 ? (
				<p style={{ textAlign: "center" }}>Your cart is empty.</p>
			) : (
				<div>
					<div
						style={{ display: "flex", flexDirection: "column", gap: "20px" }}
					>
						{cart.map((item) => (
							<div
								key={item.id}
								className="cart-item"
								style={{
									padding: "20px",
									borderRadius: "10px",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
									backgroundColor: "#fff",
								}}
							>
								<img
									src={item.image}
									alt={item.title}
									style={{
										width: "100px",
										height: "100px",
										objectFit: "contain",
										borderRadius: "8px",
										marginRight: "20px",
									}}
								/>
								<div style={{ flex: "1", padding: "0 20px" }}>
									<h5
										style={{
											fontSize: "18px",
											fontWeight: "600",
											marginBottom: "5px",
										}}
									>
										{item.title}
									</h5>
									<p
										className="price-qnt"
										style={{
											fontSize: "16px",
											color: "#555",
											marginBottom: "10px",
										}}
									>
										<span>
											${item.price} x {item.quantity || 1}
										</span>

										{/* quantity is undefined here */}
										{console.log(item.quantity)}
									</p>
									<div
										className="inc-dec-btn"
										style={{ display: "flex", alignItems: "center" }}
									>
										<button
											style={{
												backgroundColor: "#ddd",
												padding: "5px 10px",
												border: "none",
												borderRadius: "5px",
												cursor: "pointer",
												marginRight: "10px",
											}}
											onClick={() => decreaseQuantity(item.id)}
										>
											-
										</button>
										<span>{item.quantity}</span>
										<button
											style={{
												backgroundColor: "#ddd",
												padding: "5px 10px",
												border: "none",
												borderRadius: "5px",
												cursor: "pointer",
												marginLeft: "10px",
											}}
											onClick={() => increaseQuantity(item.id)}
										>
											+
										</button>
									</div>
								</div>
								<button
									className="btn btn-danger"
									style={{ fontSize: "14px", padding: "8px 12px" }}
									onClick={() => handleRemove(item.id)}
								>
									Remove
								</button>
							</div>
						))}
					</div>
					<div
						className="cart-summary"
						style={{
							marginTop: "100px",
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<h4 style={{ alignSelf: "self-start" }}>
							Total: ${totalPrice.toFixed(2)}
						</h4>
						<button
							className="btn btn-primary"
							style={{ marginTop: "10px", padding: "10px 20px" }}
							onClick={handleClearCart}
						>
							Clear Cart
						</button>
						<button
							className="btn btn-success"
							style={{ marginTop: "10px", padding: "10px 20px" }}
							onClick={handleMoveToProceed}
						>
							Proceed to checkout
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
