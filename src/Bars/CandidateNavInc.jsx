import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const CandidateNavInc = ({ SideBarVisibility }) => {
  const { baseUrlCandidate } = useContext(AppContext);
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const candidate_token = localStorage.getItem("candidate_token");
    if (!candidate_token) {
      navigate("/");
      return;
    }
    fetchProfile();
  }, [navigate]);
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    fetchNotification();
  }, []);

  const fetchNotification = async () => {
    try {
      const response = await fetch(baseUrlCandidate + "/new-notifications", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("candidate_token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDashboard(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchProfile = async () => {
    try {
      const res = await fetch(baseUrlCandidate + `/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("candidate_token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data.");
      }

      const data = await res.json();

      setProfile(data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrlCandidate + "/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("candidate_token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      localStorage.removeItem("candidate_token");
      localStorage.removeItem("candidate_exam_token"); // Remove invalid token
      localStorage.removeItem("assessment_details");
      localStorage.removeItem("candidate_exam_uuid");
      localStorage.removeItem("answers");
      navigate("/");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="bg-white d-lg-block d-none py-2">
        <div className="container d-flex align-items-center justify-content-between lms-heading-title">
          <div className="d-flex align-items-center">
            <i
              className="bi bi-list bi-2 text-dark cursor-pointer arrow-box cursor-pointer toggle-side"
              onClick={SideBarVisibility}
            ></i>

            <div className="input-group border-custom rounded">
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
            </div>
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
            {dashboard?.length > 0 ? (
              <Link to="/candidate/notification">
                <img
                  src="/images/notification-4-line.svg"
                  className="img-fluid"
                  alt="bell"
                />
              </Link>
            ) : (
              <Link to="/candidate/notification">
                <img
                  src="/images/notification-4-line_1.svg"
                  className="img-fluid"
                  alt="bell"
                />
              </Link>
            )}

            <div className="dropdown">
              <a
                className="nav-link no-caret d-flex align-items-center no-caret dropdown-toggle card-avatar"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="d-flex align-items-center me-2">
                  <p className="text-truncate d-lg-inline-block d-none text-medium text-gray-1 mb-0">
                    Hello, {profile?.first_name || "user"}
                  </p>
                </div>

                <div className="avatar-sm rounded-circle flex-shrink-0 me-2">
                  <img
                    src="/images/download.png"
                    className="img-fluid object-fit-cover object-position-center w-100 h-100"
                  />
                </div>

                <i className="bi bi-chevron-down"></i>
              </a>
              <ul
                className="dropdown-menu drop-size-2 cat-list border-0 py-0"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item pt-custom-1 pb-custom-1"
                    to="/candidate/settings"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item pt-custom-1 pb-custom-1"
                    to="/candidate/settings"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item pt-custom-1 pb-custom-1"
                    href="#"
                    onClick={handleClick}
                  >
                    Log out
                  </a>
                </li>
              </ul>
            </div>
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

export default CandidateNavInc;
