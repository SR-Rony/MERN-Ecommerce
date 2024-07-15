import List from "../List"
import ListItem from "../ListItem"


const Sightbar = () => {
  return (
    <div className='w-full h-screen mt-20 py-5 px-2 shadow-lg'>
        <List>
            <ListItem className='border-b-2 border-secoundary p-2 rounded-md my-4 hover:bg-secoundary hover:text-white duration-100 ' text='Child'/>
            <ListItem className='border-b-2 border-secoundary p-2 rounded-md my-4 hover:bg-secoundary hover:text-white duration-100 ' text='Child'/>
            <ListItem className='border-b-2 border-secoundary p-2 rounded-md my-4 hover:bg-secoundary hover:text-white duration-100 ' text='Child'/>
            <ListItem className='border-b-2 border-secoundary p-2 rounded-md my-4 hover:bg-secoundary hover:text-white duration-100 ' text='Child'/>
            <ListItem className='border-b-2 border-secoundary p-2 rounded-md my-4 hover:bg-secoundary hover:text-white duration-100 ' text='Child'/>
            <ListItem className='border-b-2 border-secoundary p-2 rounded-md my-4 hover:bg-secoundary hover:text-white duration-100 ' text='Child'/>
        </List>
    </div>
  )
}

export default Sightbar