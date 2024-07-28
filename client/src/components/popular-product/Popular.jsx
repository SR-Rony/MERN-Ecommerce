import React from 'react'
import Heading from '../Heading'
import Product from '../Product/Product'

const Popular = () => {
  return (
    <div className='py-5 mt-5 shadow-lg bg-white'>
        <div className="container px-2 mx-auto">
            <Heading tag='h2' text='Popular Product'/>
            <div className="grid grid-cols-12 mt-5 gap-2">
                <div className="col-span-6 md:col-span-4 lg:col-span-2">
                    <Product/>
                </div>
                <div className="col-span-6 md:col-span-4 lg:col-span-2">
                    <Product/>
                </div>
                <div className="col-span-6 md:col-span-4 lg:col-span-2">
                    <Product/>
                </div>
                <div className="col-span-6 md:col-span-4 lg:col-span-2">
                    <Product/>
                </div>
                <div className="col-span-6 md:col-span-4 lg:col-span-2">
                    <Product/>
                </div>
                <div className="col-span-6 md:col-span-4 lg:col-span-2">
                    <Product/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popular