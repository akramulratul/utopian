import React from 'react';
import { useHistory } from 'react-router';
import DashboardNav from './DashboardNav';
import DashboardTopInfo from './Shared/DashboardTopInfo';



const DashboardContent = ({ depositeData }) => {

    let totalDeposite = 0;
    for (let i = 0; i < depositeData.length; i++) {
        totalDeposite = depositeData[i].depositAmount + totalDeposite;
    }


    return (
        <div className='dashboard-content'>
            <div >
                <DashboardNav />
                <div className="body-content px-4 pt-4">

                    <DashboardTopInfo totalDeposite={totalDeposite} />


                    <div className="body-data">
                        <div>
                            <div className="row">
                                <div className="col-lg-8 ">
                                    {/* This section will remove */}
                                    <div className="graph-holder d-flex justify-content-center align-items-center">
                                        {/* Graph will add here */}
                                        <div className="pt-5 mt-5">
                                            <h1>GRAPH</h1>
                                        </div>

                                    </div>
                                    {/* This section will remove */}
                                </div>
                                <div className="col-lg-4">
                                    <div>
                                        <div className="dash-right-card bg-white d-flex justify-content-between mx-1 my-3 py-4 rounded px-3">
                                            <div className="title pt-1">
                                                <h6> INCENTIVE WITHDRAWAL</h6>
                                            </div>
                                            <div className="balance">
                                                <h4>$340.00</h4>
                                            </div>
                                        </div>

                                        <div className="dash-right-card bg-white d-flex justify-content-between mx-1 my-3 py-4 rounded px-3">
                                            <div className="title pt-1">
                                                <h6> INCENTIVE BALANCE</h6>
                                            </div>
                                            <div className="balance">
                                                <h4>$1350.96</h4>
                                            </div>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="dash-right-second-card mx-1">
                                            <div className="row dash-right-second-holder">
                                                <div className="col-lg-4 right-second-card text-center py-3">
                                                    <div className=''>
                                                        <small><b>Team Deposit</b></small>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 right-second-card text-center py-3">
                                                    <div className=''>
                                                        <small><b>Partner</b></small>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 right-second-card text-center py-3">
                                                    <div className=''>
                                                        <small><b>Insurance</b></small>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="dash-right-card bg-white border d-flex justify-content-between py-4  px-3">
                                                <div className="title pt-1">
                                                    <h6> TEAM DEPOSIT</h6>
                                                </div>
                                                <div className="balance">
                                                    <h4>$1750.50</h4>
                                                </div>
                                            </div>





                                        </div>
                                        <div className="dash-right-card bg-white d-flex justify-content-between mx-1 my-3 py-4 rounded px-3">
                                            <div className="title pt-1">
                                                <h6> TOTAL AMOUNT</h6>
                                            </div>
                                            <div className="balance">
                                                <h4>$5750.75</h4>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </div >
        </div >
    );
};

export default DashboardContent;