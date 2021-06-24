import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDepositeHistory } from '../../Redux/Actions/depositeAction';



const DepositHistory = () => {
    const [isloading, setIsloading] = useState(true)
    const dispatch = useDispatch()
    const depositHistory = useSelector(state => state.depositHistory)
    const { loading, error, depositInfo } = depositHistory
    const stopLoading = () => {
        setIsloading(false)
    }
    useEffect(() => {
        dispatch(getDepositeHistory())
        stopLoading()
    }, [dispatch])
    return (
        <>
            {
                isloading ? <p>Loading...</p> :
                    loading ? <p>Loading...</p> :
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
                                        depositInfo.data.map((depositeData, index) => {
                                            return (
                                                <tr>
                                                    <td>27/04/21</td>
                                                    <td>{depositeData.transactionId}</td>
                                                    <td>BDT {depositeData.depositAmount}/-</td>
                                                    <td>{depositeData.paidBy}</td>
                                                    <td>{depositeData.status}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

            }
        </>
    );
};

export default DepositHistory;
