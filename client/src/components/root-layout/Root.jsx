import { Link, Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Sightbar from '../sightbar/Sightbar'
import {FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser  } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { BsChat } from "react-icons/bs";

const Root = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <div className='fixed bottom-0 left-0 w-full flex items-center justify-between shadow-md bg-gray-900 items-center sm:hidden text-white py-1 pr-3'>
        <div>
          <Sightbar/>
          <span>Category</span>
        </div>
        <Link>
          <BsChat className='text-2xl mx-auto'/>
          <span>Message</span>
        </Link>
        <Link to='/'>
          <FaHome className='text-2xl mx-auto' />
          <span>Home</span>
        </Link>
        <Link to='/contact' >
          <IoMdCall className='text-2xl mx-auto' />
          <span>Contact</span>
        </Link>
        <Link to='/login'>
          <FaRegCircleUser className='text-2xl mx-auto'/>
          <span>User</span>
        </Link>
      </div>
    </div>
  )
}

export default Root