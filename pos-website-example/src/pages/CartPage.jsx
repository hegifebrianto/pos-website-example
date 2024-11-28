// import React from "react";
import Cart from "../components/Cart";
import useDelayedLoading from "../hooks/useDelayLoading";
import Loader from "../components/Loader";

const CartPage = () => {
	const loading = useDelayedLoading(500); // Adjust the delay as needed
	console.log('masuk sini CartPage :');

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="cart-page">
					<Cart />
				</div>
			)}
		</>
	);
};

export default CartPage;
