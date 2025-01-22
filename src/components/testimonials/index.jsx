import React, { useRef } from 'react';
import '../../styles/swipper.css';
import 'swiper/css'; // Import Swiper's default CSS
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import { FaCircleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Import Autoplay, Pagination, and Navigation

import { FaArrowAltCircleLeft } from "react-icons/fa";
const Index = () => {
    const swiperRef = useRef(null); // Reference for Swiper instance

    const truncateTestimonial = (testimonial, wordLimit) => {
        const words = testimonial.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return testimonial;
    };

    const testimonialData = [
        {
            name: 'John Doe',
            role: 'CEO, Tech Innovations Ltd.',
            image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/P1.7.png',
            testimonial: truncateTestimonial('Working with Ideauxtech for our web development project has been an amazing experience. The team is incredibly professional, delivering a user-friendly and robust website that exceeded our expectations. Their attention to detail and quick turnaround was remarkable!', 30),
        },
        {
            name: 'Maria Smith',
            role: 'Marketing Head, Smart Enterprises',
            image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/P1.7.png',
            testimonial: truncateTestimonial('The mobile app developed by Ideauxtech helped us engage more users and streamline our services. The team was highly responsive, and their expertise in creating intuitive, scalable mobile applications was impressive. We saw a significant increase in user engagement.', 30),
        },
        {
            name: 'James Johnson',
            role: 'Product Manager, Ecom Solutions',
            image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/P1.7.png',
            testimonial: truncateTestimonial('Ideauxtech’s web development team helped us rebrand and revamp our website. The project was completed on time, with seamless communication throughout. They understood our vision perfectly and implemented the latest technologies to make our website modern and responsive.', 30),
        },
        {
            name: 'Sophia Lee',
            role: 'Lead Developer, WebWorld Ltd.',
            image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/P1.7.png',
            testimonial: truncateTestimonial('We collaborated with Ideauxtech on multiple app development projects. Their cross-platform mobile app development services were spot-on. They developed highly functional apps that were both intuitive and easy to use, leading to a great user experience.', 30),
        },
        {
            name: 'Ethan Brown',
            role: 'CTO, Digital Solutions',
            image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/P1.7.png',
            testimonial: truncateTestimonial('Ideauxtech delivered an outstanding app for our company. They understood our requirements and provided solutions that were both innovative and cost-effective. The final product was sleek, efficient, and very well-received by our clients.', 30),
        },
        {
            name: 'Olivia Wilson',
            role: 'Head of Operations, NextGen Tech',
            image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/P1.7.png',
            testimonial: truncateTestimonial('The Ideauxtech team did an excellent job with our web development needs. The process was seamless, from ideation to launch. They kept us updated throughout the development phase and delivered a product that was both feature-rich and visually appealing.', 30),
        },
    ];

    return (
        <section className="testimonial">
            <div className="container">
                <h2 className="text-center mb-0">Testimonial</h2>
                <p className="text-center subHeading mb-0">
                    Echoes of Excellence, Praise in Practice
                </p>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <div>
                            <button
                                className='btn btn-sm btn-primary me-2'
                                onClick={() => swiperRef.current.swiper.slidePrev()} // Navigate to previous slide
                            >
                         <FaArrowAltCircleLeft/>
                            </button>
                            <button
                                className='btn btn-sm btn-primary'
                                onClick={() => swiperRef.current.swiper.slideNext()} // Navigate to next slide
                            >
                                <FaCircleRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="responsive-container-block bg">
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                            450: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {testimonialData.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="responsive-container-block content">
                                    <p className="testimonialQuotes">“</p>
                                    <div className="row">
                                        <div className="col-12 d-flex">
                                            <img
                                                src={testimonial.image}
                                                alt="User"
                                                className="testimonialUserImg"
                                            />
                                            <div className="ps-2 pt-2">
                                                <p className="testimonialName mb-0 text-start">{testimonial.name}</p>
                                                <p className="testimonialUserDesign mb-0 text-start">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="textimonialCont pt-2 mb-0">
                                        {testimonial.testimonial}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Index;
