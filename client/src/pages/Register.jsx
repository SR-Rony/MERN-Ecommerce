import Heading from '../components/Heading'
import PageTitle from '../components/PageTitle'
import Paragraph from '../components/Paragraph'
import axios from 'axios'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import { Spinner } from "keep-react";
import { useState } from 'react';
import {toast } from 'react-toastify';




const Register = () => {
  const [lodding,setLoding]= useState(false)
  // const [images, setImages] = useState({});
  const navigate = useNavigate()

  // const handleImages =(e)=>{
  //   console.log("images",e.target.files[0]);
  //   setImages(e.target.files[0])
  // }

  const formik = useFormik({
    initialValues: {
      name:'',
      email: '',
      phone: '',
      address: '',
      password: '',
      image:''
    },
    onSubmit: async(values) => {
      console.log('all object',{
        name:values.name,
            email:values.email,
            phone:values.phone,
            address:values.address,
            password:values.password,
            image:values.image
      });
      
    try{
      setLoding(true)
          await axios.post("http://localhost:4000/api/v1/users/register",{
            name:values.name,
            email:values.email,
            phone:values.phone,
            address:values.address,
            password:values.password,
            image:values.image
          })
          .then((res)=>{
            let message = res.data.message
            // let data = res.data.paylod
            console.log('data',res);
            
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
            navigate('/login')
          }).catch((error)=>{
            console.log(error);
            
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
  })

  return (
    <div className='mt-24'>
      <PageTitle title = 'Register'/>
      <div className='w-full h-[80vh] flex justify-center items-center'>
        <div className=' mx-auto md:p-5 md:w-1/2 text-center'>
          <Heading tag='h1' text='Register'/>
          <form  onSubmit={formik.handleSubmit} className='my-2 md:my-5 px-2 md:px-0'>
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2'id='name' type="text" name='name'  onChange={formik.handleChange}
         value={formik.values.name} required placeholder='Full Name' />
            </div>
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2'id='email' type="email" name='email'  onChange={formik.handleChange}
         value={formik.values.email} required placeholder='Email' />
            </div>
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2'id='phone' type="number" name='phone'  onChange={formik.handleChange}
         value={formik.values.phone} required placeholder='Your Phone Number' />
            </div>
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2'id='address' type="text" name='address'  onChange={formik.handleChange}
         value={formik.values.address} required placeholder='Your Address' />
            </div>
            <div className='my-2 md:my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2' id='password' type="password" name='password'  onChange={formik.handleChange}
         value={formik.values.password} required placeholder='Password' />
            </div>
            <div className='my-2 md:my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2' type='file'  onChange={(e)=>formik.setFieldValue('image',e.target.files[0])}/>
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
          <Paragraph text="Create your Ecommerce acount" link=' Sing Up' to='/login'/>
        </div>
      </div>
    </div>
  )
}

export default Register