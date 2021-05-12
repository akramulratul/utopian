import React from 'react';
import toggleIcon from '../../image/icons/toggle nav icon.svg'
import notificationIcon from '../../image/icons/noti.svg'
import gear from '../../image/icons/settings.svg'
import totalDepo from '../../image/icons/total depo.svg'
import totalWid from '../../image/icons/total wid.svg'
import totalInc from '../../image/icons/total inc.svg'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


const DashboardContent = ({ depositeData }) => {
    const history = useHistory();
    let totalDeposite = 0;
    for (let i = 0; i < depositeData.length; i++) {
        totalDeposite = depositeData[i].depositAmount + totalDeposite;
    }
    const logOut = () => {
        localStorage.removeItem('token');
        history.push('/login')
    }

    return (
        <div className='dashboard-content'>
            <div >
                <div className="header px-4 py-3 d-flex justify-content-between">
                    <div className="left-content d-flex align-items-center ">
                        <div className="toogle-b pr-3">
                            <img src={toggleIcon} alt="" />
                        </div>
                        <div className="logo px-lg-5">
                            <Link to='/'><h3>UtoPian</h3></Link>
                        </div>
                    </div>
                    <div className="right-content d-flex align-items-center">
                        <div className=" px-3">
                            <img src={notificationIcon} alt="" />
                        </div>
                        <div className=" px-3">
                            <img src={gear} alt="" />
                        </div>
                        <div className="btn btn-logout pt-2 ml-lg-5" onClick={logOut}>
                            <h6>Logout</h6>
                        </div>
                    </div>
                </div>
                <div className="body-content px-4 pt-4">

                    <div className="top-cards-wrapper row">
                        <div className="col-lg-4">
                            <div className='top-card m-1'>
                                <div className="d-flex justify-content-between">
                                    <div className="left-data">
                                        <p><b>TOTAL DEPOSIT</b></p>
                                        <h3>BDT-{totalDeposite || "0.00"}</h3>
                                    </div>
                                    <div className="right-icon">
                                        <img src={totalDepo} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div >
                        <div className="col-lg-4">
                            <div className='top-card  m-1'>
                                <div className="d-flex justify-content-between">
                                    <div className="left-data">
                                        <p><b>TOTAL WITHDRAWAL</b></p>
                                        <h3>BDT-1750.96</h3>
                                    </div>
                                    <div className="right-icon">
                                        <img src={totalWid} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='top-card m-1'>
                                <div className="d-flex justify-content-between">
                                    <div className="left-data">
                                        <p><b>TOTAL INCOME</b></p>
                                        <h3>BDT-1750.96</h3>
                                    </div>
                                    <div className="right-icon">
                                        <img src={totalInc} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >


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