import { Button, Spinner } from 'keep-react';
import { useState } from 'react'
import Heading from '../components/Heading';
import { toast } from 'react-toastify';
import axios from 'axios';
import PageTitle from '../components/PageTitle';

const ForgetPassword = () => {
    const [email,setEmail]= useState(null)
    const [lodding,setLoading]= useState(null)
    // console.log(forget);

    const handleSubmit = async() => {
        setLoading(true)
        await axios.post("http://localhost:4000/api/v1/users/forget-password",{
          email:email,
        })
        .then((res)=>{
          console.log(res);
          setLoading(false)
          toast.success("please chack your email and add the new password", {
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
        .catch((err)=>{
          console.log(err);
          setLoading(false)
          let errorMessage=err.response.data.message
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
      }

    
  return (
    <div className='w-full h-[80vh] flex justify-center items-center mt-10'>
        <PageTitle title = 'Forget-Password'/>
        <div className='bg-white shadow-md rounded-md p-5 w-96'>
        <Heading className='text-center text-primary' tag='h1' text='Forget Password'/>
            <div className='my-4'>
                <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-full' type="text" value={email} placeholder='Inter your Email'  onChange={(e)=>setEmail(e.target.value)} />
            </div>
            {lodding
            ?<button type='submit' className=' mt-2 w-full md:w-full py-2 rounded-full font-semibold text-xl bg-secoundary text-white'>
            <span className="pr-2">
              <Spinner color="info" size="md" />
            </span>
            Loading...
            </button>
            :<Button onClick={handleSubmit} color="error" className='rounded-full py-2 px-4 w-full hover:bg-secoundary duration-100 hover:text-white' variant="outline"> Submit</Button>
            }
            
        </div>
    </div>
  )
}

export default ForgetPassword