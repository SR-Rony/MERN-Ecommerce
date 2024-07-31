import { Link } from 'react-router-dom'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Product from '../Product/Product'

const AllProduct = () => {
  return (
    <div className='mt-5 '>
        <div className="container px-2 mx-auto shadow-lg bg-white py-5">
            <Heading className='border-b-2 border-primary pb-2 inline-block' tag='h2' text='Just For You'/>
            <div className="grid grid-cols-12 mt-7 gap-2">
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
            <div className="grid grid-cols-12 mt-7 gap-2">
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
            <div className='mt-5 text-center'><Paragraph className='py-2 px-5 ring-2 ring-secoundary text-center text-base inline-flex rounded-full cursor-pointer font-bold text-secoundary' text='LOAD MORE'/></div>
        </div>
    </div>
  )
}

export default AllProduct