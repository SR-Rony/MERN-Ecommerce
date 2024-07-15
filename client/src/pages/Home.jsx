import PageTitle from '../components/PageTitle'
import Banner from '../components/banner/Banner'
import Category from '../components/category/Category'

const Home = () => {
  return (
    <div className='mt-24'>
      <PageTitle title="Home"/>
        <Banner/>
        <Category/>
    </div>
  )
}

export default Home