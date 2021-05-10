import React from 'react';


const DepositHistory = () => {
    return (
        <div className="mt-5">
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Deposit</th>
                        <th scope="col">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>27/04/21</td>
                        <td>Lorem ipsum dolor sit.</td>
                        <td>694.81</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>27/04/21</td>
                        <td>Lorem ipsum dolor sit.</td>
                        <td>694.81</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>27/04/21</td>
                        <td>Lorem ipsum dolor sit.</td>
                        <td>694.81</td>
                        <td>10000</td>
                    </tr>
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