import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';


const DepositHistory = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [depositeData, setDepositeData] = useState([]);
    let token = '';
    if (localStorage.getItem('token')) {
        token = JSON.parse(localStorage.getItem('token')).data.token;
    }
    useEffect(() => {
        if (token) {
            fetch('https://utopain-backend.herokuapp.com/user/balance', {
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${token}`,
                },
            })
                .then(response => response.json())
                .then(data => setDepositeData(data.data.data));
        }
    }, [token])
    console.log(depositeData);
    return (
        <div className="mt-5">
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Transaction</th>
                        <th scope="col">Deposite</th>
                        <th scope="col">Pay By</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        depositeData.map(depositeInfo => {
                            return (
                                <tr>
                                    <td>27/04/21</td>
                                    <td>{depositeInfo.transactionId}</td>
                                    <td>BDT {depositeInfo.depositAmount}/-</td>
                                    <td>{depositeInfo.paidBy}</td>
                                    <td>{depositeInfo.status}</td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>

    );
};

export default DepositHistory;



// import React from 'react';
// import Navbar from '../../shared/Navbar/Navbar';
// import Sidebar from '../../shared/Sidebar/Sidebar';

// const DepositHistory = () => {
//     return (
//         <section>
//             <Navbar />
//             <div className="row">
//                 <Sidebar />
//                 <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 mt-5">
//                     <div className="container  table-responsive table-responsive-sm table-responsive-md table-responsive-xl ">
//                         <table class="table table-hover">
//                             <thead class="table-primary">
//                                 <tr>
//                                     <th scope="col">Date</th>
//                                     <th scope="col">Description</th>
//                                     <th scope="col">Deposit</th>
//                                     <th scope="col">Balance</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>27/04/21</td>
//                                     <td>Lorem ipsum dolor sit.</td>
//                                     <td>694.81</td>
//                                     <td>10000</td>
//                                 </tr>
//                                 <tr>
//                                     <td>27/04/21</td>
//                                     <td>Lorem ipsum dolor sit.</td>
//                                     <td>694.81</td>
//                                     <td>10000</td>
//                                 </tr>
//                                 <tr>
//                                     <td>27/04/21</td>
//                                     <td>Lorem ipsum dolor sit.</td>
//                                     <td>694.81</td>
//                                     <td>10000</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DepositHistory;