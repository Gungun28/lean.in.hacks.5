import './Store.css';
import About from '../../components/About/About';
import Header from '../../components/Header/Header';
import Sample from '../../components/Sample/Sample';
import Ratings from '../../components/Ratings/Ratings';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Store({user}) {
  const { state } = useLocation();
  const business = state.list
  
  return (
    <div style={{ backgroundColor: '#fbf1d0' }}>
      {business && (
        <>
          <Header name={business.businessname} />
          <About about={business.aboutBusiness} logo={business.businessLogo} profile={business.BusinessProfile} />
          <Sample sample={business.productImages} />
          <Ratings business={business} user={user}/>
        </>
      )}
    </div>
  );
}
