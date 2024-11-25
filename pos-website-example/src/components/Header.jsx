import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useCart from "../store/useCart";
const Header = () => {
	const history = useHistory();
	const { cart } = useCart();
	const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

	const handleMoveToCart = () => {
		history.push("/cartPage");
	};

	return (
		<header className="header-area header-padding-1  header-res-padding clearfix">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-2 col-lg-2 col-md-6 col-4">
						<div className="logo">
							<Link to="/">
								<img
									alt=""
									src="./src/assets/img/logo/logo.webp"
								/>
							</Link>
						</div>
					</div>
					<div className="col-xl-8 col-lg-8 d-none d-lg-block">
						<div className="main-menu">
							<nav>
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="#">Shop</Link>
									</li>

									<li>
										<Link to="#"> About </Link>
									</li>
									<li>
										<Link to="/contact"> Contact</Link>
									</li>
									{/* <li>
                    <Link to="/add-product"> Add a product</Link>
                  </li> */}
								</ul>
							</nav>
						</div>
					</div>
					<div className="col-xl-2 col-lg-2 col-md-6 col-8">
						<div className="header-right-wrap">
							{/* search */}
							<div className="same-style header-search">
								<Link
									className="search-active"
									to="#"
								>
									<i className="pe-7s-search"></i>
								</Link>
								<div className="search-content">
									<form action="#">
										<input
											type="text"
											placeholder="Search"
										/>
										<button className="button-search">
											<i className="pe-7s-search"></i>
										</button>
									</form>
								</div>
							</div>
							{/* Account setting */}
							<div className="same-style account-satting">
								<Link
									className="account-satting-active"
									to="#"
								>
									<i className="pe-7s-user-female"></i>
								</Link>
								<div className="account-dropdown">
									<ul>
										<li>
											<Link to="#">Login</Link>
										</li>
										<li>
											<Link to="#">Register</Link>
										</li>
										<li>
											<Link to="#">Wishlist </Link>
										</li>
										<li>
											<Link to="#">my account</Link>
										</li>
									</ul>
								</div>
							</div>
							{/* Wishlist */}
							<div className="same-style header-wishlist">
								<Link to="#">
									<i className="pe-7s-like"></i>
								</Link>
							</div>
							{/* Cart  */}
							<div className="same-style cart-wrap">
								<button
									onClick={handleMoveToCart}
									className="icon-cart"
								>
									<i className="pe-7s-shopbag"></i>
									<span className="count-style">{cartItemCount}</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="mobile-menu-area">
					<div className="mobile-menu">
						<nav id="mobile-menu-active">
							<ul className="menu-overflow">
								<li>
									<Link to="#">HOME</Link>
									<ul>
										<li>
											<Link to="#">Demo Group 01</Link>
											<ul>
												<li>
													<Link to="#">Home 1 – Fashion</Link>
												</li>
												<li>
													<Link to="#">Home 2 – Fashion</Link>
												</li>
											</ul>
										</li>
									</ul>
								</li>

								<li>
									<Link to="#">Pages</Link>
									<ul>
										<li>
											<Link to="cartPage">cart page</Link>
										</li>
										<li>
											<Link to="/checkoutPage">checkout </Link>
										</li>
										<li>
											<Link to="/contact">contact us </Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
