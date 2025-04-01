import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Chart } from "chart.js/auto";
import { ClipLoader } from "react-spinners";
import { AppContext } from "../Context/AppContext";

const MarketplaceNavInc = () => {
  const { baseUrl } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }
    fetchProfile();
  }, [navigate]);

  const fetchProfile = async () => {
    try {
      const res = await fetch(baseUrl + `/api/v1/client-admin/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        localStorage.removeItem("token");
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
      const response = await fetch(baseUrl + "/api/v1/client-admin/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      localStorage.removeItem("token");

      navigate("/");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top border-bottom">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/images/fot-logo.svg"
            className="img-fluid logo-size"
            alt="marketplace"
          />
        </a>
        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto gap-20 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Assessments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Use Cases
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Test Producers
              </a>
            </li>
          </ul>
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

            {/* <a href="#">
              <img
                src="/images/notification-4-line.svg"
                className="img-fluid"
                alt="bell"
              />
            </a> */}

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
                    Hello, {profile?.user?.first_name}
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
                    to="/client-administrator/account-details"
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item pt-custom-1 pb-custom-1"
                    to="/client-administrator/account-management"
                  >
                    Account Settings
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
    </nav>
  );
};

export default MarketplaceNavInc;
