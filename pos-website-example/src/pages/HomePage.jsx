
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import SupportArea from "../components/SupportArea";
import SliderComponent from "../components/Slider";
import ProductList from "../components/ProductList";
import useDelayedLoading from "../hooks/useDelayLoading";
const HomePage = () =>  {
    const loading = useDelayedLoading(500); // Adjust the delay as needed

	return (
		<div className="app">
			{loading ? (
				<Loader />
			) : (
				<>
					<SliderComponent />
					<SupportArea />
					<ProductList />
					<Footer />
				</>
			)}
		</div>
	);
}

export default HomePage
