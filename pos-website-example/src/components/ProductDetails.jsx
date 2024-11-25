import { useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import useCart from "../store/useCart";
import Loader from "./Loader";
import useProductStore from "../store/useProductStore";
import { useEffect } from "react";

const ProductDetail = () => {
	const { addToCart } = useCart();
	const { product, isLoading, isError, fetchProductById } = useProductStore();
	const { id } = useParams();

	// custom hook to fetch product by Id
	const [quantity, setQuantity] = useState(1);
	useEffect(() => {
		// Fetch the product details when the component mounts
		fetchProductById(id);
	}, [fetchProductById, id]);

	// Add product to cart
	const handleAddToCart = () => {
		if (quantity <= 0 || quantity > product.rating.count) {
			toast.error("Invalid quantity");
			return;
		}
		addToCart(product, quantity);
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

	const handleQuantityChange = (e) => {
		setQuantity(e.target.value);
	};

	if (isLoading) return <Loader />;
	if (isError) return <div>Error: {isError.message}</div>;
	if (!product) return <div>Product not found</div>;

	return (
		<div className="container my-2">
			<div
				className="card"
				style={{
					borderRadius: "15px",
					boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
					margin: "20px auto",
					maxWidth: "800px",
					overflow: "hidden",
					padding: "20px",
				}}
			>
				<div className="row no-gutters">
					<div className="col-md-6 d-flex align-items-center justify-content-center">
						<img
							src={product.image}
							alt={product.title}
							className="img-fluid"
							style={{
								borderRadius: "15px 0 0 15px",
								width: "90%",
								height: "auto",
							}}
						/>
					</div>
					<div className="col-md-6 d-flex flex-column justify-content-between p-4">
						<div>
							<h2>{product.title}</h2>
							<p
								className="text-muted"
								style={{ fontSize: "1.5rem" }}
							>
								${product.price}
							</p>
							<div className="d-flex align-items-center mb-2">
								<span className="me-2">Rating:</span>
								<div style={{ color: "#f39c12" }}>
									{Array.from({
										length: Math.round(product.rating.rate),
									}).map((_, index) => (
										<i
											key={index}
											className="fa fa-star"
										></i>
									))}
									{Array.from({
										length: 5 - Math.round(product.rating.rate),
									}).map((_, index) => (
										<i
											key={index}
											className="fa fa-star-o"
										></i>
									))}
								</div>
							</div>
							<p>{product.description}</p>
							<div className="mb-3">
								<label
									htmlFor="quantity"
									className="form-label"
								>
									Quantity
								</label>
								<input
									id="quantity"
									type="number"
									className="form-control"
									value={quantity}
									onChange={handleQuantityChange}
									min="1"
									max={product.rating.count}
								/>
							</div>
							<button
								onClick={handleAddToCart}
								className="btn btn-primary btn-block"
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
