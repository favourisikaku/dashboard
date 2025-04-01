import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const ModeratorSidebarInc = () => {
  const { baseUrl } = useContext(AppContext);
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch(baseUrl + `/api/v1/evaluator/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("moderator_token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        localStorage.removeItem("moderator_token");

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
      const response = await fetch(baseUrl + "/api/v1/evaluator/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("moderator_token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      localStorage.removeItem("evaluator_token");

      navigate("/moderator/login");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <nav
      className="flex-none navbar navbar-vertical navbar-expand-lg show vh-lg-100 bg-white px-0 py-2 navbar-dark"
      id="sidebar"
    >
      <div className="flex-lg-column align-items-lg-start d-flex align-items-center justify-content-between w-100">
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list bi-2 text-dark cursor-pointer"></i>
        </button>

        <Link
          className="navbar-brand me-0 ps-lg-4 text-bold"
          to="/moderator/dashboard"
        >
          <img
            src="/images/fot-logo.svg"
            className="img-fluid logo-size"
            alt="logo"
          />
        </Link>

        <div className="navbar-user d-lg-none">
          <a
            className="nav-link no-caret d-flex align-items-center no-caret dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="avatar-sm rounded-circle me-2">
              <img
                src="/images/download.png"
                className="img-fluid object-fit-cover object-position-center w-100 h-100"
              />
            </div>
            <div className="d-flex align-items-center">
              <p className="text-truncate text-main-4 d-lg-inline-block d-none text-medium mb-0">
                Hello, {profile?.first_name || "moderator"}
              </p>
            </div>
          </a>
          <ul
            className="dropdown-menu drop-size-2 cat-list border-0 py-0 right-0"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <Link
                className="dropdown-item pt-custom-1 pb-custom-1"
                to="/moderator/account-details"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item pt-custom-1 pb-custom-1"
                to="/moderator/account-details"
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

        <div
          className="offcanvas offcanvas-end bg-main-secondary"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header justify-content-between align-items-center">
            <div className="offcanvas-title">
              <Link
                className="navbar-brand me-0 text-bold"
                to="/moderator/dashboard"
              >
                <img
                  src="/images/fot-logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>

            <i
              className="bi bi-x-lg"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></i>
          </div>

          <div className="offcanvas-body flex-column custom-offcanvas-h">
            <ul className="navbar-nav flex-column sidebar-list my-4">
              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    pathname === "/moderator/dashboard" ? "nav-active" : ""
                  }`}
                  aria-current="page"
                  to="/moderator/dashboard"
                >
                  {" "}
                  <img
                    src={
                      pathname === "/moderator/dashboard"
                        ? "/images/active-icons/dashboard-fill.svg"
                        : "/images/dashboard-line.svg"
                    }
                    className="img-fluid"
                  />{" "}
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    pathname.startsWith("/moderator/assigned-assessor") ||
                    pathname.startsWith("/moderator/mark-username") ||
                    pathname.startsWith("/moderator/mark-questions") ||
                    pathname.startsWith("/moderator/assigned-candidates")
                      ? "nav-active"
                      : ""
                  }`}
                  aria-current="page"
                  to="/moderator/assigned-assessor"
                >
                  <img
                    src={
                      pathname.startsWith("/moderator/mark-questions") ||
                      pathname.startsWith("/moderator/mark-username") ||
                      pathname.startsWith("/moderator/assigned-assessor") ||
                      pathname.startsWith("/moderator/assigned-candidates")
                        ? "/images/active-icons/candidate-group-fill.svg"
                        : "/images/user-2-line.svg"
                    }
                    className="img-fluid"
                  />{" "}
                  Assigned Assessors
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    pathname === "/moderator/account-details"
                      ? "nav-active"
                      : ""
                  }`}
                  aria-current="page"
                  to="/moderator/account-details"
                >
                  <img
                    src={
                      pathname === "/moderator/account-details"
                        ? "/images/active-icons/account-management.svg"
                        : "/images/shield-user-line.svg"
                    } //     : //     ? "/images/active-icons/shield-user-fill.svg" //   pathname === "/moderator/account-details" // {
                    className="img-fluid"
                  />{" "}
                  Account Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ModeratorSidebarInc;
