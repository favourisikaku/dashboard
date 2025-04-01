import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const SidebarCandidateInc = () => {
  const location = useLocation();
  const { pathname } = location;

  const { baseUrlCandidate } = useContext(AppContext);
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetchProfile();
  }, []);

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
        localStorage.removeItem("candidate_token");
        localStorage.removeItem("candidate_exam_token"); // Remove invalid token
        localStorage.removeItem("assessment_details");
        localStorage.removeItem("candidate_exam_uuid");
        localStorage.removeItem("answers");
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

      navigate("/");
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
          to="/candidate/dashboard"
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
                Hi, Ray
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
                to="/candidate/settings"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item pt-custom-1 pb-custom-1"
                to="/candidate/settings"
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
                to="/candidate/dashboard"
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
                    pathname === "/candidate/dashboard" ? "nav-active" : ""
                  }`}
                  aria-current="page"
                  to="/candidate/dashboard"
                >
                  {" "}
                  <img
                    src={
                      pathname === "/candidate/dashboard"
                        ? "/images/active-icons/vector1.svg"
                        : "/images/home-icon.svg"
                    }
                    //     : //     ? "/images/active-icons/Frame-2609086.svg" //   pathname === "/candidate/dashboard" // {
                    className="img-fluid"
                  />{" "}
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    pathname === "/candidate/examinations" ? "nav-active" : ""
                  }`}
                  aria-current="page"
                  to="/candidate/examinations"
                >
                  <img
                    src={
                      pathname === "/candidate/examinations"
                        ? "/images/active-icons/assessor-fill.svg"
                        : "/images/file-list-3-line.svg"
                    }
                    className="img-fluid"
                  />{" "}
                  Examinations
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    pathname === "/candidate/resources" ? "nav-active" : ""
                  }`}
                  aria-current="page"
                  to="/candidate/resources"
                >
                  <img
                    src={
                      pathname === "/candidate/resources"
                        ? "/images/active-icons/vector3.svg"
                        : "/images/resources-icon.svg"
                    }
                    className="img-fluid"
                  />{" "}
                  Resources
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    pathname === "/candidate/settings" ? "nav-active" : ""
                  }`}
                  aria-current="page"
                  to="/candidate/settings"
                >
                  <img
                    src={
                      pathname === "/candidate/settings"
                        ? "/images/active-icons/settings-2-fill.svg"
                        : "/images/settings-icon-2.svg"
                    }
                    className="img-fluid"
                  />{" "}
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarCandidateInc;
