import Heading from '../Heading'
import Product from '../Product/Product'

const NewProduct = () => {
  return (
    <div className='mt-5'>
        <div className="container px-2 mx-auto py-5 shadow-lg bg-white">
            <Heading className='border-b-2 border-primary pb-2 inline-block' tag='h2' text='New Product'/>
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
        </div>
    </div>
  )
}

export default NewProduct