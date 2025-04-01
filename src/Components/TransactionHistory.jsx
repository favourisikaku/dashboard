import React from "react";
import SidebarLeft from "../Bars/SidebarLeft";
import SidebarRight from "../Bars/SidebarRight";
import { Link } from "react-router-dom";
import NavBar from "../Bars/NavBar";

const TransactionHistory = () => {
  return (
    <>
      <div className="main-admin-container">
        <main
          className="d-flex flex-column flex-lg-row "
          // className="container-fluid"
        >
          <SidebarLeft />
          <div className="flex-lg-fill overflow-auto vstack vh-lg-100 position-relative bg-color-4">
            <NavBar />
            <div className=" flex-grow-1 px-5">
              <section className="py-5 ">
                <h2 style={{ fontWeight: "600" }}>Transaction History</h2>
                <h5>Gain Insights and Track Your Transactions Over Time</h5>
              </section>

              <div
                className="d-flex justify-content-between align-items-center px-5 border border-2 rounded-4 py-4"
                style={{ backgroundColor: "#1570EF" }}
              >
                <section>
                  <h2 style={{ color: "white" }}>Access</h2>
                  <h5 style={{ color: "white" }}>
                    Access Growth savings Account.
                  </h5>
                  <p
                    // style={{ color: "white" }}
                    style={{ color: "white" }}
                  >
                    ●●●● ●●●● ●●●● 9999
                  </p>
                </section>

                <section>
                  <div
                    className="border border-0 rounded-4 py-3 px-4"
                    style={{ backgroundColor: "#FFFFFF4D" }}
                  >
                    <span style={{ color: "white" }}>Current Balance</span>

                    <h2 style={{ color: "white" }}>&#8358;700,000</h2>
                  </div>
                </section>
              </div>

              <section className="py-4">
                <div>
                  <h4 style={{ fontWeight: "600" }}>Transaction History</h4>
                </div>
              </section>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr className="table  fw-semibold">
                      <th scope="col">Transaction</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                      <th scope="col">Date</th>
                      <th scope="col">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* <th scope="row">1</th> */}
                      <td>Spotify</td>
                      <td className="text-danger">- &#8358;3,000</td>
                      <td>
                        {" "}
                        <img src="images/Badge.svg" />
                      </td>{" "}
                      <td>Wed 1:00pm</td>
                      <td>
                        {" "}
                        <img src="images/Badge1.svg" />
                      </td>
                    </tr>
                    <tr>
                      {/* <th scope="row">1</th> */}
                      <td>John Doe</td>
                      <td className="text-success">+ &#8358;40,000</td>
                      <td>
                        {" "}
                        <img src="images/Badge-success.svg" />
                      </td>{" "}
                      <td>Wed 9:27am</td>
                      <td>
                        {" "}
                        <img src="images/Badge2.svg" />
                      </td>
                    </tr>
                    <tr className="">
                      {/* <th scope="row">1</th> */}
                      <td>Alex John</td>
                      <td className="text-success">+ &#8358;420,000</td>
                      <td>
                        {" "}
                        <img src="images/Badge-success.svg" />
                      </td>{" "}
                      <td>Tue 5:27pm</td>
                      <td>
                        {" "}
                        <img src="images/Badge3.svg" />
                      </td>
                    </tr>
                    <tr>
                      {/* <th scope="row">1</th> */}
                      <td>Shoprite</td>
                      <td className="text-danger">- &#8358;15,000</td>
                      <td>
                        {" "}
                        <img src="images/Badge-success.svg" />
                      </td>{" "}
                      <td>Tue 8:14pm</td>
                      <td>
                        {" "}
                        <img src="images/Badge4.svg" />
                      </td>
                    </tr>
                    <tr className="">
                      {/* <th scope="row">1</th> */}
                      <td>philip Andrew</td>
                      <td className="text-danger">- &#8358;4,000</td>
                      <td>
                        {" "}
                        <img src="images/Badge-failed.svg" />
                      </td>{" "}
                      <td>Mon 9:27am</td>
                      <td>
                        {" "}
                        <img src="images/Badge5.svg" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <SidebarRight />
        </main>
      </div>
    </>
  );
};

export default TransactionHistory;
