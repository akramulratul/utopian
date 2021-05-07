import React from 'react';
import NavBars from '../../NavBars/NavBars';
import OurBundle from '../OurBundles/OurBundle';
import OurPlans from '../OurPlans/OurPlans';
import './Home.css'
import HomeMain from './HomeMain';

const Home = () => {
    return (
        <div className='home-main'>

            <div className="home-body">
                <NavBars />
                <HomeMain />
                <OurPlans />
                <OurBundle />
            </div>

        </div>
    );
};

export default Home;