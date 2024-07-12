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
    <>
      <PageTitle title = 'Sing Up'/>
      <div className='w-full h-[80vh] flex justify-center items-center'>
        <div className='rounded-md p-5 w-1/2 text-center'>
          <Heading tag='h1' text='Sing Up'/>
          <form onSubmit={handleSubmit} className='my-5' action="">
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-1/2' type="text" name='name' placeholder='Name' onChange={handleChange} value={name} />
            </div>
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-1/2' type="email" name='email' placeholder='Email' onChange={handleChange} value={email} />
            </div>
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-1/2' type="password" name='password' placeholder='Password' onChange={handleChange} value={password} />
            </div>
            <button className='w-1/2 py-2 rounded-full font-semibold text-xl bg-secoundary text-white'>Sing Up</button>
          </form>
          <Paragraph text="Already have an account?" link=' Login' to='/login'/>
        </div>
      </div>
    </>
  )
}

export default Register