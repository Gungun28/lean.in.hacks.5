import React, { useEffect, useState } from 'react'
import Typewriter from "typewriter-effect";
import "./category.css"
import axios from 'axios';
import List from '../Lists/List';
const Category = ({type}) => {
    const purseTaglines = [
        "Carry Elegance, Embrace Style.",
        "Where Fashion Meets Function.",
        "Chic Choices, Endless Elegance.",
        "Your Style, Your Bag, Your Statement.",
        "Unveiling Trends, Unleashing Style.",
        "More Than a Purse – It's a Statement."
      ];
      
      const jewelryTaglines = [
        "Adorn Yourself with Timeless Elegance.",
        "Where Sparkle Meets Sophistication.",
        "Cherish Every Moment, Wear Every Memory.",
        "Your Style, Your Shine, Your Signature.",
        "Unveil Radiance, Embrace Brilliance.",
        "More Than Jewelry – It's an Expression."
      ];
      const phoneCaseTaglines = [
        "Guard Your Style with Trendy Cases.",
        "Smart Protection, Stylish Expression.",
        "Elevate Your Phone, Elevate Your Style.",
        "Dress Your Device in Fashion.",
        "Phone Cases as Unique as You Are.",
        "Where Protection Meets Personality."
      ];
      
      
    const[content,setContent]=useState([]);
    useEffect(()=>{
        const getall=async()=>{
            try{
                const res=await axios.get(`business/all?type=${type}`);
                setContent(res.data)
                console.log(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        getall()
    },[type])
    const getRandomTagline = () => {
        if(type=="purse")
            return purseTaglines[Math.floor(Math.random() * purseTaglines.length)];
        else if(type=="jewellery")
            return jewelryTaglines[Math.floor(Math.random() * jewelryTaglines.length)];
        else if(type=="phonecase")
            return  phoneCaseTaglines[Math.floor(Math.random() *phoneCaseTaglines.length)];
      };
  return (
    <>
    <div className="allcat">

    <div className="category">
        <p>

    <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .typeString(getRandomTagline())
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(getRandomTagline())
                    .start()
                    .pauseFor(1000)  // Add a pause between animations
                    .deleteAll()
                    .typeString(getRandomTagline())
                    .start({
                        loop: true,     // Set loop to true for infinite loop
                    });
                }} className="typewriter"
            />
        </p>
      </div>
      <div className="row">

      {content.map((list, index) => (
        <div key={index} className="col-md-6">
          <List list={list}/>
      </div>
          ))}
    </div>
  </div>
    </>
  )

}
export default Category
