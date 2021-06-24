import React from 'react';
import './Services.css'
import sign from '../../../image/landingPage/services/sing.png';
import hardwork from '../../../image/landingPage/services/hardwork.png';
import box from '../../../image/landingPage/services/box.png';
import writing from '../../../image/landingPage/services/writing.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import HomeFooter from '../HomeFooter/HomeFooter';
import NavBars from '../../NavBars/NavBars';


const Services = () => {
    return (
        <div>
            <NavBars />
            <section class="main-service-background">
                <div class="container">
                    <div class="plan-caption text-center">
                        <h2>We Plan For Your Future</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim unde, voluptatibus suscipit iste sequi ab .</p>
                    </div>
                    <div class="row mt-5 pt-2">
                        <div class="col-lg-4 mb-4">
                            <div class="card" >
                                <img src={box} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title same-text">E-Commerce</h5>
                                    <p class="card-text same-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim unde, voluptatibus suscipit iste sequi ab .</p>
                                    <button>Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card" >
                                <img src={hardwork} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title same-text">Brick Factory</h5>
                                    <p class="card-text same-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim unde, voluptatibus suscipit iste sequi ab .</p>
                                    <button>Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card" >
                                <img src={writing} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title same-text">Real Estate</h5>
                                    <p class="card-text same-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim unde, voluptatibus suscipit iste sequi ab .</p>
                                    <button>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >

            {/* < !-- ///services-section --> */}
            <div div class="services-section py-5" >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 py-4">
                            <div class="services-captions">
                                <h2>Our Services</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nesciunt cupiditate et tempora eos deleniti aliquid.</p>
                            </div>
                            <div class="services-list mt-5">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="services-items pb-5">
                                            <ul>
                                                <li>
                                                    <span class="space"> <FontAwesomeIcon icon={faCheck} /> </span>
                                                    <small>Air Ticket</small>
                                                </li>
                                                <li>
                                                    <span class="space"> <FontAwesomeIcon icon={faCheck} /> </span>
                                                    <small>It management</small>
                                                </li>
                                                <li>
                                                    <span class="space"> <FontAwesomeIcon icon={faCheck} /> </span>
                                                    <small>Export Import</small>
                                                </li>
                                                <li>
                                                    <span class="space"> <FontAwesomeIcon icon={faCheck} /> </span>
                                                    <small>Multipurpose</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 ">
                                        <div class="services-items pb-5">
                                            <ul>
                                                <li>
                                                    <span class="space"> <FontAwesomeIcon icon={faCheck} /> </span>
                                                    <small>Air Ticket</small>
                                                </li>
                                                <li>
                                                    <span class="space"> <FontAwesomeIcon icon={faCheck} /> </span>
                                                    <small>It management</small>
                                                </li>
                                                <li>
                                                    <span class="space"> <FontAwesomeIcon icon={faCheck} /> </span>
                                                    <small>Export Import</small>
                                                </li>
                                                <li>
                                                    <span class="space"> <FontAwesomeIcon icon={faCheck} /> </span>
                                                    <small>Multipurpose</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="services-image">
                                <img src={sign} alt="" />
                            </div>
                        </div>
                    </div>
                </div >
            </div>


            <HomeFooter />

        </div>

    );
};

export default Services;