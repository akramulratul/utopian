import React from 'react';
import homeImage from '../../../image/home2.png'
const HomeMain = () => {
    return (
        <section className='px-lg-5'>
            <div style={{ marginTop: '10rem' }} className='row'>
                <div className="col-lg-5 text-left d-flex align-items-center">
                    <div className="left-text p-5">
                        <h1>Complicated life turns into a <br /> simpler profit here.</h1>
                        <p className='text-secondary py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, illum, maxime repellat delectus iste saepe quam rerum cum, assumenda ipsa ab quisquam necessitatibus! At, voluptate.</p>
                        <button className='btn btn-lg btn-primary'>Learn More</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img className='w-100' src={homeImage} alt="" />
                </div>
            </div>


        </section>
    );
};

export default HomeMain;