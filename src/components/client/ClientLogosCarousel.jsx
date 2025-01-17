import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Benfield from '../../assests/img/clientLogos/Benfield.png';
import '../../styles/clientLogoCarosole.css'

function MultipleRows() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 4,
        speed: 500,
        rows: 1,
        slidesPerRow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesPerRow: 1,
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesPerRow: 1,
                    centerPadding: "40px",
                },
            },
           
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerPadding: "30px",
                },
            },
        ],
    };

    const imageUrls = [
        Benfield,
        Benfield,
        Benfield,
        Benfield,
        Benfield,
        Benfield,
        Benfield,
        Benfield,


    ];

    return (
        <section className="clientLogoCarosole">
            <div className="container">


                <div className="row">
                    <div className="col-12">

                        <div className="slider-container">
                            <Slider {...settings}>
                                {imageUrls.map((url, index) => (
                                    <div key={index} className="clientLogoOuter">
                                        <img src={url} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "auto" }} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MultipleRows;
