import Heading from '../Heading'
import { FiSearch,FiShoppingCart  } from "react-icons/fi";
import {Link} from 'react-router-dom'
import { FaRegCircleUser  } from "react-icons/fa6";
import {FaRegHeart } from "react-icons/fa";
import Menubar from './Menubar';
import { useSelector } from 'react-redux';
import Image from '../image/Image';
import Paragraph from '../Paragraph';

const Navbar = () => {

  let userInfo = useSelector(state => state.user.value)

  return (
    <nav className='pt-5 pb-3 bg-black text-white fixed z-10 w-full top-0 left-0 shadow-xl'>
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="order-1 col-span-6 sm:col-span-3">
             <Link to="/"> <Heading className='inline-block' tag="h1" text="Ecommerce"/></Link>
            </div>
            <div className="order-3 sm:order-2 col-span-12 sm:col-span-6 relative">
              <input className='text-base md:text-xl w-full ring-2 ring-primary py-2 px-5 text-black rounded-full focus-visible:ring-offset-transparent' placeholder='Product Search' type="text" />
              <div className="absolute bottom-1/2 translate-y-1/2 cursor-pointer right-0 text-2xl bg-primary h-full w-14 flex justify-center items-center rounded-e-full">
                <FiSearch/>
              </div>
            </div>
            <div className="order-2 sm:order-3 col-span-6 sm:col-span-3 flex gap-3 md:gap-5 text-3xl justify-end  items-center">
              <Link className=''><FaRegHeart/></Link>
              <Link className=''><FiShoppingCart/></Link>
              <div className='relative group'>
                {userInfo.image 
                ?<div className='w-8 h-8 ring ring-white rounded-full overflow-hidden cursor-pointer'>
                    <Image src={userInfo.image} alt='profile'/>
                  </div>
                :<Link className='' to='/login'><FaRegCircleUser /></Link>
                }
                <div className='hidden hover:block group-hover:block absolute top-12 right-0 bg-white text-black shadow-md z-50 p-2 w-48 rounded-md'>
                  <div className='absolute top-[-5px] rotate-45 right-2 w-5 h-5 bg-white'></div>
                  <Paragraph className='text-base mb-2 hover:text-secoundary duration-100 cursor-pointer' text='Profile'/>
                  <button className='ring-1 ring-secoundary text-secoundary px-3 py-1 text-base rounded-md'>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden sm:block'>
          <Menubar/>
        </div>
    </nav>
  )
}

export default Navbar