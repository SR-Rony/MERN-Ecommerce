import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { CiShoppingBasket, CiLock } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import Paragraph from '../Paragraph';
import Heading from '../Heading';
// import Paragraph from '../Paragraph';
// import Heading from '../Heading';
// import Image from '../Image/Image'
// import img2 from '../../assets/card2.png'

const Card = () => {
  const [quantity, setQuantity] = useState(1); // State for quantity


  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Prevent quantity from going below 1
  };


  return (
    <div className='ring-1 ring-text_primary p-5'>
      <div className='pb-5 border-b border-text_primary'>
        <Paragraph text='Total Price' />
        <div className='flex my-4'>
          <Heading tag='h2' className='font-bold text-4xl' text={`$ ${208.00 * quantity}`} /> {/* Update to show total based on quantity */}
          <span className='mt-5 ml-2'>(VAT included)</span>
        </div>
        <button className='bg-[#E8F4EB] text-[#58B06E] py-1 px-3 ring-1 ring-[#58B06E] mb-4'>In Stock</button>
        <p><span className='text-text_primary'>Estimated Delivery:</span> 9 jun - 17 jun</p>
        <p className='mt-2'><span className='text-text_primary'>Free Return:</span> 9 jun - 17 jun</p>
      </div>
      <div className="flex gap-4 mt-5 items-center mb-5">
        <Paragraph className='font-semibold text-xl' text='Quantity' />
        <div className='flex items-center py-2 px-4 ring-1 ring-text_primary gap-5 rounded-md'>
          <button onClick={decrementQuantity} className="cursor-pointer">
            <FaMinus />
          </button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity} className="cursor-pointer">
            <FaPlus />
          </button>
        </div>
      </div>
      <div className='flex justify-center items-center w-full rounded-md py-4 bg-primary gap-2 my-2 font-semibold text-xl cursor-pointer'>
        <CiShoppingBasket className='text-2xl' />
        <Paragraph text='Buy Now' />
      </div>
      <div className='flex justify-center items-center w-full rounded-md py-4 bg-black text-white gap-2 my-2 font-semibold text-xl cursor-pointer'>
        <IoCart className='text-2xl' />
        <Paragraph text='Add to Cart' />
      </div>
      <div className='flex items-center gap-2 justify-center my-4'>
        <CiLock />
        <Paragraph text='Secured Payment Guaranteed' />
      </div>
        {/* <div className="flex justify-center">
        <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
        <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
        <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
        <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
        <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
        <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
        <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
        </div> */}
    </div>
  );
}

export default Card;