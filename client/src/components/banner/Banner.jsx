import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from '../../assets/slider.jpg'
import Image from '../image/Image';

const Banner = () => {
    var settings = {
        dots: true,
        arrow:true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <Slider {...settings}>
    <div>
        <Image className="h-96" src={slider} alt='banner-img'/>
    </div>
    <div>
    <Image className="h-96" src={slider} alt='banner-img'/>
    </div>
    <div>
    <Image className="h-96" src={slider} alt='banner-img'/>
    </div>
    <div>
    <Image className="h-96" src={slider} alt='banner-img'/>
    </div>
    <div>
    <Image className="h-96" src={slider} alt='banner-img'/>
    </div>
  </Slider>
  )
}

export default Banner