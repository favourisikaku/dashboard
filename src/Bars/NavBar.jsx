import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ SideBarVisibility }) => {
  return (
    <>
      <div className="bg-white d-lg-block d-none py-2">
        <div className="container d-flex align-items-center justify-content-between lms-heading-title">
          <div className="d-flex align-items-center">
            <i
              className="bi bi-list bi-2 text-dark cursor-pointer arrow-box cursor-pointer toggle-side"
              onClick={SideBarVisibility}
            ></i>

            {/* <div className="input-group border-custom rounded">
              <span
                className="input-group-text bg-transparent border-0"
                id="basic-addon1"
              >
                <img
                  src="/images/search-2-line.svg"
                  className="img-fluid"
                  alt="search"
                />
              </span>
              <input
                type="text"
                className="form-control border-0 border-start-0"
                placeholder="Search"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div> */}
          </div>

          <div
            className="d-lg-flex align-items-center d-none"
            style={{ gap: "20px" }}
          >
            {/* <a href="#">
            <img
              src="/images/question-line-2.svg"
              className="img-fluid"
              alt="bell"
            />
          </a> */}
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasPanic"
        aria-labelledby="offcanvasPanicLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-danger">Panic</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-4">
                <h4>Transactions</h4>
                <div className="card card-body bg-light border-rad-8 border-0 mb-4">
                  <h6 className="text-medium">Stop all transactions</h6>
                  <p className="text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt id nam placeat laboriosam adipisci vel sint
                    temporibus officiis quis quisquam.
                  </p>

                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>

                <div className="card card-body bg-light border-rad-8 border-0 mb-4">
                  <h6 className="text-medium">Stop users from using GBP</h6>
                  <p className="text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt id nam placeat laboriosam adipisci vel sint
                    temporibus officiis quis quisquam.
                  </p>

                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4>Onboarding</h4>
                <div className="card card-body bg-light border-rad-8 border-0 mb-4">
                  <h6 className="text-medium">
                    Disable new users from signing up
                  </h6>
                  <p className="text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt id nam placeat laboriosam adipisci vel sint
                    temporibus officiis quis quisquam.
                  </p>

                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
                <div className="card card-body bg-light border-rad-8 border-0 mb-4">
                  <h6 className="text-medium">Disable all users</h6>
                  <p className="text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt id nam placeat laboriosam adipisci vel sint
                    temporibus officiis quis quisquam.
                  </p>

                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default NavBar;
