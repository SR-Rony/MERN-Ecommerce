import React from 'react'
import PageTitle from '../components/PageTitle'

const Error = () => {
  <PageTitle title = 'Error'/>

  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <h1 className='text-5xl font-bold'>404 Page is not found</h1>
    </div>
  )
}

export default Error