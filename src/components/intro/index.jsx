import React from 'react'
import introImg from '../../assests/img/intro.png'
import './intro.css'
const index = () => {
    return (
        <section className="introSection">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h3 className='introMainContent'>
                                At  <span className="cmpyName">
                                    IDEAUX TECH</span> , we craft cutting-edge software solutions to propel your business to new heights.
                            </h3>
                            <p className='introBtm'>An online presence isn't just an option - it's the gateway to business growth and endless opportunities.   </p>
                            <p>Start your journey with us today!</p>
                        </div>
                    </div>
                    <div className="col-md-6"><img src={introImg} className='img-fluid' alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default index
