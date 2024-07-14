import Heading from "../Heading"
import List from "../List"
import ListItem from "../ListItem"
import { RiGooglePlayLine } from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import Paragraph from "../Paragraph";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-black py-20'>
      <div className="container mx-auto px-2">
        <Heading className="text-center text-white mb-7 text-5xl" tag='h2' text="E-commerce"/>
        <div className="grid grid-cols-12 text-white">
          <div className="col-span-3">
            <Heading className='mb-5' tag='h3' text='CONTACT'/>
            <List>
              <ListItem className='my-2' text=' House#42, Road-3/A, Dhanmondi,'/>
              <ListItem className='my-2' text='Dhaka-1209, Bangladesh'/>
              <ListItem className='my-2' text='Email: skybuybd@gmail.com,'/>
              <ListItem text='Phone: 09613828606'/>
            </List>
          </div>
          <div className="col-span-3">
          <Heading className='mb-5' tag='h3' text='CUSTOMER'/>
            <List>
              <ListItem className='my-2' text='Account'/>
              <ListItem className='my-2' text='Cart'/>
              <ListItem className='my-2' text='Wishlist'/>
              <ListItem text='Shipping Charge'/>
              <ListItem text='Retail Purchase'/>
              <ListItem text='FAQ'/>
            </List>
          </div>
          <div className="col-span-3">
          <Heading className='mb-5' tag='h3' text='INFORMATION'/>
            <List>
              <ListItem className='my-2' text='About us'/>
              <ListItem className='my-2' text='Contact Us'/>
              <ListItem className='my-2' text='Privacy Policy'/>
              <ListItem text='Returns & Refund'/>
              <ListItem text='Terms & Conditions'/>
              <ListItem text='Secured Payment'/>
            </List>
          </div>
          <div className="col-span-3">
            <Heading className='mb-5' tag='h3' text='MOBILE APPS'/>
            <div>
              <div className="inline-flex cursor-pointer items-center gap-2 bg-secoundary p-3 rounded-md">
                <RiGooglePlayLine className="text-xl"/>
                <Paragraph text='Google Play'/>
              </div>
            </div>
            <div>
              <div className="inline-flex mt-5 cursor-pointer items-center gap-2 bg-secoundary py-3 px-5 rounded-md">
                <FaApple className="text-2xl"/>
                <Paragraph text='App Store'/>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white mt-16 text-xl">
          <p>© 2024 <Link className="text-primary">Ecommerce</Link> - All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer