import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from '../../assets/slider.jpg'
import Image from '../image/Image';
import { useState } from "react";

const Banner = () => {
  let [dotActive, setDotActive] = useState(0);
    let settings = {
        dots: true,
        beforeChange: (prev, next) => {
          setDotActive(next);
        },
        arrows:false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
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


        // customPaging: () => (
        //   <div
        //     style={{
        //       width: "0px",
        //       padding:"7px",
        //       borderRadius:'50%',
        //       background:'transparent',
        //       border: "1px blue solid"
              
        //     }}
        //   >
        //   </div>
        // ),



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