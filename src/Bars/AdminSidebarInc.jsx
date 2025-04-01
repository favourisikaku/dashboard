import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const AdminSidebarInc = () => {
  const location = useLocation();
  const { pathname } = location;

  const { superAdminBaseUrl } = useContext(AppContext);
  const navigate = useNavigate();

  const [permissions, setPermissions] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await fetch(
        `${superAdminBaseUrl}/user-accounts/fot-admins/latest-permissions`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("global_token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!res.ok) {
        localStorage.removeItem("global_token");
        throw new Error(`Failed to fetch data`);
      }

      const data = await res.json();
      setPermissions(data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(superAdminBaseUrl + "/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("global_token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      localStorage.removeItem("global_token");

      navigate("/global-admin/login");
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
          to="/global-admin/dashboard"
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
            {/* <li>
              <a className="dropdown-item pt-custom-1 pb-custom-1" href="#">
                My Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item pt-custom-1 pb-custom-1" href="#">
                Account Settings
              </a>
            </li> */}
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
                to="/global-admin/dashboard"
              >
                <img
                  src="/images/fot-logo.svg"
                  className="img-fluid logo-size"
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
              <ul className="navbar-nav flex-column sidebar-list sidebar-list-3 my-4">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      pathname === "/global-admin/dashboard" ? "nav-active" : ""
                    }`}
                    aria-current="page"
                    to="/global-admin/dashboard"
                  >
                    <img
                      src={
                        pathname === "/global-admin/dashboard"
                          ? "/images/active-icons/dashboard-fill.svg"
                          : "/images/dashboard-line.svg"
                      }
                      className="img-fluid"
                      alt="Dashboard"
                    />{" "}
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link d-flex align-items-center justify-content-between ${
                      pathname.startsWith("/global-admin/fot-admin") ||
                      pathname.startsWith("/global-admin/organisation") ||
                      pathname.startsWith("/global-admin/test-producers") ||
                      pathname.startsWith("/global-admin/candidates") ||
                      pathname.startsWith("/global-admin/user-details") ||
                      pathname.startsWith("/global-admin/organisation") ||
                      pathname.startsWith("/global-admin/exam-campaign") ||
                      pathname.startsWith(
                        "/global-admin/exam-campaign-details/uuid"
                      ) ||
                      pathname.startsWith("/global-admin/create-campaign") ||
                      pathname.startsWith(
                        "/global-admin/progress-monitoring"
                      ) ||
                      pathname.startsWith(
                        "/global-admin/candidate-result-view"
                      ) ||
                      pathname.startsWith("/global-admin/proctoring") ||
                      pathname.startsWith("/global-admin/special")
                        ? "nav-active"
                        : ""
                    }`}
                    aria-current="page"
                    data-bs-toggle="collapse"
                    href="#collapseAcct"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseAcct"
                  >
                    <span>
                      <img
                        src={
                          pathname.startsWith("/global-admin/fot-admin") ||
                          pathname.startsWith("/global-admin/organisation") ||
                          pathname.startsWith("/global-admin/test-producers") ||
                          pathname.startsWith("/global-admin/candidates") ||
                          pathname.startsWith("/global-admin/user-details") ||
                          pathname.startsWith("/global-admin/organisation") ||
                          pathname.startsWith("/global-admin/exam-campaign") ||
                          pathname.startsWith(
                            "/global-admin/exam-campaign-details/uuid"
                          ) ||
                          pathname.startsWith(
                            "/global-admin/create-campaign"
                          ) ||
                          pathname.startsWith(
                            "/global-admin/progress-monitoring"
                          ) ||
                          pathname.startsWith(
                            "/global-admin/candidate-result-view"
                          ) ||
                          pathname.startsWith("/global-admin/special") ||
                          pathname.startsWith("/global-admin/proctoring")
                            ? "/images/active-icons/user-fill.svg"
                            : "/images/user-accounts.svg"
                        }
                        className="img-fluid"
                        alt="User Accounts"
                      />{" "}
                      User accounts
                    </span>
                    <img
                      src="/images/arrow-down-s-line.svg"
                      className="img-fluid"
                      alt="Expand"
                    />
                  </a>
                  <div className="collapse" id="collapseAcct">
                    <div className="card card-body border-0">
                      <ul className="list-unstyled list-actions">
                        {(permissions === "all" ||
                          permissions?.includes("Manage Admins")) && (
                          <li>
                            <Link
                              to="/global-admin/fot-admin"
                              className={
                                pathname.startsWith(
                                  "/global-admin/fot-admin"
                                ) ||
                                pathname.startsWith(
                                  "/global-admin/user-details"
                                )
                                  ? "active"
                                  : ""
                              }
                            >
                              FOT Admins
                            </Link>
                          </li>
                        )}
                        {(permissions === "all" ||
                          permissions?.includes("Manage Organization")) && (
                          <li>
                            <Link
                              to="/global-admin/organisation"
                              className={
                                pathname.startsWith(
                                  "/global-admin/organisation"
                                ) ||
                                pathname.startsWith(
                                  "/global-admin/exam-campaign"
                                ) ||
                                pathname.startsWith(
                                  "/global-admin/exam-campaign-details/uuid"
                                ) ||
                                pathname.startsWith(
                                  "/global-admin/create-campaign"
                                ) ||
                                pathname.startsWith(
                                  "/global-admin/financial-report"
                                ) ||
                                pathname.startsWith(
                                  "/global-admin/progress-monitoring"
                                ) ||
                                pathname.startsWith(
                                  "/global-admin/candidate-result-view"
                                ) ||
                                pathname.startsWith("/global-admin/special")
                                  ? "active"
                                  : ""
                              }
                            >
                              Organizations
                            </Link>
                          </li>
                        )}
                        {/* <li>
                        <Link
                          to="/global-admin/test-producers"
                          className={
                            pathname === "/global-admin/test-producers"
                              ? "active"
                              : ""
                          }
                        >
                          Test Producers
                        </Link>
                      </li> */}
                        {(permissions === "all" ||
                          permissions?.includes("Manage Candidates")) && (
                          <li>
                            <Link
                              to="/global-admin/candidates"
                              className={
                                pathname === "/global-admin/candidates"
                                  ? "active"
                                  : ""
                              }
                            >
                              Candidates
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </li>
                {(permissions === "all" ||
                  permissions?.includes("Manage Public Assessment")) && (
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        pathname.startsWith("/global-admin/assessments") ||
                        pathname.startsWith(
                          "/global-admin/preview-assessment"
                        ) ||
                        pathname.startsWith(
                          "/global-admin/assessment-questions"
                        ) ||
                        pathname.startsWith("/global-admin/edit-assessment") ||
                        pathname.startsWith(
                          "/global-admin/assessment-report"
                        ) ||
                        pathname.startsWith("/global-admin/assessment-online")
                          ? "nav-active"
                          : ""
                      }`}
                      aria-current="page"
                      to="/global-admin/assessments"
                    >
                      <img
                        src={
                          pathname.startsWith(
                            "/global-admin/assessment-questions"
                          ) ||
                          pathname.startsWith(
                            "/global-admin/preview-assessment"
                          ) ||
                          pathname.startsWith("/global-admin/assessments") ||
                          pathname.startsWith(
                            "/global-admin/edit-assessment"
                          ) ||
                          pathname.startsWith(
                            "/global-admin/assessment-online"
                          ) ||
                          pathname.startsWith("/global-admin/assessment-report")
                            ? "/images/active-icons/assessor-fill.svg"
                            : "/images/file-list-3-line.svg"
                        }
                        className="img-fluid"
                        alt="Public Assessments"
                      />{" "}
                      Public Assessments
                    </Link>
                  </li>
                )}
                {(permissions === "all" ||
                  permissions?.includes("View Finance Report")) && (
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        pathname === "/global-admin/withdrawals"
                          ? "nav-active"
                          : ""
                      }`}
                      aria-current="page"
                      to="/global-admin/withdrawals"
                    >
                      {" "}
                      <img
                        src={
                          pathname.startsWith("/global-admin/withdrawals")
                            ? "/images/active-icons/pie-chart-fill.svg"
                            : "/images/financial-icon-admin.svg"
                        }
                        className="img-fluid"
                        alt="Financial Reports"
                      />{" "}
                      Financial Reports
                    </Link>
                  </li>
                )}

                {(permissions === "all" ||
                  permissions?.includes("Manage Messages")) && (
                  <li className="nav-item">
                    <a
                      className={`nav-link d-flex align-items-center justify-content-between ${
                        pathname.startsWith("/global-admin/messaging")
                          ? "nav-active"
                          : ""
                      }`}
                      aria-current="page"
                      data-bs-toggle="collapse"
                      href="#collapseMsg"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseMsg"
                    >
                      <span>
                        <img
                          src={
                            pathname.startsWith("/global-admin/messaging")
                              ? "/images/active-icons/message-2-fill.svg"
                              : "/images/msg-icon-admin.svg"
                          }
                          className="img-fluid"
                          alt="Messages"
                        />{" "}
                        Messages
                      </span>
                      <img
                        src="/images/arrow-down-s-line.svg"
                        className="img-fluid"
                        alt="Expand"
                      />
                    </a>
                    <div className="collapse" id="collapseMsg">
                      <div className="card card-body border-0">
                        <ul className="list-unstyled list-actions">
                          {/* <li>
                        <Link
                          to="/global-admin/messaging"
                          className={
                            pathname === "/global-admin/messaging"
                              ? "active"
                              : ""
                          }
                        >
                          All
                        </Link>
                      </li> */}
                          <li>
                            <Link
                              to="/global-admin/messaging-1"
                              className={
                                pathname === "/global-admin/messaging-1"
                                  ? "active"
                                  : ""
                              }
                            >
                              Organizations
                            </Link>
                          </li>
                          {/* <li>
                        <Link
                          to="/global-admin/messaging-2"
                          className={
                            pathname === "/global-admin/messaging-2"
                              ? "active"
                              : ""
                          }
                        >
                          Test Producers
                        </Link>
                      </li> */}
                          <li>
                            <Link
                              to="/global-admin/messaging-3"
                              className={
                                pathname === "/global-admin/messaging-3"
                                  ? "active"
                                  : ""
                              }
                            >
                              Candidates
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                )}

                {(permissions === "all" ||
                  permissions?.includes("Change Settings")) && (
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        pathname.startsWith("/global-admin/system-settings")
                          ? "nav-active"
                          : ""
                      }`}
                      aria-current="page"
                      to="/global-admin/system-settings"
                    >
                      <img
                        src={
                          pathname.startsWith("/global-admin/system-settings")
                            ? "/images/active-icons/settings-3-fill.svg"
                            : "/images/settings-icon-admin.svg"
                        }
                        className="img-fluid"
                        alt="System Settings"
                      />{" "}
                      System Settings
                    </Link>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminSidebarInc;
