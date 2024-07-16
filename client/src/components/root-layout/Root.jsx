import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Sightbar from '../sightbar/Sightbar'

const Root = () => {
  return (
    <div className=''>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Root