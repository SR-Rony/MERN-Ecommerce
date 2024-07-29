import PageTitle from '../components/PageTitle'
import AllProduct from '../components/all-product/AllProduct'
import Banner from '../components/banner/Banner'
import Category from '../components/category/Category'
import NewProduct from '../components/new-product/NewProduct'
import Popular from '../components/popular-product/Popular'

const Home = () => {
  return (
    <div className='mt-32 md:mt-36'>
      <PageTitle title="Home"/>
        <Banner/>
        <Category/>
        <Popular/>
        <NewProduct/>
        <AllProduct/>
    </div>
  )
}

export default Home