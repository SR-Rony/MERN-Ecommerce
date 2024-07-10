import Heading from '../components/Heading'
import PageTitle from '../components/PageTitle'
import Paragraph from '../components/Paragraph'

const Register = () => {
  return (
    <>
      <PageTitle title = 'Sing Up'/>
      <div className='w-full h-[80vh] flex justify-center items-center'>
        <div className='rounded-md p-5 w-1/2 text-center'>
          <Heading tag='h1' text='Sing Up'/>
          <form className='my-5' action="">
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-1/2' type="text" placeholder='Name' />
            </div>
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-1/2' type="email" placeholder='Email' />
            </div>
            <div className='my-5'>
              <input className='py-2 px-4 ring-1 rounded-full ring-secoundary w-1/2' type="password" placeholder='Password' />
            </div>
            <button className='w-1/2 py-2 rounded-full font-semibold text-xl bg-secoundary text-white'>Sing Up</button>
          </form>
          <Paragraph text="Create an new acount" link=' Login' to='/login'/>
        </div>
      </div>
    </>
  )
}

export default Register