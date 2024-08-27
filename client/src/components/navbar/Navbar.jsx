import Heading from '../Heading'
import { FiSearch,FiShoppingCart  } from "react-icons/fi";
import {Link, useNavigate} from 'react-router-dom'
import {FaAngleDown,FaRegCircleUser  } from "react-icons/fa6";
import {FaRegHeart } from "react-icons/fa";
import Menubar from './Menubar';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../image/Image';
import Paragraph from '../Paragraph';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'keep-react';
import { activeUser } from '../../features/user/userSlice';

const Navbar = () => {
  let [dropDown,setDropdown]= useState(false)
  const ref =useRef()
  let userInfo = useSelector(state => state.user.value)
  let navigate = useNavigate()
  let dispatch = useDispatch()

  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      if(ref.current.contains(e.target)){
        setDropdown(true)
      }else{
        setDropdown(false)
      }
    })
  },[])

  const handleLogout =()=>{
    console.log('logout');
    
    dispatch(activeUser(null));
        // localStorage.removeItem('user')
        navigate('/login')
  }


  return (
    <nav className='pt-3 pb-2 bg-black text-white fixed z-50 w-full top-0 left-0 shadow-xl'>
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="order-1 col-span-6 sm:col-span-3">
             <Link to="/"> <Heading className='inline-block' tag="h1" text="Ecommerce"/></Link>
            </div>
            <div className="order-3 sm:order-2 col-span-12 sm:col-span-6 relative">
              <input className='text-base md:text-xl w-full ring-2 ring-primary py-2 px-5 text-black rounded-full focus-visible:ring-offset-transparent' placeholder='Product Search' type="text" />
              <div className="absolute bottom-1/2 translate-y-1/2 cursor-pointer right-0 text-2xl bg-primary h-full w-14 flex justify-center items-center rounded-e-full">
                <FiSearch className='font-bold'/>
              </div>
            </div>
            <div className="order-2 sm:order-3 col-span-6 sm:col-span-3 flex gap-3 md:gap-5 text-3xl justify-end  items-center">
              <div className='relative'>
                <span className='w-6 h-6 rounded-full bg-primary text-white flex justify-center items-center absolute -top-4 right-0 text-base'>10</span>
                <Link className=''><FaRegHeart/></Link>
              </div>
              <div className='relative'>
                <span className='w-6 h-6 rounded-full bg-primary text-white flex justify-center items-center absolute -top-4 right-0 text-base'>10</span>
                <Link className=''><FiShoppingCart/></Link>
              </div>
              {userInfo 
                ?<div ref={ref} className='flex items-center gap-2 relative cursor-pointer'>
                <div className='w-8 h-8 ring-2 ring-primary rounded-full overflow-hidden'>
                  <Image src={userInfo.image}/>
                </div>
                {userInfo && <Paragraph className='text-base' text={userInfo.name}/>}
                <FaAngleDown className="text-base"/>
                {dropDown &&
                  <div className="absolute top-12 rounded-md right-0 p-2 w-40 bg-white text-black">
                    <div className="w-5 h-5 absolute bg-white -top-2 right-4 rotate-45"></div>
                    <Link to='/profile'><Paragraph className='border-b-2 pb-2 my-2 border-primary' text='Your Profile'/></Link>
                    <Link to='dashboard'><Paragraph className='border-b-2 pb-2 border-primary' text='Dashboard'/></Link>
                    <Button onClick={handleLogout} className='bg-secoundary py-2 px-4 mt-4'> Logout</Button>
                    
                  </div>
                }
              </div>
                :<Button className='py-2 ring-1 ring-primary hover:bg-primary duration-100' onClick={()=>navigate('/login')}>Login</Button>
                }
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