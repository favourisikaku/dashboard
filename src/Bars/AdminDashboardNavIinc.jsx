import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminDashboardNavIinc = ({ SideBarVisibility }) => {
  const { superAdminBaseUrl } = useContext(AppContext);
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    const global_token = localStorage.getItem("global_token");
    if (!global_token) {
      navigate("/");
      return;
    }
    fetchDashboard();
  }, [navigate]);

  const fetchDashboard = async () => {
    try {
      const res = await fetch(superAdminBaseUrl + `/dashboard`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("global_token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data.");
      }

      const data = await res.json();
      setDashboard(data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
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
          {/* <!-- <i className="bi bi-wallet bi-2 cursor-pointer"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasPanic" aria-controls="offcanvasWallet"></i> --> */}

          {/* <a href="#">
            <img
              src="/images/notification-4-line.svg"
              className="img-fluid"
              alt="bell"
            />
          </a> */}

          <a href="#">
            <img
              src="/images/system-admin.svg"
              className="img-fluid"
              alt="bell"
            />
          </a>

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
                  Hello, Admin
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardNavIinc;
