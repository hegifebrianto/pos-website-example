import  { useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "./Loader";
import useProductStore from "../store/useProductStore";
import SwipeButton from "./AddProductButton";
import useCart from "../store/useCart";
import UpdateProductForm from "./UpdateProduct";
import Rating from "@mui/material/Rating";
import { useState } from "react";

const ProductList = () => {
	const [isUpdating, setIsUpdating] = useState(false);
	const [editingProduct, setEditingProduct] = useState(null);
	const { addToCart } = useCart();
	const [isDeleting, setIsDeleting] = useState(null);
	const {
		products,
		isLoading,
		isError,
		fetchProducts,
		addProduct,
		updateProduct,
		deleteProduct,
	} = useProductStore();

	useEffect(() => {
		fetchProducts(); // Fetch products on component mount
	}, [fetchProducts]);

	const handleAddProduct = async (newProduct) => {
		try {
			await addProduct(newProduct);
			toast.success("Product added successfully!");
		// eslint-disable-next-line no-unused-vars
		} catch (error) {
			toast.error("Failed to add product.");
		}
	};

	const handleUpdateProduct = async (id, updatedProduct) => {
		try {
			setIsUpdating(true); // Show loader
			await updateProduct(id, updatedProduct);
			toast.success("Product updated successfully!");
			setEditingProduct(null); // Close the form
		// eslint-disable-next-line no-unused-vars
		} catch (error) {
			toast.error("Failed to update product.");
		} finally {
			setIsUpdating(false); // Hide loader
		}
	};

	const handleDeleteProduct = async (productId) => {
		try {
			setIsDeleting(productId);
			await deleteProduct(productId);
			toast.success("Product deleted successfully!");
		// eslint-disable-next-line no-unused-vars
		} catch (error) {
			toast.error("Failed to delete product.");
		} finally {
			setIsDeleting(null);
		}
	};

	const handleAddToCart = (product) => {
		addToCart({ ...product, quantity: 1 });
		toast.success(`${product.title} added to cart!`, {
			closeButton: false,
			style: {
				backgroundColor: "#004000",
				color: "#fff",
				fontSize: "14px",
				padding: "15px",
				borderRadius: "4px",
			},
			duration: "200",
		});
	};

	if (isLoading) return <Loader />;
	if (isError)
		return (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginBottom: "1rem",
				}}
			>
				<p style={{ color: "red", fontSize: "30px", padding: "10px" }}>
					{" "}
					Error loading products.
				</p>
			</div>
		);
	if (!products || products.length === 0)
		return (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginBottom: "1rem",
				}}
			>
				<p style={{ color: "red", fontSize: "30px", padding: "10px" }}>
					{" "}
					No Products Found.
				</p>
			</div>
		);

	return (
		<>
			{isUpdating && <Loader />}
			<SwipeButton onAddProduct={handleAddProduct} />
			<div
				className="container"
				id="product-list"
			>
				<div className="row">
					{products.map((product) => (
						<div
							className="col-xl-3 col-md-6 col-lg-4 col-sm-6"
							key={product.id}
						>
							{console.log(product)}
							<div
								className="product-wrap mb-25"
								style={{
									display: "flex",
									flexDirection: "column",
									height: "100%",
									position: "relative",
								}}
							>
								{isDeleting === product.id && <Loader />}
								<div
									className="edit-delete-btn"
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										width: "auto",
										gap: "0.5rem",
										position: "absolute",
										top: "1rem",
										left: "1rem",
										zIndex: "10",
									}}
								>
									<div
										onClick={() => setEditingProduct(product)}
										style={{ fontSize: "25px", color: "green" }}
									>
										<i className="fa fa-edit"></i>
									</div>
									<div
										onClick={() => handleDeleteProduct(product.id)}
										style={{
											fontSize: "25px",
											color: "red",
											cursor: "pointer",
										}}
									>
										<i className="fa fa-remove"></i>
									</div>
								</div>

								<div
									className="product-img"
									style={{ flexGrow: 1 }}
								>
									<Link
										to={`/product/${parseInt(product.id)}`}
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<img
											className="default-img"
											src={product.image}
											alt={product.title}
											style={{
												width: "60%",
												maxHeight: "200px",
												objectFit: "contain",
											}}
										/>
									</Link>

									<span className="pink">${product.price}</span>
									<div className="product-action">
										<div className="pro-same-action pro-wishlist">
											<a
												title="Wishlist"
												href="#"
											>
												<i className="pe-7s-like"></i>
											</a>
										</div>
										<div className="pro-same-action pro-cart">
											<a
												title="Add To Cart"
												onClick={() => handleAddToCart(product)}
											>
												<i className="pe-7s-cart"></i> Add to cart
											</a>
										</div>
										<div className="pro-same-action pro-quickview">
											<Link
												title="Quick View"
												to={`/product/${parseInt(product.id)}`}
											>
												<i className="pe-7s-look"></i>
											</Link>
										</div>
									</div>
								</div>
								<div className="product-content text-center">
									<h3>
										<Link to={`/product/${parseInt(product.id)}`}>
											{product.title}
										</Link>
									</h3>
									<div className="product-rating">
										{product.rating && product.rating.rate ? (
											<Rating
												name="size-small"
												value={product.rating.rate}
												precision={0.5}
												readOnly
												size="small" // Set size to small
												style={{ color: "#f39c12" }}
											/>
										) : (
											<Rating
												name="size-small"
												value={5} // Default value if rating is not available
												precision={0.5}
												readOnly
												size="small"
												style={{ color: "#f39c12" }}
											/>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{editingProduct && (
				<UpdateProductForm
					product={editingProduct}
					onUpdateProduct={handleUpdateProduct}
					onClose={() => setEditingProduct(null)}
				/>
			)}
		</>
	);
};

export default ProductList;
