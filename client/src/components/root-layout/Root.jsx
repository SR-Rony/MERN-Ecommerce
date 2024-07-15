import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Sightbar from '../sightbar/Sightbar'

const Root = () => {
  return (
    <div className='grid grid-cols-12 '>
      <div className="hidden lg:block lg:col-span-2 relative">
      <Sightbar/>
      </div>
      <div className="col-span-12 lg:col-span-10">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  )
}

export default Root