// src/hooks/useProductHooks.js

import useProductStore from "../store/useProductStore";
import {
	addProduct as addProductApi,
	updateProduct as updateProductApi,
	deleteProduct as deleteProductApi,
} from "../services/apiService";

// Hook to add a product
export const useAddProduct = () => {
	const addProduct = useProductStore((state) => state.addProduct);

	return async (product) => {
		const addedProduct = await addProductApi(product);
		addProduct(addedProduct);
	};
};

// Hook to update a product
export const useUpdateProduct = () => {
	const updateProduct = useProductStore((state) => state.updateProduct);

	return async (id, product) => {
		const updatedProduct = await updateProductApi(id, product);
		updateProduct(id, updatedProduct);
	};
};

// Hook to delete a product
export const useDeleteProduct = () => {
	const deleteProduct = useProductStore((state) => state.deleteProduct);

	return async (id) => {
		await deleteProductApi(id);
		deleteProduct(id);
	};
};
