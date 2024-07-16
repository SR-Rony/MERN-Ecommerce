import Sightbar from '../sightbar/Sightbar'
import List from '../List'
import { Link } from 'react-router-dom'
import ListItem from '../ListItem'
import { CiDiscount1 } from "react-icons/ci";
import Paragraph from '../Paragraph';
import { useState } from 'react';

const menuList =['HOME','SPECIAL','SITE MAP','RETURN','BRAND','BLOG','CONTACT']

const Menubar = () => {
    const [menu,setMenu]=useState(menuList)
  return (
    <section>
        <div className="container mx-auto px-2">
            <div className='mt-3 bg-gray-900 sm:grid grid-cols-12 py-1 items-center'>
                <div className='col-span-6 lg:col-span-2'>
                    <Sightbar/>
                </div>
                <div className="hidden  lg:col-span-8 lg:flex text-base md:text-xl justify-center items-center gap-4 lg:gap-5">
                {menu.map((item,index)=>(
                <List key={index}>
                    <Link className='hover:text-primary duration-100' key={index}>
                    <ListItem text={item}/>
                    </Link>
                </List>
                ))}
                </div>
                <div className="hidden sm:col-span-6 lg:col-span-2 sm:flex justify-end">
                <div className='flex gap-1 items-center text-primary cursor-pointer ring-2 ring-primary py-1 px-2 rounded-md'>
                    <CiDiscount1 className='text-2xl'/>
                    <Paragraph className='text-xl' text="Special Offer!"/>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menubar