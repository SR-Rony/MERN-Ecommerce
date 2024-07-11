import Heading from '../Heading'
import { FiSearch,FiShoppingCart  } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { FaRegCircleUser  } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className='py-5 bg-black text-white fixed z-50 w-full top-0 left-0 shadow-lg'>
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="order-1 col-span-6 md:col-span-3 relative">
             <Link to="/"> <Heading tag="h1" text="Ecommerce"/></Link>
            </div>
            <div className="order-3 md:order-2 col-span-12 md:col-span-6 relative">
              <input className='text-base md:text-xl w-full ring-4 ring-primary py-2 px-5 text-black rounded-full focus-visible:ring-offset-transparent' placeholder='Product Search' type="text" />
              <div className="absolute bottom-1/2 translate-y-1/2 cursor-pointer right-0 text-2xl bg-primary h-full w-14 flex justify-center items-center rounded-e-full">
                <FiSearch/>
              </div>
            </div>
            <div className="order-2 md:order-3 col-span-6 md:col-span-3 flex gap-3 md:gap-5 text-xl md:text-3xl justify-end  items-center">
              <Link className='hover:text-secoundary duration-100' to='/login'><FaRegCircleUser /></Link>
              <Link className='hover:text-secoundary duration-100'><FaRegHeart/></Link>
              <Link className='hover:text-secoundary duration-100'><FiShoppingCart/></Link>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar