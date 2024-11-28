import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.in/api", // Replace with your actual base URL
});

// Fetch all products
export const fetchProducts = async () => {
  const response = await api.get("/products");
  return response.data.products;
};

// Fetch a product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

// Delete a product
export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

// Add a new product
export const addProduct = async (product) => {
  try {
    const response = await api.post("/products", product);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

// Update a product
export const updateProduct = async (id, updatedProductData) => {
  try {
    const response = await api.put(`/products/${id}`, updatedProductData);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};
