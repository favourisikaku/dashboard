import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SidebarRight = () => {
  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  return (
    <nav
      className="flex-none navbar navbar-vertical navbar-expand-lg show vh-lg-100 bg-white px-0 py-2 navbar-dark"
      id="sidebar"
    >
      <div className="flex-lg-column align-items-lg-start d-flex align-items-center justify-content-between w-100"></div>
      <div className="avatar-circle rounded-circle flex-shrink-0 me-2 cursor-pointer m-0">
        <img className="rounded-circle img-fluid" src="/images/profile.png" />
      </div>
      <section>
        <h2>Favour Isikaku</h2> <p>isikakufavour@yahoo.com</p>
      </section>

      <section>
        <div>
          <h6
          // style={{ color: "#1570EF" }}
          >
            My Bank
          </h6>
          <div
            className="border border-0 rounded-4 py-3 px-4 "
            style={{ backgroundColor: "#1570EF" }}
          >
            <div>
              <p
              // style={{ color: "white" }}
              >
                Access
              </p>
            </div>
            <div>
              <div>
                <p>Favour Isikaku</p> <p>07/26</p>
              </div>
              <div>
                <p>1234 1234 1234 1234</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h5 style={{ fontWeight: "600" }}>My budgets</h5>
        <div
          className="border border-0 rounded-4 p-3"
          style={{ backgroundColor: "#F5FAFF" }}
        >
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle img-fluid border-0 p-2 me-3"
              style={{
                backgroundColor: "#D1E9FF",
                width: "40px",
                height: "40px",
              }}
              src="/images/monitor-04.svg"
            />
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 fw-semibold " style={{ color: "#194185" }}>
                  Subscriptions
                </p>
                <p className="mb-0 fw-semibold text-primary">
                  &#8358;10,000 Left
                </p>
              </div>
              <div className="progress mt-2" style={{ height: "10px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border border-0 rounded-4 p-3 mt-4"
          style={{ backgroundColor: "#FEF6FB" }}
        >
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle img-fluid border-0 p-2 me-3"
              style={{
                backgroundColor: "#FCE7F6",
                width: "40px",
                height: "40px",
              }}
              src="/images/shopping-bag-02.svg"
            />
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 fw-semibold " style={{ color: "#851651" }}>
                  Food and Drinks
                </p>
                <p className="mb-0  " style={{ color: "#851651" }}>
                  &#8358;3,000 Left
                </p>
              </div>
              <div className="progress mt-2" style={{ height: "10px" }}>
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "80%", backgroundColor: "#C11574" }}
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border border-0 rounded-4 p-3 mt-4"
          style={{ backgroundColor: "#F6FEF9" }}
        >
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle img-fluid border-0 p-2 me-3"
              style={{
                backgroundColor: "#D1FADF",
                width: "40px",
                height: "40px",
              }}
              src="/images/coins-01.svg"
            />
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 fw-semibold " style={{ color: "#054F31" }}>
                  Savings
                </p>
                <p className="mb-0  " style={{ color: "#054F31" }}>
                  &#8358;60,000 Left
                </p>
              </div>
              <div className="progress mt-2" style={{ height: "10px" }}>
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "70%", backgroundColor: "#027A48" }}
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default SidebarRight;
