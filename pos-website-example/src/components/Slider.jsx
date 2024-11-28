import  { useEffect } from "react";
import { Link } from "react-scroll";

const SliderComponent = () => {
  useEffect(() => {
    // Ensure jQuery is available
    if (window.$ && window.$.fn.owlCarousel) {
      window.$(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });
    }
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="slider-area">
      <div className="slider-active owl-carousel nav-style-1 owl-dot-none">
        <div className="single-slider slider-height-1 bg-purple">
          <div className="container">
            <div className="row" style={{marginTop:250}}>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                <div className="slider-content slider-animated-1">
                  <h3 className="animated">Smart Products</h3>
                  <h1 className="animated">
                    Summer Offer <br />
                    2024 Collection
                  </h1>
                  <div className="slider-btn btn-hover">
                    <Link
                      to="product-list"
                      smooth={true}
                      duration={500}
                      className="animated"
                    >
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                <div className="slider-single-img slider-animated-1">
                  <img
                    className="animated"
                    src="./src/assets/img/slider/slider-tokped02.webp"
                    alt=""
                    style={{marginTop:150}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-slider slider-height-1 bg-purple">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                <div className="slider-content slider-animated-1">
                  <h3 className="animated">Smart Products</h3>
                  <h1 className="animated">
                    Summer Offer <br />
                    2024 Collection
                  </h1>
                  <div className="slider-btn btn-hover">
                    <Link
                      to="product-list"
                      smooth={true}
                      duration={1000}
                      className="animated"
                    >
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                <div className="slider-single-img slider-animated-1">
                  <img
                    className="animated"
                    src="./src/assets/img/slider/slider-tokped01.webp"
                    alt=""
                    style={{marginTop:150}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
