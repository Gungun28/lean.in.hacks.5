import React from 'react'
import Hero from '../../components/hero/Hero'
import Seperator from '../../components/seperator/Seperator'
import Main from '../../components/main/Main'
import './Home.scss'
import About from '../../components/info/Info'
import Navbar from '../../components/navbar/Navbar'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
        <Hero></Hero>
        <Seperator></Seperator>
        <Main></Main>
        <About></About>
    </div>
  )
}

export default Home