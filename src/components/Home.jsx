import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar' 
import ScrollToTop from './ScrollToTop'
import Services from './Services'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'
import Products from './Products'
import Footer from "./Footer"
const Home = () => {
  return (
    <div>
        <ScrollToTop/>
        <Navbar/>
        <Hero/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home
