import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider4 from '../../assets/slider4.jpg'
import slider5 from '../../assets/slider8.jpg'
import slider6 from '../../assets/slider6.jpg'
import slider7 from '../../assets/slider7.jpg'
import Image from '../image/Image';
import { useState } from "react";
const banerImage = [slider1,slider6,slider7,slider4,slider5,slider3,slider2]

const Banner = () => {
  let [banner, setBanner] = useState(banerImage);
  let [dotActive, setDotActive] = useState(0);
    let settings = {
        dots: true,
        beforeChange: (prev, next) => {
          setDotActive(next);
        },
        arrows:false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              dots:false
            }
          }
        ],
        appendDots: dots => (
          <div
            style={{
              position: 'absolute',
              bottom: '7%',
              left: '50%',
              fontSize:'0px',
              transform: 'translateX(-50%)',
              color:'green'
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
          style={
              i === dotActive 
              ? {
                width: "0px",
                padding:"7px",
                borderRadius:'50%',
                background:'red',
                boxShadow:'5px 0px 5px #222'
            } 
            : {
              width: "0px",
              padding:"7px",
              borderRadius:'50%',
              background:'#fff',
              boxShadow:'5px 0px 5px #222'
            }}
          >
          </div>
        ),
       
      };
  return (
    <Slider {...settings}>
      {banner.map((item,index)=>(
        <div key={index}>
        <Image className="h-80 md:h-[500px]" src={item} alt='banner-img'/>
        </div>
      ))}
  </Slider>
  )
}

export default Banner