import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SidebarLeft = () => {
  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  return (
    <nav
      className="flex-none navbar navbar-vertical navbar-expand-lg show vh-lg-100 bg-white px-0 py-2 navbar-dark px-1"
      id="sidebar"
      style={{
        borderRight: "1px solid #E0E0E0",
      }}
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

        <Link className="navbar-brand me-0 ps-lg-4 text-bold ms-5 aaaa" to="/">
          <img
            src="/images/logo.jpg"
            className="img-fluid logo-size"
            alt="logo"
          />
        </Link>

        {/* <div className="navbar-user d-lg-none">
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
                src="/images/logo.jpg"
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
              <Link className="dropdown-item pt-custom-1 pb-custom-1"></Link>
            </li>
            <li>
              <Link className="dropdown-item pt-custom-1 pb-custom-1"></Link>
            </li>
            <li></li>
          </ul>
        </div> */}

        <div
          className="offcanvas offcanvas-end bg-main-secondary"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header justify-content-between align-items-center">
            <div className="offcanvas-title d-flex">
              <Link className="navbar-brand me-0 text-bold ms-5 pt-4" to="/">
                <img
                  src="/images/logo.jpg"
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
            <ul className="navbar-nav flex-column sidebar-list my-4">
              <li className="nav-item mb-4">
                <Link
                  className={`nav-link ${pathname === "/" ? "nav-active" : ""}`}
                  to="/"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: pathname === "/" ? "white" : "#344054",
                    backgroundColor:
                      pathname === "/" ? "#0179FE" : "transparent",
                    borderRadius: "8px",
                    padding: "20px 7px",
                    fontWeight: "600",
                  }}
                >
                  <img
                    src="/images/home-2.svg"
                    className="img-fluid"
                    alt="Home"
                  />{" "}
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/transactions" ? "nav-active" : ""
                  }`}
                  to="/transactions"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: pathname === "/transactions" ? "white" : "#344054",
                    backgroundColor:
                      pathname === "/transactions" ? "#0179FE" : "transparent",
                    borderRadius: "8px",
                    padding: "20px 7px",
                    fontWeight: "600",
                  }}
                >
                  <img
                    src="/images/Vector.svg"
                    className="img-fluid"
                    alt="Transaction"
                  />{" "}
                  Transaction History
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarLeft;
