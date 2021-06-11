import React from 'react';
import { useState } from 'react';
const WithdrawHistory = () => {

    const [withdrawData, setWithdrawData] = useState([]);





    return (
        <div>
            <div className="mt-5">
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Payment Method <a href="../../../../image/icons/updown_icon.svg"> </a></th>
                        <th scope="col">TXN Id </th>
                        <th scope="col">Status</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        withdrawData.map(withdrawInfo => {
                            return (
                                <tr>
                                    <td>BKash</td>
                                    <td>txn-8F254TRCFDS</td>
                                    <td>complete</td>
                                    <td>BDT 5000/-</td>
                                    <td>10m ago</td>

                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>
        </div>
    );
};

export default WithdrawHistory;