import { create } from "zustand";

const useCart = create((set) => ({
	cart: JSON.parse(localStorage.getItem("cart")) || [],

	addToCart: (product, quantity = 1) =>
		set((state) => {
			// Find if the product already exists in the cart
			const existingProductIndex = state.cart.findIndex(
				(item) => item.id === product.id
			);

			let newCart;
			if (existingProductIndex > -1) {
				// If product exists, update quantity
				newCart = [...state.cart];
				newCart[existingProductIndex].quantity += Number(quantity);
			} else {
				// If product does not exist, add new product with the specified quantity
				newCart = [...state.cart, { ...product, quantity }];
			}

			// Update local storage
			localStorage.setItem("cart", JSON.stringify(newCart));
			return { cart: newCart };
		}),

	removeFromCart: (productId) =>
		set((state) => {
			const updatedCart = state.cart.filter((item) => item.id !== productId);

			// Update local storage
			localStorage.setItem("cart", JSON.stringify(updatedCart));
			return { cart: updatedCart };
		}),

	increaseQuantity: (productId) =>
		set((state) => ({
			cart: state.cart.map((item) =>
				item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
			),
		})),
	decreaseQuantity: (productId) =>
		set((state) => ({
			cart: state.cart.map((item) =>
				item.id === productId
					? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
					: item
			),
		})),
	clearCart: () =>
		set(() => {
			localStorage.removeItem("cart");
			return { cart: [] };
		}),
}));

export default useCart;
