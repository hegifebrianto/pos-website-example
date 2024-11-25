const SupportArea = () => {
  return (
    <div className="suppoer-area pt-100 pb-60">
      <div className="container" style={{ minHeight: "0px" }}>
        {" "}
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="support-wrap mb-30 support-1">
              <div className="support-icon">
                <img
                  className="animated"
                  src="assets/img/icon-img/support-1.webp"
                  alt=""
                />
              </div>
              <div className="support-content">
                <h5>Free Shipping</h5>
                <p>Free shipping on all order</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="support-wrap mb-30 support-2">
              <div className="support-icon">
                <img
                  className="animated"
                  src="assets/img/icon-img/support-2.webp"
                  alt=""
                />
              </div>
              <div className="support-content">
                <h5>Support 24/7</h5>
                <p>Free shipping on all order</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="support-wrap mb-30 support-3">
              <div className="support-icon">
                <img
                  className="animated"
                  src="assets/img/icon-img/support-3.webp"
                  alt=""
                />
              </div>
              <div className="support-content">
                <h5>Money Return</h5>
                <p>Free shipping on all order</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="support-wrap mb-30 support-4">
              <div className="support-icon">
                <img
                  className="animated"
                  src="assets/img/icon-img/support-4.webp"
                  alt=""
                />
              </div>
              <div className="support-content">
                <h5>Order Discount</h5>
                <p>Free shipping on all order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportArea;
