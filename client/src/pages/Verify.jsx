import { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PageTitle from '../components/PageTitle'

const Verify = () => {
  let [error,setError]= useState('')
 let params = useParams()
  useEffect(()=>{
    async function data(){
      try {
        let token = params.token
        await axios.post('http://localhost:4000/api/v1/users/verify',{
          token:token
        })
      } catch (error) {
        let message = error.response.data.message
        setError(message)
      }
    }
    data()
  })
  return (
    <>
      <PageTitle title = 'Verification'/>
      <div className='flex justify-center items-center w-full h-screen'>
      {error 
      ?<Heading className='text-red-500' tag='h1' text={error}/>
       :<Heading className='text-green-500' tag='h1' text='User verification successfull'/>
      }
    </div>
    </>
  )
}

export default Verify