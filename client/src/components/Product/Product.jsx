import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'keep-react'
import image from '../../assets/product/product.jpg'
import Image from '../image/Image'
import Paragraph from '../Paragraph'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  let navigate = useNavigate()

  const handleClick =()=>{
    navigate('/product')
  }


  return (
    <Card onClick={handleClick} className='group ring-1 ring-secoundary cursor-pointer'>
      <CardHeader className='overflow-hidden'>
        <Image className='group-hover:scale-105 duration-100' src={image} alt="image" />
      </CardHeader>
      <CardContent className="space-y-1">
        <CardTitle className='text-base'>Shoes for women 2024</CardTitle>
        {/* <CardDescription className='text-secoundary'>
         $100
        </CardDescription> */}
        <Paragraph className='text-primary' text='$100'/>
      </CardContent>
    </Card>

  )
}

export default Product