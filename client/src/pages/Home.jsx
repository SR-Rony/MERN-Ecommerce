import { useSelector } from 'react-redux'
import PageTitle from '../components/PageTitle'
import AllProduct from '../components/all-product/AllProduct'
import Banner from '../components/banner/Banner'
import Category from '../components/category/Category'
import NewProduct from '../components/new-product/NewProduct'
import Popular from '../components/popular-product/Popular'
import SpecialProduct from '../components/special-product/SpecialProduct'

const Home = () => {

  // let userInfo = useSelector(state => state.user.value)
  // console.log(userInfo);

  return (
    <div className='mt-32 md:mt-36'>
      <PageTitle title="Home"/>
        <Banner/>
        <Category/>
        <NewProduct/>
        <Popular/>
        <SpecialProduct/>
        <AllProduct/>
    </div>
  )
}

export default Home