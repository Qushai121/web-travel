import React from 'react'
import Slider from 'react-slick'
import { CustomerData } from '../assets/data/CustomerData'


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

const CardCustomer = () => {
    const settings = {
       
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
    <div className='my-16' >
    <Slider {...settings}>


        {CustomerData.map((CustomerDatas,i)=>(
            <div key={i}>
                <div className='mx-2 h-64 ' >
                   <div className='py-5 flex flex-col w-full rounded-lg bg-slate-700 items-center gap-8' >
                   <div>
                    <img src={CustomerDatas.profilPict} alt="" srcset="" className='w-10 h-10 mx-4 object-cover rounded-full'  />
                   </div>
                    <div className='flex flex-col justify-evenly' >
                        <p className='h-28 overflow-y-scroll scrollbar-hide break-words' >"{CustomerDatas.Comment}"<p className='flex justify-center break-words' >~{CustomerDatas.profil}</p></p>
                        <p className='text-center pb-2 ' >{CustomerDatas.Rating}</p>
                       
                    </div>
                   </div>
                </div>
            </div>
        ))}
    
    </Slider>
    </div>
  )
}

export default CardCustomer