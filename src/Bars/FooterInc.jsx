import React from "react";
import { Link } from "react-router-dom";

const FooterInc = () => {
  return (
    <footer className="main-footer bg-color-9 py-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between flex-wrap pb-4 border-bottom-secondary border-0">
          <img
            src="../images/fot-logo.svg"
            className="img-fluid mb-lg-0 mb-5"
            alt="logo"
            style={{ height: "40px" }}
          />

          <ul className="d-flex flex-row list-unstyled footer-link mb-lg-0 mb-3">
            <li>
              <a href="">
                <img
                  src="../images/facebook-box-fill_1.svg"
                  className="img-fluid"
                  alt="facebook"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="../images/linkedin-box-fill_1.svg"
                  className="img-fluid"
                  alt="linkedin"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="../images/twitter-fill_1.svg"
                  className="img-fluid"
                  alt="twitter"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="../images/youtube-fill_1.svg"
                  className="img-fluid"
                  alt="youtube"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="row pt-4 pb-4 border-bottom-secondary border-0">
          <div className="col-lg-3 mb-lg-0 mb-3">
            <h5 className="text-uppercase mb-4 text-bold">Company</h5>
            <ul className="list-unstyled footer-link">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Partnerships</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Press Kit</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mb-lg-0 mb-3">
            <h5 className="text-uppercase mb-4 text-bold">Solutions</h5>
            <ul className="list-unstyled footer-link">
              <li>
                <a href="#">Online examinations</a>
              </li>
              <li>
                <a href="#">Remote Proctoring</a>
              </li>
              <li>
                <a href="#">Assessment Authoring</a>
              </li>
              <li>
                <a href="#">Reporting & Analytics</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mb-lg-0 mb-3">
            <h5 className="text-uppercase mb-4 text-bold">Others</h5>
            <ul className="list-unstyled footer-link">
              <li>
                <a href="#">Corporate</a>
              </li>
              <li>
                <a href="#">Academic</a>
              </li>
              <li>
                <a href="#">Test Producers</a>
              </li>
              <li>
                <a href="#">Resource Library</a>
              </li>
              <li>
                <a href="#">Guides & Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mb-lg-0 mb-3">
            <h5 className="text-uppercase mb-4 text-bold">Contact us</h5>
            <ul className="list-unstyled footer-link">
              <li>
                <Link to="/help-center">Help & Support</Link>
              </li>
              <li>
                <a href="#">
                  <img
                    src="../images/phone-fill_1.svg"
                    className="img-fluid me-2"
                    alt="icon"
                  />{" "}
                  Sales enquiry
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="../images/phone-fill_1.svg"
                    className="img-fluid me-2"
                    alt="icon"
                  />{" "}
                  Technical support
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="../images/mail-fill_1.svg"
                    className="img-fluid me-2"
                    alt="icon"
                  />{" "}
                  Email contact
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="../images/map-pin-fill_1.svg"
                    className="img-fluid me-2"
                    alt="icon"
                  />{" "}
                  Company address
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-lg-12">
            {/* <div className="d-flex align-items-center justify-content-between flex-wrap">
              <ul className="list-unstyled gap-3 d-flex align-items-center">
                <li>
                  <div className="logo-box">
                    <img
                      src="../images/logo-sample-1.svg"
                      className="img-fluid object-fit-cover object-position-center w-100 h-100"
                    />
                  </div>
                </li>

                <li>
                  <div className="logo-box">
                    <img
                      src="../images/logo-sample-1.svg"
                      className="img-fluid object-fit-cover object-position-center w-100 h-100"
                    />
                  </div>
                </li>
              </ul>

              <ul className="list-unstyled gap-3 d-flex align-items-center">
                <li>
                  <div className="logo-box">
                    <img
                      src="../images/logo-sample-1.svg"
                      className="img-fluid object-fit-cover object-position-center w-100 h-100"
                    />
                  </div>
                </li>

                <li>
                  <div className="logo-box">
                    <img
                      src="../images/logo-sample-1.svg"
                      className="img-fluid object-fit-cover object-position-center w-100 h-100"
                    />
                  </div>
                </li>

                <li>
                  <div className="logo-box">
                    <img
                      src="../images/logo-sample-1.svg"
                      className="img-fluid object-fit-cover object-position-center w-100 h-100"
                    />
                  </div>
                </li>

                <li>
                  <div className="logo-box">
                    <img
                      src="../images/logo-sample-1.svg"
                      className="img-fluid object-fit-cover object-position-center w-100 h-100"
                    />
                  </div>
                </li>
              </ul>
            </div> */}

            <div className="d-flex align-items-center justify-content-between flex-wrap mt-4">
              <p>2025 FOT, LLC. All Rights Reserved. </p>

              <ul className="list-unstyled gap-3 d-flex align-items-center flex-wrap">
                <li>
                  <a href="#">Terms of Use</a>
                </li>

                <li className="d-lg-inline-flex d-none"> | </li>

                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li className="d-lg-inline-flex d-none"> | </li>

                <li>
                  <a href="#">Cookies</a>
                </li>

                <li className="d-lg-inline-flex d-none"> | </li>

                <li>
                  <a href="#">NDPR Policy</a>
                </li>

                <li className="d-lg-inline-flex d-none"> | </li>

                <li>
                  <a href="#">Data Retention and Deletion Policy</a>
                </li>

                <li className="d-lg-inline-flex d-none"> | </li>

                <li>
                  <a href="#">Manage Cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterInc;
