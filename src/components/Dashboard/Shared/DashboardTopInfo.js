import React from 'react';

import totalDepo from '../../../image/icons/total depo.svg'
import totalWid from '../../../image/icons/total wid.svg'
import totalInc from '../../../image/icons/total inc.svg'

const DashboardTopInfo = ({ totalDeposite }) => {
    return (
        <div>
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
        </div>
    );
};

export default DashboardTopInfo;