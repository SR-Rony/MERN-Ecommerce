import Image from '../image/Image'
import img from '../../assets/product/product.jpg'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import {FiShoppingCart  } from "react-icons/fi";
import Product from '../Product/Product';
import { useState } from 'react';


const SingleProduct = () => {
    const [count,setCount] = useState(0)

  return (
    <div className='mt-10 py-10'>
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6">
               <div className='p-4 ring-2 ring-secoundary'>
                <Image src={img} alt='img'/>
               </div>
               <div className='flex mt-5 gap-4 cursor-pointer'>
                <div className='w-28 h-28 ring-1 ring-secoundary p-2'>
                    <Image src={img} alt='img'/>
                </div>
                <div className='w-28 h-28 ring-1 ring-secoundary p-2'>
                    <Image src={img} alt='img'/>
                </div>
                <div className='w-28 h-28 ring-1 ring-secoundary p-2'>
                    <Image src={img} alt='img'/>
                </div>
               </div>
            </div>
            <div className="col-span-12 md:col-span-6 px-7">
                <Heading tag='h2' text={`Women's shoes 2024 new mesh breathable dad shoes ins fashion couple sports casual shoes men and women same style wholesale`}/>
                <Heading className='text-5xl my-5 text-primary border-b-2 border-primary pb-4' tag='h2' text='$100'/>
                <Paragraph className='mt-5' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. '/>
                <div className='mt-10 flex gap-5'>
                    <div className='flex gap-4 items-center ring-1 rounded-full ring-secoundary overflow-hidden'>
                        {count==0
                        ?<button className=' bg-secoundary ring-1 py-1 px-4 text-2xl font-bold ring-secoundary text-white'>-</button>
                        :<button onClick={(()=>setCount(count-1))} className=' ring-1 py-1 px-4 text-2xl font-bold ring-secoundary'>-</button>
                        }
                        <span className='text-2xl'>{count}</span>
                        <button onClick={(()=>setCount(count+1))} className='ring-1 py-1 px-4 text-2xl font-bold ring-secoundary'>+</button>
                    </div>
                    <button className='p-2 bg-primary font-bold rounded-sm flex items-center gap-2 '><FiShoppingCart/> ADD TO CART</button>
                </div>
            </div>
        </div>
        <div className='mt-7'>
            <Heading className='pb-2 border-b-2 border-primary inline-block' tag='h2' text='Similar Products'/>
            <div className='grid grid-cols-12 mt-7 gap-2'>
                <div className='col-span-6 md:col-span-4 lg:col-span-2'>
                    <Product/>
                </div>
                <div className='col-span-6 md:col-span-4 lg:col-span-2'>
                    <Product/>
                </div>
                <div className='col-span-6 md:col-span-4 lg:col-span-2'>
                    <Product/>
                </div>
                <div className='col-span-6 md:col-span-4 lg:col-span-2'>
                    <Product/>
                </div>
                <div className='col-span-6 md:col-span-4 lg:col-span-2'>
                    <Product/>
                </div>
                <div className='col-span-6 md:col-span-4 lg:col-span-2'>
                    <Product/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct