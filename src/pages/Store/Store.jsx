import React from 'react';
import About from '../../Components/About/About';
import Header from '../../Components/Header/Header';
import Sample from '../../Components/Sample/Sample';
import Ratings from '../../Components/Ratings/Ratings';

export default function Store() {
  return (
    <div style={{backgroundColor:'#fbf1d0'}}>
        <Header />
        <About />
        <Sample />  
        <Ratings />     
    </div>
  );
}
