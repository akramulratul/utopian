
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { addDeposite } from '../../Redux/Actions/depositeAction';
import DashboardNav from '../DashboardNav';
import DepositHistory from '../DepositHistory/DepositHistory';
import Sidebar from '../Sidebar';

const AddDeposit = () => {
    const dispatch = useDispatch();
    const depositeData = useSelector(state => state.addDeposite)
    const { loading, error, depositeInfo } = depositeData
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault();
        if (data.depositAmount >= 1000) {

            const depositDetails = {
                depositAmount: data.depositAmount,
                paidBy: data.payment,
                transactionId: data.transId,
                referralId: data.referralId,
                sendFrom: data.phoneNo + data.phone,

            }
            dispatch(addDeposite(depositDetails))


            // axios.post('https://utopain-backend.herokuapp.com/user/balance', depositDetails, {
            //     'content-type': 'application/json',
            //     'authorization': `Bearer ${token}`,
            // })
            //     .then(response => {
            //         console.log(response.data);
            //     })

            //     fetch('https://utopain-backend.herokuapp.com/user/balance', {
            //         method: 'POST',
            //         headers: {
            //             'content-type': 'application/json',
            //             'authorization': `Bearer ${token}`,
            //         },
            //         body: JSON.stringify(depositDetails)
            //     })
            //         .then(response => response.json())
            //         .then(data => {
            //             console.log(data)
            //             e.target.reset();
            //         });
        } else {
            alert("need money 1000 up")
        }


    }


    return (
        <section>
            <div className="row">
                <Sidebar />
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                    <div className="card ">
                        <div className="card-body">
                            <DashboardNav />
                            <form className="row gutters" onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                                    <h2 className="mb-2 text-primary">Deposit</h2>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                    <div className="form-group">
                                        <label htmlFor="userId" className="form-label">User ID</label>
                                        <input type="text" {...register("userId", { required: true })} name="userId" placeholder="User ID" className="form-control" />
                                        {errors.userId && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                    <div className="form-group ">
                                        <label htmlFor="referralId" className="form-label">Referral ID</label>
                                        <input type="text" {...register("referralId", { required: false })} name="referralId" placeholder="Referral ID" className="form-control" />
                                        {errors.referralId && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                    <div className="form-group ">
                                        <label htmlFor="depositAmount" className="form-label">Deposit Amount</label>
                                        <input type="number" {...register("depositAmount", { required: true })} name="depositAmount" placeholder="Deposit Amount" className="form-control" />
                                        {errors.depositAmount && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <label htmlFor="phoneNo" className="form-label">Country</label>
                                    <div className="select-wrapper input-field">
                                        <select {...register("phoneNo", { required: true })} name="phoneNo" className="select-country-number">
                                            {/* <option data-countryCode="GB" value="44" Selected>UK (+44)</option>
                                 */}
                                            <option value="+880">Bangladesh (+880)</option>
                                            <option value="1">USA (+1)</option>
                                            <optgroup label="Other countries">
                                                <option value="213">Algeria (+213)</option>
                                                <option value="376">Andorra (+376)</option>
                                                <option value="244">Angola (+244)</option>

                                                <option value="1264">Anguilla (+1264)</option>
                                                <option value="1268">Antigua &amp; Barbuda (+1268)</option>
                                                <option value="54">Argentina (+54)</option>
                                                <option value="374">Armenia (+374)</option>
                                                <option value="297">Aruba (+297)</option>
                                                <option value="61">Australia (+61)</option>
                                                <option value="43">Austria (+43)</option>
                                                <option value="994">Azerbaijan (+994)</option>
                                                <option value="1787">Puerto Rico (+1787)</option>
                                                <option value="974">Qatar (+974)</option>
                                                <option value="262">Reunion (+262)</option>
                                                <option value="40">Romania (+40)</option>
                                                <option value="7">Russia (+7)</option>
                                                <option value="250">Rwanda (+250)</option>
                                                <option value="378">San Marino (+378)</option>
                                                <option value="239">Sao Tome &amp; Principe (+239)</option>
                                                <option value="966">Saudi Arabia (+966)</option>
                                                <option value="221">Senegal (+221)</option>
                                                <option value="381">Serbia (+381)</option>
                                                <option value="248">Seychelles (+248)</option>
                                                <option value="232">Sierra Leone (+232)</option>
                                                <option value="65">Singapore (+65)</option>
                                                <option value="421">Slovak Republic (+421)</option>
                                                <option value="386">Slovenia (+386)</option>
                                                <option value="677">Solomon Islands (+677)</option>
                                                <option value="252">Somalia (+252)</option>
                                                <option value="27">South Africa (+27)</option>
                                                <option value="34">Spain (+34)</option>
                                                <option value="94">Sri Lanka (+94)</option>
                                                <option value="290">St. Helena (+290)</option>
                                                <option value="1869">St. Kitts (+1869)</option>
                                                <option value="1758">St. Lucia (+1758)</option>
                                                <option value="249">Sudan (+249)</option>
                                                <option value="597">Suriname (+597)</option>
                                                <option value="268">Swaziland (+268)</option>
                                                <option value="46">Sweden (+46)</option>
                                                <option value="41">Switzerland (+41)</option>
                                                <option value="963">Syria (+963)</option>
                                                <option value="886">Taiwan (+886)</option>
                                                <option value="7">Tajikstan (+7)</option>
                                                <option value="66">Thailand (+66)</option>
                                                <option value="228">Togo (+228)</option>
                                                <option value="676">Tonga (+676)</option>
                                                <option value="1868">Trinidad &amp; Tobago (+1868)</option>
                                                <option value="216">Tunisia (+216)</option>
                                                <option value="90">Turkey (+90)</option>
                                                <option value="7">Turkmenistan (+7)</option>
                                                <option value="993">Turkmenistan (+993)</option>
                                                <option value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                                <option value="688">Tuvalu (+688)</option>
                                                <option value="256">Uganda (+256)</option>
                                                {/* <!-- <option data-countryCode="GB" value="44">UK (+44)</option> --> */}
                                                <option value="380">Ukraine (+380)</option>
                                                <option value="971">United Arab Emirates (+971)</option>
                                                <option value="598">Uruguay (+598)</option>
                                                {/* <!-- <option data-countryCode="US" value="1">USA (+1)</option> --> */}
                                                <option value="7">Uzbekistan (+7)</option>
                                                <option value="678">Vanuatu (+678)</option>
                                                <option value="379">Vatican City (+379)</option>
                                                <option value="58">Venezuela (+58)</option>
                                                <option value="84">Vietnam (+84)</option>
                                                <option value="84">Virgin Islands - British (+1284)</option>
                                                <option value="84">Virgin Islands - US (+1340)</option>
                                                <option value="681">Wallis &amp; Futuna (+681)</option>
                                                <option value="969">Yemen (North)(+969)</option>
                                                <option value="967">Yemen (South)(+967)</option>
                                                <option value="260">Zambia (+260)</option>
                                                <option value="263">Zimbabwe (+263)</option>
                                            </optgroup>
                                        </select>
                                        <input type="number" {...register("phone", { required: true })} name="phone" className="input-field-number" placeholder="Enter your number" />
                                    </div>
                                </div>
                                {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <input type="text" {...register("email", { required: true })} name="email" placeholder="Email" className="form-control" />
                                        {errors.email && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div> */}
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                    <div className="form-group">
                                        <label htmlFor="transId" className="form-label">Transaction ID</label>
                                        <input type="text" {...register("transId", { required: true })} name="transId" placeholder="Transaction ID" className="form-control" />
                                        {errors.transId && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="payment" className="form-label">Payment Method</label>
                                        <select {...register("payment", { required: true })} className="custom-select" name="payment">
                                            {/* <option disabled>Open this select menu</option> */}
                                            <option value="Bkash">Bkash</option>
                                            <option value="DBBL NEXUS Cards">DBBL NEXUS Cards</option>
                                            <option value="Mastercard">Mastercard</option>
                                        </select>
                                    </div>
                                </div>



                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                                        <div className="text">
                                            <button type="submit" id="submit" name="submit"
                                                className="btn btn-primary">Add Deposit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>


                            <DepositHistory />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default AddDeposit;