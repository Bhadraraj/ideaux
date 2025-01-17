/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import CompanyLogo from '../../assests/img/IdeauxLogo.png';
import { Link } from 'react-router-dom'

import './footer.css'
const Index = () => {
    return (
        <footer className='footerSection'>
            <div className="container">
                <div className="row">
                    {/* <div class="col-md-4">
                        <Link className="navbar-brand logo mb-2" to="/" >
                            <img src={CompanyLogo} alt="Company Logo" width="80%" />
                        </Link>
                        <p className='mt-3 footer-slogan'>
                            Empowering Businesses, Shaping the Future. At IdeauxTech, we craft cutting-edge IT solutions that drive innovation and growth. Your success is our mission.
                        </p>
                    </div> */}

                    <div className="col-md-5">
                        <h5>Address</h5>
                        <ul className="footer-contact">
                            <li >
                                IdeauxTech Pvt.Ltd
                                <br />
                                <Link data-hover="IdeauxTech Pvt Ltd" title="IdeauxTech Pvt Ltd" to='https://www.google.com/maps/place/IdeauxTech+Pvt.Ltd/@8.173246,77.4243045,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04f16fa31f283d:0x7833ae492b83b382!8m2!3d8.173246!4d77.4268794!16s%2Fg%2F11scx72f4v?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D'>
                                    309, Rajakkamangalam Rd, Ramanputhur,
                                    Simon Nagar, Nagercoil,
                                    Tamil Nadu 629002</Link>



                            </li>
                            <li>
                                <strong>Phone:</strong> +1 (123) 456-7890
                            </li>
                            <li>
                                <strong>Email:</strong> info@companyname.com
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="footer-links">
                            <li>
                                <a href="/about-us" data-hover="bout Us" title="bout Us ">About Us</a>
                            </li>
                            <li>
                                <a href="/services" data-hover="Services" title="Services ">Services</a>
                            </li>
                            <li>
                                <a href="/portfolio" data-hover="Portfolio" title="Portfolio ">Portfolio</a>
                            </li>
                            <li>
                                <a href="/contact-us" data-hover="Contact Us" title="Contact Us">Contact Us</a>
                            </li>
                            <li>
                                <a href="/privacy-policy" data-hover="Privacy Policy" title="Privacy Policy">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>


                    <div className="col-md-3">
                        <h5>Products</h5>
                        <ul class="footer_links">
                            <li>Hospital Management System</li>
                            <li>Blling Software</li>
                            <li>Resturant Software</li>
                        </ul>
                    </div>

                    <div className="col-12 ">
                        <p className="mt-3 text-center">© 2025 IdeauxTech Pvt Ltd. All Rights Reserved.</p>

                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Index
