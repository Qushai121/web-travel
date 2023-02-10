import React from 'react'
import Slider from "react-slick"; 
import ChoiceDatas from '../assets/data/ChoiseDatas.json'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}



const Choiceswipper = () => {
  const settings = {
      dots:true,
        infinite:true,
        autoplay:true,
        speed:1300,
        swipeToSlide:true,
        autoplaySpeed:1000,
        slidesToShow:3,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    
    };
  return (
    <div >

    <Slider {...settings} >
      
      
    
        {ChoiceDatas.map((ChoiceData,index)=>(

          <div key={index} >
          <div style={{backgroundImage:`url(${ChoiceData.foto})`}}  className=' h-52 bg-cover mx-auto lg:w-60 hover:scale-105 duration-500 rounded-lg' >
          </div>
          </div>
        ))}
         
    
    
    </Slider>
    </div>
  )
}

export default Choiceswipper