import React from 'react';
import './Sample.css';

export default function Sample() {
  return (
    <div className='main-containers'>
        <h1 style={{marginLeft: 410 , color:'#6c6c03'}}> Sample Products </h1>
        <div className='container  second-containers' >
            <div className='card link-containers'>
                <img src='https://blingvine.com/cdn/shop/products/saahiba-crystal-jhumka-blingvine-188862_1000x.jpg?v=1665386105' alt='...'/>
                <h4 style={{marginTop:15, marginLeft:60, justifyContent:'center'}}>Diamond Earings</h4>
            </div>

            <div className='card link-containers'>
                <img src='https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw8e61dbf6/images/blog-images/Drop-Earrings-With-Pearls.jpg' alt='...'/>
                <h4 style={{marginTop:15, marginLeft:60, justifyContent:'center'}}>Pearl Earings</h4>
            </div>

            <div className='card link-containers'>
                <img src='https://i.etsystatic.com/14348866/r/il/29b84d/1851177274/il_570xN.1851177274_43it.jpg' alt='...'/>
                <h4 style={{marginTop:15, marginLeft:60, justifyContent:'center'}}>Afghani Earings</h4>
            </div>
        </div>
    </div>
  );
}
