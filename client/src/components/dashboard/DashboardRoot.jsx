import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const DashboardRoot = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default DashboardRoot