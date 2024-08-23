import Heading from "../components/Heading";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Spinner } from "keep-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [lodding, setLoding] = useState(false);
  const [image, setImage] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
  });
  let { name, email, address, phone, password } = user;
  const navigate = useNavigate();

  // let fileRef = useRef(null)

  // const formik = useFormik({
  //   initialValues: {
  //     name:'',
  //     email: '',
  //     phone: '',
  //     address: '',
  //     password: '',
  //     image:''
  //   },
  //   onSubmit: async(values) => {
  //     console.log('all object',{
  //       name:values.name,
  //           email:values.email,
  //           phone:values.phone,
  //           address:values.address,
  //           password:values.password,
  //           image:values.image
  //     });

  //   try{
  //     setLoding(true)
  //         await axios.post("http://localhost:4000/api/v1/users/register",{
  //           name:values.name,
  //           email:values.email,
  //           phone:values.phone,
  //           address:values.address,
  //           password:values.password,
  //           image:values.image
  //         })
  //         .then((res)=>{
  //           let message = res.data.message
  //           // let data = res.data.paylod
  //           console.log('data',res);

  //           setLoding(false)
  //           toast.success(message, {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "dark",
  //             });
  //           navigate('/login')
  //         }).catch((error)=>{
  //           console.log(error);

  //           setLoding(false)
  //           let errorMessage =error.response.data.message
  //           toast.error(errorMessage, {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "dark",
  //             });
  //         })
  //       }catch(error){
  //         console.log(error);
  //         setLoding(false)
  //         toast.error('network error', {
  //           position: "top-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "dark",
  //         });
  //       }
  //   },
  // })

  const handleChange = (e) => {
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoding(true);
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/users/register",
        {
          name: name,
          email: email,
          phone: phone,
          address: address,
          password: password,
          image: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        let message = res.data.message;
        setLoding(false);
        toast.success(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(res);
      })
      .catch((error) => {
        setLoding(false);
        let errorMessage = error.response.data.message;
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(error);
      });
  };

  const handleUpload = (e) => {
    console.log("File info working!");
    console.log(e.target.files[0]);
    const formData = new FormData();
    //FILE INFO NAME WILL BE "my-image-file"
    formData.append("image", e.target.files[0], e.target.files[0].name);
    setImage(formData);
  };

  return (
    <div className="mt-24">
      <PageTitle title="Register" />
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className=" mx-auto md:p-5 md:w-1/2 text-center">
          <Heading tag="h1" text="Register" />
          <form onSubmit={handleSubmit} className="my-2 md:my-5 px-2 md:px-0">
            <div className="my-5">
              <input
                className="py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2"
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={name}
                required
                placeholder="Full Name"
              />
            </div>
            <div className="my-5">
              <input
                className="py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2"
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={email}
                required
                placeholder="Email"
              />
            </div>
            <div className="my-5">
              <input
                className="py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2"
                id="phone"
                type="number"
                name="phone"
                onChange={handleChange}
                value={phone}
                required
                placeholder="Your Phone Number"
              />
            </div>
            <div className="my-5">
              <input
                className="py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2"
                id="address"
                type="text"
                name="address"
                onChange={handleChange}
                value={address}
                required
                placeholder="Your Address"
              />
            </div>
            <div className="my-2 md:my-5">
              <input
                className="py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2"
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                value={password}
                required
                placeholder="Password"
              />
            </div>
            <div className="my-2 md:my-5">
              <input
                className="py-2 px-4 ring-1 rounded-full ring-secoundary w-full md:w-1/2"
                type="file"
                onChange={handleUpload}
              />
              {/* <button className='py-2 px-4 rounded-full ring-1 ring-secoundary' onClick={()=>{fileRef.current.click()}}>Image Upload</button> */}
            </div>
            {lodding ? (
              <button
                type="submit"
                className=" mt-2 w-full md:w-1/2 py-2 rounded-full font-semibold text-xl bg-secoundary text-white"
              >
                <span className="pr-2">
                  <Spinner color="info" size="md" />
                </span>
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                className=" mt-2 w-full md:w-1/2 py-2 rounded-full font-semibold text-xl bg-secoundary text-white"
              >
                Login
              </button>
            )}
          </form>
          <Paragraph
            text="Create your Ecommerce acount"
            link=" Sing Up"
            to="/login"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
