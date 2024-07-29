import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import child from '../../assets/child.svg'
import mans from '../../assets/mens.svg'
import bag from '../../assets/handbag.svg'
import shoes from '../../assets/shoes.089eac13.svg'
import clothing from '../../assets/clothing.svg'
import Image from "../image/Image";
import Paragraph from "../Paragraph";
import { useState } from "react";
const imageArray = [mans,child,shoes,bag,clothing,mans,child,shoes,bag,clothing,mans,child,shoes,bag,clothing,]

const Category = () => {

  const [array, setArray]=useState(imageArray)

    const settings = {
        dots: false,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows:false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          }
        ]
      };


  return (
    <section className="mt-5">
        <div className="container mx-auto px-2 py-5 shadow-lg bg-white">
            <div className="slider-container flex-row justify-center">
        <Slider {...settings}>
          {array.map((item,index)=>(
              <div className=" text-center cursor-pointer ring-2 ring-secoundary" key={index}>
              <Image className='w-24 mx-auto' src={item}/>
              <Paragraph text='Mans Clothing'/>
          </div>
          ))}
        </Slider>
            </div>
        </div>
    </section>
  )
}

export default Category