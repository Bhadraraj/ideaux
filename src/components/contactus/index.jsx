/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import instagramLogo from '../../assests/img/instagramLogo.png'
const Index = () => {
    return (
        <footer className='contactUsSection'>
            <div className="container">

                <div className="card">
                    <div className="cardBody">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2935963989344!2d77.426935!3d8.173148399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f16fa31f283d%3A0x7833ae492b83b382!2sIdeauxTech%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1736662977692!5m2!1sen!2sin"
                            width={"100%"}
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        /></div>

                </div>


                <h2 className="text-center mb-0"> Let's Get in Touch!</h2>
                <p className="text-center subHeading">
                    Reach out, and let's create a universe of possibilities together!
                </p>

                <div className="row  mt-4">
                    <div className="col-lg-7 order-md-1">
                        <div className="connectMeRightSec">
                            <div className="row  g-3 mb-3">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Mobile number"
                                    />
                                </div>
                            </div>
                            <div className="row  g-3 mb-3">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Email Address"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                    />
                                </div>
                            </div>
                            <div className="row  g-3 mb-3">
                                <div className="col-12">
                                    {/* <input type="text" placeholder="Your Message"> */}
                                    <textarea
                                        name=""
                                        id=""
                                        cols={30}
                                        rows={10}
                                        placeholder="Your Message"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button className="sendMsg" type="button">
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 order-lg-1">
                        <div className="connectMeLeftSec">
                            <ul className="contact-details">
                                <li>
                                    <strong>Email : </strong> 20bhadri2001@gmail.com
                                </li>
                                <li>
                                    <strong>Phone : </strong> +91-7449143583
                                </li>
                                <li>
                                    <strong>Address : </strong> 123 Your Street, City, Country
                                </li>
                            </ul>
                            <p>
                                <b>Follow me on social media:</b>
                            </p>
                            <ul className="social-links">
                                {/* <li>
                                    <a
                                        href=""
                                        target="_blank"
                                    >
                                        <img src={linkedInLogo} alt="" />
                                    </a>
                                </li> */}
                                <li className='ms-2'>
                                    <a href="" target="_blank">
                                        <img src={instagramLogo} alt="" />
                                    </a>
                                </li>
                                <li className='ms-2'>
                                    <a href="" target="_blank">
                                        <img src={instagramLogo} alt="" />
                                    </a>
                                </li>
                                <li className='ms-2'>
                                    <a href="" target="_blank">
                                        <img src={instagramLogo} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
 
            </div>
        </footer>

    )
}

export default Index
