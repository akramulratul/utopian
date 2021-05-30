import React from 'react';
import '../../../styles/_Withdraw.scss'
import { Link } from 'react-router-dom'
import  { useState } from 'react';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';

const WithdrawNow = () => {
    const [isClicked, setIsClicked] = useState(false);
    const buttonClicked = () =>{
        setIsClicked(isClicked);
    }
    return (
        <div className='row d-flex justify-content-between box'>
            <div className='col-2'>
            <h6>Dashboard /Withdrawal</h6>
            </div >
            <div className='col-3'>
            <input type="text" class="form-control" placeholder="Search" aria-label="Search"></input>
                </div>
                <div className='col-3'> 
                <h4>$220</h4>
                <p><small className='text-secondary'>Available Balance</small></p>
                </div>
                <div className='col-4'>
                    
                    <button onClicked={buttonClicked} className='withdraw-btn'>{isClicked?
                    <Link to='/withdraw'>
                        <p>Back To Withdraw</p>
                        </Link>:
                        <Link to='/payment-method'>
                        <p>Withdrawal Now</p>
                     </Link>}
                     </button>
                     
                
                </div>
        </div>
    );
};

export default WithdrawNow;