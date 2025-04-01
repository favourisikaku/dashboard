import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MarketplaceSidebarInc = () => {
  const { baseUrl } = useContext(AppContext);
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch(baseUrl + `/api/v1/marketplace/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("marketplace_token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        localStorage.removeItem("marketplace_token");

        throw new Error("Failed to fetch data.");
      }

      const data = await res.json();

      setProfile(data?.data?.user);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrl + "/api/v1/marketplace/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("marketplace_token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      localStorage.removeItem("marketplace_token");

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
          to="/marketplace/dashboard"
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
                to="/marketplace/account-details"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item pt-custom-1 pb-custom-1"
                to="/marketplace/account-management"
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
                to="/marketplace/dashboard"
              >
                <img
                  src="/images/fot-marketplace.svg"
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
            {isloading ? (
              <ul className="navbar-nav flex-column sidebar-list my-4">
                {[...Array(5)]?.map((_, index) => (
                  <li key={index} className="nav-item">
                    <Skeleton circle={true} height={20} width={20} />
                    <Skeleton width="80%" style={{ marginLeft: "30px" }} />
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="navbar-nav flex-column sidebar-list-2 my-4">
                <li className="nav-item">
                  <Link
                    // className="nav-link nav-active"
                    className={`nav-link  ${
                      pathname === "/marketplace/dashboard" ? "nav-active" : ""
                    }`}
                    aria-current="page"
                    to="/marketplace/dashboard"
                  >
                    {" "}
                    <img
                      src={
                        pathname === "/marketplace/dashboard"
                          ? "/images/active-icons/dashboard-fill.svg"
                          : "/images/dashboard-line.svg"
                      }
                      className="img-fluid"
                    />{" "}
                    Dashboard
                  </Link>
                </li>

                {(profile?.permissions?.length === 0 ||
                  (profile?.permissions?.includes(
                    "Create and Manage Assessments"
                  ) &&
                    profile?.permissions?.includes(
                      "Manage Sales of Assessments"
                    )) ||
                  profile?.permissions?.includes(
                    "Create and Manage Assessments"
                  )) && (
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        pathname.startsWith("/marketplace/assessments") ||
                        pathname.startsWith(
                          "/marketplace/preview-assessment"
                        ) ||
                        pathname.startsWith(
                          "/marketplace/assessment-questions"
                        ) ||
                        pathname.startsWith("/marketplace/edit-assessment") ||
                        pathname.startsWith("/marketplace/assessment-report")
                          ? "nav-active"
                          : ""
                      }`}
                      aria-current="page"
                      to="/marketplace/assessments"
                    >
                      <img
                        src={
                          pathname.startsWith(
                            "/marketplace/assessment-questions"
                          ) ||
                          pathname.startsWith(
                            "/marketplace/preview-assessment"
                          ) ||
                          pathname.startsWith("/marketplace/assessments") ||
                          pathname.startsWith("/marketplace/edit-assessment") ||
                          pathname.startsWith("/marketplace/assessment-online")
                            ? "/images/active-icons/assessor-fill.svg"
                            : "/images/file-list-3-line.svg"
                        }
                        className="img-fluid"
                        alt="Assessments Icon"
                      />
                      Assessments
                    </Link>
                  </li>
                )}

                {(profile?.permissions?.length === 0 ||
                  profile?.permissions?.includes(
                    "Audit Financial Reports"
                  )) && (
                  <li className="nav-item">
                    <Link
                      className={`nav-link  ${
                        pathname === "/marketplace/financial-reports"
                          ? "nav-active"
                          : ""
                      }`}
                      aria-current="page"
                      to="/marketplace/financial-reports"
                    >
                      <img
                        src={
                          pathname.startsWith("/marketplace/financial-reports")
                            ? "/images/active-icons/financial-reports.svg"
                            : "/images/financial-icon.svg"
                        }
                        className="img-fluid"
                      />{" "}
                      Financial Reports
                    </Link>
                  </li>
                )}

                <li className="nav-item">
                  <Link
                    // className={`nav-link  ${
                    //   pathname === "/marketplace/account-management"
                    //     ? "nav-active"
                    //     : ""
                    // }`}
                    className={`nav-link ${
                      pathname.startsWith("/marketplace/account-management") ||
                      pathname.startsWith("/marketplace/account-details") ||
                      pathname.startsWith("/marketplace/help-center") ||
                      pathname.startsWith(
                        "/marketplace/security-permissions"
                      ) ||
                      pathname.startsWith("/marketplace/general-settings") ||
                      pathname.startsWith("/marketplace/manage-users")
                        ? "nav-active"
                        : ""
                    }`}
                    aria-current="page"
                    to="/marketplace/account-management"
                  >
                    <img
                      src={
                        pathname.startsWith("/marketplace/general-settings") ||
                        pathname.startsWith(
                          "/marketplace/security-permissions"
                        ) ||
                        pathname.startsWith("/marketplace/help-center") ||
                        pathname.startsWith("/marketplace/account-details") ||
                        pathname.startsWith(
                          "/marketplace/account-management"
                        ) ||
                        pathname.startsWith("/marketplace/manage-users")
                          ? "/images/active-icons/account-management.svg"
                          : "/images/shield-user-line.svg"
                      }
                      className="img-fluid"
                    />{" "}
                    Account Management
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MarketplaceSidebarInc;
