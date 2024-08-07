import Heading from '../components/Heading'
import PageTitle from '../components/PageTitle'
import Paragraph from '../components/Paragraph'
import axios from 'axios'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import { Spinner } from "keep-react";
import { useState } from 'react';
import {toast } from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux' 
import { activeUser } from '../features/user/userSlice';




const Login = () => {
  const [lodding,setLoding]= useState(false)

  let userinfo = useSelector(state =>(state.user.value))
  console.log(userinfo);
  let dispatch = useDispatch()
  const navigate = useNavigate()


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async(values) => {
    try{
      setLoding(true)
          await axios.post("http://localhost:4000/api/v1/auth/login",{
            email:values.email,
            password:values.password
          })
          .then((res)=>{
            let message = res.data.message
            let data = res.data.paylod
            dispatch(activeUser(data));
            // localStorage.setItem('user',JSON.stringify(data))
            setLoding(false)
            toast.success(message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
            navigate('/')
          }).catch((error)=>{
            setLoding(false)
            let errorMessage =error.response.data.message
            toast.error(errorMessage, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          })
        }catch(error){
          console.log(error);
          setLoding(false)
          toast.error('network error', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
    },
  });

  return (
    <div className='mt-24'>
      <PageTitle title = 'Login'/>
      <div className='w-full h-[80vh] flex justify-center items-center'>
        <div className=' mx-auto md:p-5 md:w-1/2 text-center'>
          <Heading tag='h1' text='Login'/>
          <form  onSubmit={formik.handleSubmit} className='my-2 md:my-5 px-2 md:px-0'>
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2'id='email' type="email" name='email'  onChange={formik.handleChange}
         value={formik.values.email} required placeholder='Inter your Email' />
            </div>
            <div className='my-2 md:my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2' id='password' type="password" name='password'  onChange={formik.handleChange}
         value={formik.values.password} required placeholder='Inter your Password' />
            </div>
            {lodding
            ?
            <button type='submit' className=' mt-2 w-full md:w-1/2 py-2 rounded-full font-semibold text-xl bg-secoundary text-white'>
            <span className="pr-2">
              <Spinner color="info" size="md" />
            </span>
            Loading...
            </button>
            :<button type='submit' className=' mt-2 w-full md:w-1/2 py-2 rounded-full font-semibold text-xl bg-secoundary text-white'>Login</button>
            
            }
          </form>
          <Paragraph text="Create your Ecommerce acount" link=' Sing Up' to='/singup'/>
        </div>
      </div>
    </div>
  )
}

export default Login