import { useDispatch, useSelector } from "react-redux"
import Image from "../image/Image"
import Heading from "../Heading"
import { IoMdLogOut } from "react-icons/io";
import axios from "axios";
import { activeUser } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Laftbar = () => {
    let userInfo = useSelector(state => state.user.value)

    let dispatch = useDispatch()
    let navigete = useNavigate()

    const handleLogout = async()=>{
        try {
           await axios.post('http://localhost:4000/api/v1/auth/logout')
           .then((res)=>{
            console.log('res error',res);
                dispatch(activeUser(null));
                // localStorage.removeItem('user')
                navigete('/login')
           })
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='w-full h-[90vh] bg-white py-7'>
        <div className="text-center border-b-2 border-primary pb-4">
            <div className="w-20 h-20 cursor-pointer ring ring-primary rounded-full mx-auto overflow-hidden mb-4">
                <Image src={userInfo.image}/>
            </div>
            <Heading tag='h3' text={userInfo.name}/>
        </div>
        <div className="my-5">

        </div>
        <IoMdLogOut onClick={handleLogout} className="text-3xl mx-auto cursor-pointer"/>
    </div>
  )
}

export default Laftbar