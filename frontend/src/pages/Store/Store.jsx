import React from 'react';
import About from '../../components/About/About';
import Header from '../../components/Header/Header';
import Sample from '../../components/Sample/Sample';
import Ratings from '../../components/Ratings/Ratings';
// import Footer from '../../Components/footer/Footer';
import { useLocation ,Link} from 'react-router-dom';
export default function Store() {
  let {state}=useLocation()
  const list=state.list;
  return (
    <div style={{backgroundColor:'#fbf1d0'}}>
        <Header name={list.businessname}/>
        <About about={list.aboutBusiness} logo={list.businessLogo} profile={list.BusinessProfile}/>
        <Sample sample={list.productImages}/>  
        <Ratings rating={list.rating}/>   
        {/* <Footer />   */}
    </div>
  );
}
