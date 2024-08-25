import './App.css'
import { 
  createRoutesFromElements,
  createBrowserRouter,
  Route, RouterProvider 
} from 'react-router-dom'
import Root from './components/root-layout/Root';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Error from './pages/Error';
import Contact from './pages/Contact';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,} from 'react-toastify';
import Product from './pages/Product';
import Dashboard from './pages/Dashboard';
import DashboardRoot from './components/dashboard/DashboardRoot';
import Verify from './pages/Verify';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/verify/:token' element={<Verify/>}/>
        <Route path="/" element={<Root />}>
          <Route path='/' element={<Home/>}/>
          <Route path='/forget-password' element={<ForgetPassword/>}/>
          <Route path='/reset-password/:token' element={<ResetPassword/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/singup' element={<Register/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
        <Route path='/' element={<DashboardRoot/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Route>
    )
  );



  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
