import React from "react";
import DashboardNav from "./DashboardNav";
import DashboardTopInfo from "./Shared/DashboardTopInfo";
import Graph from "./Graph";

const DashboardContent = ({ closeSidebar, depositeData }) => {
  return (
    <div className="dashboard-content">
      <div>
        <DashboardNav closeSidebar={closeSidebar} />
        <div className="body-content px-4 pt-4">
          <DashboardTopInfo transactionInfo={depositeData} />

          <div className="body-data">
            <div>
              <div className="row">
                <div className="col-lg-8 ">
                  {/* This section will remove */}
                  <div className="graph-holder d-flex justify-content-center align-items-center">
                    {/* Graph will add here */}
                    <div className="col-lg-8 pt-0 mt-4  bg-white border">
                      {/* <Graph /> */}
                    </div>
                  </div>
                  {/* This section will remove */}
                </div>
                <div className="col-lg-4">
                  <div>
                    <div className="dash-right-card bg-white d-flex justify-content-between mx-1 my-3 py-4 rounded px-3">
                      <div className="title pt-1">
                        <h6>AD REWARD</h6>
                      </div>
                      <div className="balance">
                        <h4>৳ {depositeData.adIncome}</h4>
                      </div>
                    </div>

                    <div className="dash-right-card bg-white d-flex justify-content-between mx-1 my-3 py-4 rounded px-3">
                      <div className="title pt-1">
                        <h6> INCENTIVE BALANCE</h6>
                      </div>
                      <div className="balance">
                        <h4>৳ {depositeData.incentiveBalance}</h4>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="dash-right-second-card mx-1">
                      <div className="row dash-right-second-holder">
                        <div className="col-lg-4 right-second-card text-center py-3">
                          <div className="">
                            <small>
                              <b>Team Deposit</b>
                            </small>
                          </div>
                        </div>
                        <div className="col-lg-4 right-second-card text-center py-3">
                          <div className="">
                            <small>
                              <b>Partner</b>
                            </small>
                          </div>
                        </div>
                        <div className="col-lg-4 right-second-card text-center py-3">
                          <div className="">
                            <small>
                              <b>Insurance</b>
                            </small>
                          </div>
                        </div>
                      </div>

                      <div className="dash-right-card bg-white border d-flex justify-content-between py-4  px-3">
                        <div className="title pt-1">
                          <h6> TEAM DEPOSIT</h6>
                        </div>
                        <div className="balance">
                          <h4>৳ 0</h4>
                        </div>
                      </div>
                    </div>
                    <div className="dash-right-card bg-white d-flex justify-content-between mx-1 my-3 py-4 rounded px-3">
                      <div className="title pt-1">
                        <h6> TOTAL AMOUNT</h6>
                      </div>
                      <div className="balance">
                        <h4>৳ {depositeData.totalAmount}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
