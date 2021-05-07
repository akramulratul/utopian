import React from 'react';
import bundleImg from '../../../image/4027794.jpg'
import './OurBundle.css'
const OurBundle = () => {
    const servicePlans = [
        {
            name: 'Silver Star',
            price: 500000
        },
        {
            name: 'Bronze Star',
            price: 1000000
        },
        {
            name: 'Golden Star',
            price: 2000000
        },
        {
            name: 'Platinum Star',
            price: 3000000
        },
        {
            name: 'Achievement Star',
            price: 5000000
        },
        {
            name: 'Mission Star',
            price: 7000000
        },
        {
            name: 'Star Star Star',
            price: 10000000
        }
    ]
    return (
        <section className='px-lg-5'>
            <h4 className='text-brand mt-5 py-3'><b>OUR BUNDLES</b></h4>
            <h1 className='text-secondary'><b>We Provide some best pakages for you</b></h1>

            <div className="row mt-5 pt-5">
                <div className="col-lg-7 col-md-12">
                    <img className='w-100 p-5' src={bundleImg} alt="" />
                </div>
                <div className="col-lg-5 p-4 text-left">
                    <h3 className='pb-4 text-center'>Pick your bundle!!</h3>
                    {
                        servicePlans.map(plan => {
                            return (
                                <div className="div">
                                    <div className="row bundle-card">
                                        <div className="col-8">
                                            <p><b>{plan.name}</b></p>
                                        </div>
                                        <div className="col-3 text-right">
                                            <p className='px-md-2'><b>৳{plan.price}/-</b></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    );
};

export default OurBundle;