import React from 'react'
import './about.css'
import aboutusImg from '../../assests/img/aboutus.png'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import OurAim from './OurAim'
import AmazingFacts from './AmazingFacts'
const Index = () => {
    return (
        <section className='aboutUsSection'>
            <div className="container">
                <div className="row">
                    <div className="aboutUsTitle">
                        <div>
                            <h2 className='text-start'>About Us</h2>
                            <p className='subHeading'>    Empowering Your Business with Innovative, Cost-Effective Solutions</p>
                        </div>
                    </div>

                    <div className="col-lg-5 order-lg-2">
                        <img src={aboutusImg} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-7 order-lg-1">
                        <ul>
                            <li>
                                <RiArrowRightDoubleLine /> <b>Founded in 2022 : </b> IdeauxTech  is a cutting-edge software development company, committed to transforming businesses through innovative, custom software solutions.

                            </li>
                            <li>
                                <RiArrowRightDoubleLine />   <b>   Innovative & Custom Solutions : </b> We leverage the latest technologies to craft tailor-made solutions that address your business’s unique challenges and goals.

                            </li>
                            <li>
                                <RiArrowRightDoubleLine />   <b> Results-Driven Approach : </b> We deliver software solutions that go beyond expectations, with a focus on creativity, boundary-pushing design, and forward-thinking strategies.

                            </li>
                            <li>
                                <RiArrowRightDoubleLine />   <b> Professionalism & Adaptability :</b> Our team is known for professionalism, adaptability, and a collaborative mindset, ensuring every solution fits your needs perfectly.

                            </li>
                            <li>
                                <RiArrowRightDoubleLine />   <b>   Exceptional Value & Flexibility :</b> With a flexible pricing model, we provide the right solution within your budget while ensuring exceptional value and expert support at every step of your technological journey.

                            </li>
                        </ul>
                    </div>
                </div>
                <OurAim />
                <AmazingFacts />
            </div>

        </section>
    )
}

export default Index
