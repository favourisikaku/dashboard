import React, { useEffect, useState } from "react";

const CandidateActivateInc = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Event listeners for online/offline events
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Clean up event listeners when component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <nav className="navbar bg-white fixed-top activated-options">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/images/fot-logo.svg"
            className="img-fluid logo-size"
            alt="logo"
          />
        </a>

        <div className="d-flex gap-10 align-items-center">
          <div>
            {isOnline ? (
              <img
                src="/images/internet-2.svg"
                className="img-fluid"
                alt="icon"
              />
            ) : (
              <img
                src="/images/internet-1.svg"
                className="img-fluid"
                alt="icon"
              />
            )}
          </div>

          <div>
            <img
              src="/images/Frame 1000004264.svg"
              className="img-fluid"
              alt="icon"
            />
          </div>

          <div>
            <img
              src="/images/Frame 1000004299.svg"
              className="img-fluid"
              alt="icon"
            />
          </div>

          <div>
            <img
              src="/images/Frame 1000004298.svg"
              className="img-fluid"
              alt="icon"
            />
          </div>

          <div>
            <img
              src="/images/Frame 1000004265.svg"
              className="img-fluid"
              alt="icon"
            />
          </div>
        </div>

        <a href="#" className="text-gray-1">
          Help center
        </a>
      </div>
    </nav>
  );
};

export default CandidateActivateInc;
