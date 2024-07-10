import React from 'react'
import PageTitle from '../components/PageTitle'
import Banner from '../components/banner/Banner'

const Home = () => {
  return (
    <div className='mt-40'>
      <PageTitle title="Home"/>
      <div className="container mx-auto px-2">
        <Banner/>
      </div>
    </div>
  )
}

export default Home