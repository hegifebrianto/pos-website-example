// src/store/useProductStore.js
import { create } from "zustand";
import {
	fetchProducts as fetchProductsFromService,
	fetchProductById as fetchProductByIdFromService,
} from "../services/apiService";

const useProductStore = create((set) => ({
	products: [],
	isLoading: false,
	isError: null,

	fetchProducts: async () => {
		set({ isLoading: true, isError: null });
		try {
			const products = await fetchProductsFromService(); // Ensure this is an async call
			set({ products, isLoading: false, isError: null });
		} catch (error) {
			set({ isError: error.message, isLoading: false });
		}
	},

	fetchProductById: async (id) => {
		set({ isLoading: true, isError: null });
		try {
			const product = await fetchProductByIdFromService(id);
			set({ product, isLoading: false, isError: null });
		} catch (error) {
			set({ isError: error.message, isLoading: false });
		}
	},

	addProduct: (product) => {
		set((state) => ({
			products: [...state.products, product],
		}));
	},

	updateProduct: (id, updatedProduct) => {
		set((state) => ({
			products: state.products.map((product) =>
				product.id === id ? updatedProduct : product
			),
		}));
	},

	deleteProduct: (id) => {
		set((state) => ({
			products: state.products.filter((product) => product.id !== id),
		}));
	},
}));

export default useProductStore;
