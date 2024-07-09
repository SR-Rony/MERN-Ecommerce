import React from 'react'
import Heading from '../Heading'
import { FiSearch,FiShoppingCart  } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import Paragraph from '../Paragraph';
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { LiaAngleDownSolid } from "react-icons/lia";


const Navbar = () => {
  return (
    <nav className='pt-5 pb-3 bg-black text-white fixed z-50 w-full top-0 left-0 shadow-lg'>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="col-span-2 relative">
             <Link to="/"> <Heading tag="h1" text="Ecommerce"/></Link>
            </div>
            <div className="col-span-6 relative">
              <input className='text-xl w-full ring-4 ring-primary py-2 px-5 text-black rounded-full focus-visible:ring-offset-transparent' type="text" />
              <div className="absolute bottom-1/2 translate-y-1/2 cursor-pointer right-0 text-2xl bg-primary h-full w-14 flex justify-center items-center rounded-e-full">
                <FiSearch/>
              </div>
            </div>
            <div className="col-span-4 flex justify-end  items-center">
              <div className='flex gap-2 items-center'>
                <div className='flex gap-1 items-center cursor-pointer hover:text-primary'>
                  <CiGlobe className='text-2xl'/>
                  <Paragraph className="text-xl" text='En'/>
                  <LiaAngleDownSolid className='text-xl'/>
                </div>
                <Link to="Login" className='flex gap-2 items-center hover:ring-2 ring-primary rounded-full py-2 px-4 duration-100'>
                  <FaRegUser/>
                  <Paragraph className='text-xl' text="Login"/>
                </Link>
                |<Link to="singup"><Paragraph className='text-xl hover:ring-2 ring-primary rounded-full py-2 px-4 duration-100' text="SingUp"/></Link>
                <Link to='cart' className='flex gap-1 items-center hover:text-primary text-3xl ml-5'>
                  <FiShoppingCart />
                  <Paragraph text='Cart'/>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center mt-3'>
            <div className='gap-2 items-center py-2 px-5 bg-secoundary rounded-md inline-flex cursor-pointer'>
              <GiHamburgerMenu className=' text-2xl inline-block '/>
              <Paragraph className='inline-block text-xl' text="All Category" />
            </div>
            <Link className='flex items-center gap-1 px-3 py-2 ring-2 ring-secoundary rounded-md'>
              <BiSolidOffer className='text-3xl text-secoundary'/>
              <Paragraph className='text-xl' text="Spashal Offer"/>
            </Link>
          </div>
        </div>
    </nav>
  )
}

export default Navbar