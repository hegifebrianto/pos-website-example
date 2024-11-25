const Footer = () => {
  return (
    <footer className="footer-area bg-black pt-100 pb-60">
      <div className="container" style={{ minHeight: "0px" }}>
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="copyright mb-30">
              <div className="footer-logo">
                <a href="#">
                  <img alt="" src="assets/img/logo/logo.webp" />
                </a>
              </div>
              <p style={{ color: "white" }}>
                © 2024{" "}
                <a href="#" style={{ color: "white" }}>
                  Flone
                </a>
                .<br /> All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3 style={{ color: "white" }}>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a href="#" style={{ color: "gray" }}>
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "gray" }}>
                      Store location
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "gray" }}>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "gray" }}>
                      Orders tracking
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="footer-widget mb-30 ml-50">
              <div className="footer-title">
                <h3 style={{ color: "white" }}>USEFUL LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a href="#" style={{ color: "gray" }}>
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "gray" }}>
                      Support Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "gray" }}>
                      Size guide
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "gray" }}>
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget mb-30 ml-75">
              <div className="footer-title">
                <h3 style={{ color: "white" }}>FOLLOW US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a href="#" style={{ color: "gray" }}>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "gray" }}>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "gray" }}>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "gray" }}>
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer-widget mb-30 ml-70">
              <div className="footer-title">
                <h3 style={{ color: "white" }}>SUBSCRIBE</h3>
              </div>
              <div className="subscribe-style">
                <p style={{ color: "gray" }}>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <div id="mc_embed_signup" className="subscribe-form">
                  <form
                    id="mc-embedded-subscribe-form"
                    className="validate"
                    noValidate=""
                    target="_blank"
                    name="mc-embedded-subscribe-form"
                    method="post"
                    action="#"
                  >
                    <div id="mc_embed_signup_scroll" className="mc-form">
                      <input
                        style={{ color: "white" }}
                        className="email"
                        type="email"
                        required=""
                        placeholder="Enter your email here.."
                        name="EMAIL"
                        value=""
                    readOnly

                      />
                      <div className="mc-news" aria-hidden="true">
                        <input
                          type="text"
                          value=""
                          tabIndex="-1"
                          name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                    readOnly

                        />
                      </div>
                      <div className="clear">
                        <input
                          style={{ color: "white" }}
                          id="mc-embedded-subscribe"
                          className="button"
                          type="submit"
                          name="subscribe"
                          value="Subscribe"
                    readOnly

                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
