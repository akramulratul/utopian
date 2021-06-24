import React from 'react';
import NavBars from '../../NavBars/NavBars';
import HomeFooter from '../HomeFooter/HomeFooter';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <NavBars />
            <section class="main-contact-background">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-8">
                            <div class="contact-form text-center">
                                <h1 class="pt-3">Get A Free Quote</h1>
                                <p class="need-perfect-width">
                                    We look forward to hearing from you. Email us to learn more
                                    about our firm and capabilities.
                                </p>
                                <form action="">
                                    <div class="input-div">
                                        <input type="text" name="" id="" placeholder="First Name" />
                                        <input type="text" name="" id="" placeholder="Last Name" />
                                    </div>
                                    <br />
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        class="email"
                                        placeholder="Email"
                                    />
                                    <br />
                                    <br />
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="5"
                                        placeholder="Message"
                                        class="text-input"
                                    ></textarea>
                                    <br />

                                    <input
                                        type="submit"
                                        value="Send Message"
                                        class="form-submit-button"
                                    />

                                    {/* <button class="form-submit-button">submit</button> */}
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-2"></div>
                    </div>
                </div>
            </section>
            <HomeFooter />
        </div>
    );
};

export default Contact;