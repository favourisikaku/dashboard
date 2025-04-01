import React from "react";
import SidebarLeft from "../Bars/SidebarLeft";
import SidebarRight from "../Bars/SidebarRight";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <main
        className="d-flex  justify-content-between"
        // className="container-fluid"
      >
        <SidebarLeft />
        <div className=" flex-grow-1 px-5">
          <section className="py-5">
            <h2 className="fw-semibold ">
              Welcome, <span style={{ color: "#0179FE" }}>Favour</span>
            </h2>
            <h5>Access & manage your account and transactions efficiently.</h5>
          </section>

          <section>
            <div className="d-flex justify-content-between">
              <div>
                <h3 style={{ fontWeight: "600" }} className="py-4">
                  Recent Transactions
                </h3>
              </div>
              <Link to="/transactions">
                <button className=" btn btn-light p-3">View all</button>
              </Link>
            </div>
          </section>
          <div className="table-responsive">
            <table className="table ">
              <thead>
                <tr className="table table-light">
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
                <tr className="table-success">
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
                <tr className="table-danger ">
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

        <SidebarRight />
      </main>
    </>
  );
};

export default Index;
