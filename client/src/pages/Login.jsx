import { useState } from 'react'
import Heading from '../components/Heading'
import PageTitle from '../components/PageTitle'
import Paragraph from '../components/Paragraph'
import axios from 'axios'
import Sightbar from '../components/sightbar/Sightbar'


const Login = () => {

  const [user,setUser]=useState('')
  const [userInfo,setUserInfo] = useState({
    email:"",password:""
  })
  let {email,password}=userInfo;

  
  const handleChange = (e)=>{
    setUserInfo({...userInfo,[e.target.name]:e.target.value})
  }

  const handleSubmit = async ()=>{
    console.log('click');
    try{
      setUser(userInfo)
      let data = await axios.post("http://localhost:4000/api/v1/auth/login",{
        email:user.email,
        password:user.password
      })
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }


  return (
    <>
      <PageTitle title = 'Login'/>
      <div className='w-full h-[80vh] flex justify-center items-center'>
        <div className='rounded-md p-5 w-1/2 text-center'>
          <Heading tag='h1' text='Login'/>
          <div className='my-5'>
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-1/2' type="email" name='email' onChange={handleChange} value={email} placeholder='Inter your Email' />
            </div>
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-1/2' type="password" name='password' onChange={handleChange} value={password} placeholder='Inter your Password' />
            </div>
            <button onClick={()=>handleSubmit()} className='w-1/2 py-2 rounded-full font-semibold text-xl bg-secoundary text-white'>Login</button>
          </div>
          <Paragraph text="Create your Ecommerce acount" link=' Sing Up' to='/singup'/>
        </div>
      </div>
    </>
  )
}

export default Login