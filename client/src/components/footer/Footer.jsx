import Heading from "../Heading"
import List from "../List"
import ListItem from "../ListItem"
import { RiGooglePlayLine } from "react-icons/ri";
import { FaApple,FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram    } from "react-icons/fa";
import Paragraph from "../Paragraph";
import { Link } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <footer className='bg-black py-10 mt-5'>
      <div className="container mx-auto px-2">
        <Heading className="text-center text-white mb-7 text-5xl" tag='h2' text="E-commerce"/>
        <div className="flex justify-center items-start text-white my-10">
          <div className="ring-2 ring-primary p-2  md:p-3 text-xl rounded-full mx-2 md:mx-3 cursor-pointer hover:bg-primary text-primary hover:text-white duration-100">
            <FaFacebookF/>
          </div>
          <div className="ring-2 ring-primary p-2 md:p-3 text-xl rounded-full mx-2 md:mx-3 cursor-pointer hover:bg-primary text-primary hover:text-white duration-100">
            <FaTwitter/>
          </div>
          <div className="ring-2 ring-primary p-2 md:p-3 text-xl rounded-full mx-2 md:mx-3 cursor-pointer hover:bg-primary text-primary hover:text-white duration-100">
            <FaLinkedinIn />
          </div>
          <div className="ring-2 ring-primary p-2 md:p-3 text-xl rounded-full mx-2 md:mx-3 cursor-pointer hover:bg-primary text-primary hover:text-white duration-100">
            <SiWhatsapp />
          </div>
          <div className="ring-2 ring-primary p-2 md:p-3 text-xl rounded-full mx-2 md:mx-3 cursor-pointer hover:bg-primary text-primary hover:text-white duration-100">
            <FaInstagram />
          </div>
          
          
          

        </div>
        <div className="grid grid-cols-12 mx-auto justify-around text-white">
          <div className="col-span-12 md:col-span-6 xl:col-span-3 text-center my-5 md:my-0">
            <Heading className='mb-5 border-b-2 border-primary pb-2 inline-block' tag='h3' text='CONTACT'/>
            <List>
              <ListItem className='my-2 hover:text-secoundary' text=' House#42, Road-3/A, Dhanmondi,'/>
              <ListItem className='my-2 hover:text-secoundary' text='Dhaka-1209, Bangladesh'/>
              <ListItem className='my-2 hover:text-secoundary' text='Email: skybuybd@gmail.com,'/>
              <ListItem className='my-2 hover:text-secoundary' text='Phone: 09613828606'/>
            </List>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3 text-center my-5 md:my-0">
          <Heading className='mb-5 border-b-2 border-primary pb-2 inline-block' tag='h3' text='CUSTOMER'/>
            <List>
              <ListItem className='my-2 hover:text-secoundary' text='Account'/>
              <ListItem className='my-2 hover:text-secoundary' text='Cart'/>
              <ListItem className='my-2 hover:text-secoundary' text='Wishlist'/>
              <ListItem className='my-2 hover:text-secoundary' text='Shipping Charge'/>
              <ListItem className='my-2 hover:text-secoundary' text='Retail Purchase'/>
              <ListItem className='my-2 hover:text-secoundary' text='FAQ'/>
            </List>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3 text-center my-5 md:my-0">
          <Heading className='mb-5 border-b-2 border-primary pb-2 inline-block' tag='h3' text='INFORMATION'/>
            <List>
              <ListItem className='my-2 hover:text-secoundary' text='About us'/>
              <ListItem className='my-2 hover:text-secoundary' text='Contact Us'/>
              <ListItem className='my-2 hover:text-secoundary' text='Privacy Policy'/>
              <ListItem className='my-2 hover:text-secoundary' text='Returns & Refund'/>
              <ListItem className='my-2 hover:text-secoundary' text='Terms & Conditions'/>
              <ListItem className='my-2 hover:text-secoundary' text='Secured Payment'/>
            </List>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3 text-center my-5 md:my-3 lg:my-0">
            <Heading className='mb-7 border-b-2 border-primary pb-2 inline-block' tag='h3' text='MOBILE APPS'/>
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
        <div className="text-center mb-20 md:mb-0 text-white mt-16 text-xl">
          <p>© 2024 <Link className="text-primary">Ecommerce</Link> - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer