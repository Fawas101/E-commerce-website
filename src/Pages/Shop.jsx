import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Popular/>
    <Offers/>
    <NewCollection/>
    <NewsLetter/>
    <Footer/>
    </div>
  )
}

export default Shop
