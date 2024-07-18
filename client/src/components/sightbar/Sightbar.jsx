import { useState } from "react"
import List from "../List"
import ListItem from "../ListItem"
import { Button, Drawer, DrawerBody, DrawerClose, DrawerContent } from 'keep-react'
import Paragraph from "../Paragraph"
import { FaBars} from "react-icons/fa";
import Heading from "../Heading"
import { RxCross1 } from "react-icons/rx";
import { TfiAngleRight } from "react-icons/tfi";

const listArray = ['Bags','Children','mans','Shoes','Bags','Children','mans','Shoes']


const Sightbar = () => {
  const [list,useList]= useState(listArray)
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState("left")
  return (


    <>
      <div className="flex items-center">
      <div onClick={() => {
              setIsOpen(!isOpen)
              setPosition('left')
            }} 
        className='mx-auto sm:mx-0 text-2xl gap-2 sm:ring-2 ring-primary sm:px-3 sm:py-1 inline-flex cursor-pointer rounded-md items-center text-white'>
        <FaBars />
        <Paragraph className='hidden md:block' text="All Category"/>
      </div>
      </div>
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen} position={position}>
        <DrawerBody>
          <DrawerContent>
            <div className="mx-10 py-20 lg:px-0 text-white relative">
              <Heading tag='h2' text='Hello SR' className='border-b-2 border-primary pb-4'/>
              <List className='py-5'>
                {list.map((item,index)=>(
                  <div className="flex justify-between items-center p-3 hover:bg-secoundary my-4 rounded-md duration-100 cursor-pointer" key={index}>
                    <Paragraph text={item}/>
                    <TfiAngleRight/>
                  </div>
                ))}
                </List>
              <DrawerClose asChild>
                <Button className="text-white absolute top-5 right-0 text-2xl"><RxCross1/></Button>
              </DrawerClose>
            </div>
          </DrawerContent>
        </DrawerBody>
      </Drawer>
    </>







    // <div className='mt-20 py-5 w-full px-2'>
    //   {list.map((item,index)=>(
    //     <List key={index}>
    //         <ListItem className='border-b-2 border-secoundary p-2 rounded-md my-4 hover:bg-secoundary hover:text-white duration-100 ' text={item}/>
    //     </List>
    //   ))}
    // </div>
  )
}

export default Sightbar