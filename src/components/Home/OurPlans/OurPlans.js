import React from 'react';
import brick from '../../../image/brickFactory.jpg'
import eCommerce from '../../../image/ecommerce.png'
import realEstate from '../../../image/realEstate.jpg'
import PlanCard from './PlanCard';

const planData = [
    {
        title: 'E-Commerce',
        description: '',
        img: eCommerce
    },
    {
        title: 'Brick Factory',
        description: '',
        img: brick
    },
    {
        title: 'Real Estate',
        description: '',
        img: realEstate
    }
]
const OurPlans = () => {
    return (
        <section className='bg-light px-5 pb-3'>
            <div className="text-center pt-3 d-flex flex-column align-items-center">
                <h4 className='text-brand pt-5 pb-3'><b>OUR PLANS</b></h4>
                <h1 className='my-3'>We plan For your future</h1>
                <p className='mb-5 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, saepe? Officiis nostrum saepe numquam nihil nemo pariatur soluta dignissimos error.</p>
            </div>

            <div className='d-flex justify-content-center'>
                <div className="row d-flex justify-content-center ">
                    {
                        planData.map(plan => <PlanCard plan={plan} />)
                    }
                </div>

            </div>

        </section>
    );
};

export default OurPlans;