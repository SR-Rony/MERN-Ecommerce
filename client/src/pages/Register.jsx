import { useState } from 'react'
import Heading from '../components/Heading'
import PageTitle from '../components/PageTitle'
import Paragraph from '../components/Paragraph'

const Register = () => {
  const [user,setUser]=useState('')
  console.log(user);
  const [userInfo,setUserInfo] = useState({
    name:"",email:"",password:""
  })
  let {name,email,password}=userInfo;

  
  const handleChange = (e)=>{
    setUserInfo({...userInfo,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    setUser(userInfo)
    e.preventDefault()
  }
  

  return (
    <div className='mt-24'>
      <PageTitle title = 'SingUp'/>
      <div className='w-full h-[80vh] flex justify-center items-center'>
        <div className=' mx-auto md:p-5 md:w-1/2 text-center'>
          <Heading tag='h1' text='Sing UP'/>
          <div className='my-2 md:my-5 px-2 md:px-0'>
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2' type="text" name='name' onChange={handleChange} value={name} placeholder='name' />
            </div>
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2' type="email" name='email' onChange={handleChange} value={email} placeholder='email' />
            </div>
            <div className='my-2 md:my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2' type="password" name='password' onChange={handleChange} value={password} placeholder='password' />
            </div>
            <button onClick={()=>handleSubmit()} className=' mt-2 w-full md:w-1/2 py-2 rounded-full font-semibold text-xl bg-secoundary text-white'>Sing up</button>
          </div>
          <Paragraph text="Create your Ecommerce acount" link=' Login' to='/login'/>
        </div>
      </div>
    </div>
  )
}

export default Register