import React from 'react'
import creativeImg from '../../assests/img/creative.svg'
const OurAim = () => {
  return (
    <section className="ourAimSection">
      <div className="container">
        <h2 className='text-center'>Our Aim</h2>
        <br />
        <br />
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="ourAimOuter">
              <div className="aimCardTopImg">
                <img src={creativeImg} alt="" />
              </div>
              <div className="ourAimOuterTitle">
                <h5>Creative &amp; Innovative</h5>

              </div>
              <div className="ourAimOuterBody">
                <p>   Building innovative software solutions to help clients stay top in the
                  business.</p>
              </div>
            </div>

          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ourAimOuter">
              <div className="aimCardTopImg">
                <img src={creativeImg} alt="" />
              </div>
              <div className="ourAimOuterTitle">
                <h5>100% Client Satisfaction</h5>

              </div>
              <div className="ourAimOuterBody">
                <p>  At every step of the project, we ensure client satisfaction as our
                  mantra.</p>
              </div>
            </div>

          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ourAimOuter">
              <div className="aimCardTopImg">
                <img src={creativeImg} alt="" />
              </div>
              <div className="ourAimOuterTitle">
                <h5>Quality First</h5>

              </div>
              <div className="ourAimOuterBody">
                <p>  Striving to offer the best standard solutions to align with our
                  clients' goals and dreams.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default OurAim
