import React from 'react'
import ClientLogosCarousel from './ClientLogosCarousel'

const Index = () => {
  return (
    <section className="ourClients">
      <div className="container">
        <div className="row d-flex justify-content-center">

          <h2 className='text-center'>Our Trusted Clients</h2>
          <div className="col-md-8">  <p className='text-center'>
            We take pride in building long-lasting relationships with leading businesses across various industries. Our clients trust us to deliver innovative solutions that drive growth, efficiency, and success. Here are some of the brands we’ve had the pleasure of partnering with:


          </p>
          </div>
          <ClientLogosCarousel />
        </div>
      </div>

    </section >
  )
}

export default Index
