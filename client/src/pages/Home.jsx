import PageTitle from '../components/PageTitle'
import Banner from '../components/banner/Banner'
import Category from '../components/category/Category'
import Popular from '../components/popular-product/Popular'

const Home = () => {
  return (
    <div className='mt-32 md:mt-36'>
      <PageTitle title="Home"/>
        <Banner/>
        <Category/>
        <Popular/>
    </div>
  )
}

export default Home