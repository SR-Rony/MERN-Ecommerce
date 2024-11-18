import Laftbar from "../components/dashboard/Laftbar"

const Dashboard = () => {
  return (
    <div className='mt-32 md:mt-36'>
        <div className="container mx-auto px-2">
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    {/* <Laftbar/> */}
                </div>
                <div className="col-span-10"></div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard