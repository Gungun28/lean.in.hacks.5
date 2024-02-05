import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Seperator from '../../components/seperator/Seperator'
import Main from '../../components/main/Main'
import './Home.scss'
import Footer from '../../components/footer/Footer'
import About from '../../components/about/About'
const Home = () => {
  return (
    <div className='home'>
        <Navbar></Navbar>
        <Hero></Hero>
        <Seperator></Seperator>
        <Main></Main>
        <About></About>
        <Footer></Footer>
    </div>
  )
}

export default Home