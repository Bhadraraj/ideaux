import React from 'react'
import { Routes as MainRoute, Route } from 'react-router-dom';
import NavBar from '../components/navbar';
import Home from '../components/home'
import ContactUs from '../components/contactus'
import Footer from '../components/footer'
import AboutUs from '../components/about'
import Career from '../components/careers'
const Routes = () => {
    return (
        <div>
            <NavBar />
            <MainRoute>

                <Route path='/' element={<Home />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/about-us' element={  <AboutUs /> } />
                <Route path='/career' element={  <Career /> } />

            </MainRoute>
            <Footer />
        </div>
    )
}

export default Routes
