import React from "react";

const MarketplaceFooterInc = () => {
  return (
    <footer className="marketplace-footer bg-color-9 pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="row">
              <div className="col-lg-3 col-6 mb-lg-0 mb-3">
                <img
                  src="/images/fot-logo.svg"
                  className="img-fluid mb-3 logo-size"
                  alt="logo"
                />

                <p>Follow us</p>

                <ul className="list-unstyled d-flex align-items-center gap-10">
                  <li>
                    <a href="#">
                      <img
                        src="/images/linkedin-fill.svg"
                        className="img-fluid"
                        alt="linkedin"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/images/twitter-fill-1.svg"
                        className="img-fluid"
                        alt="linkedin"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-6 mb-lg-0 mb-3">
                <h5>Product</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Use Cases</a>
                  </li>
                  <li>
                    <a href="#">Integrations</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-6 mb-lg-0 mb-3">
                <h5>Assessments</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Tests</a>
                  </li>
                  <li>
                    <a href="#">Public Examinations</a>
                  </li>
                  <li>
                    <a href="#">Expert Vendors</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-6 mb-lg-0 mb-3">
                <h5>Resources</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Legal Notices</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MarketplaceFooterInc;
