'use client'
import { Envelope, Lock, User } from 'phosphor-react'
import { Button, Icon, Input, Label, Spinner } from 'keep-react'
import Heading from "@/components/heading/Heading";
import { useState } from 'react';
import Paragraph from '@/components/paragraph/Paragraph';
import { useRouter } from 'next/navigation';
import Link from 'next/link';




export default function Home() {
  const [user,setUser]=useState({name:"",email:"",password:""});
  let {name,email,password}=user
  // input error
  const [nameError,setNameError]=useState("")
  const [emailError,setEmailError]=useState("")
  const [passwordError,setPasswordError]=useState("")
  // lodding state
  const [lodding,setLodding]=useState(false)

  const router = useRouter()


  // hanle input change
  const handleChange =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    if(e.target.name=="name"){
      setNameError("")
    }
    if(e.target.name=="email"){
      setEmailError("")
    }
    if(e.target.name=="password"){
      setPasswordError("")
    }

  }

  // form is submit
  const handleSubmit =(e)=>{
    setLodding(true)
    if(!name){
      setNameError("please inter your name")
      setLodding(false)
    }
    if(!email){
      setEmailError("please inter your email")
      setLodding(false)
    }
    if(!password){
      setPasswordError("please inter your password")
      setLodding(false)
    }
    if(name && email && password){
      setLodding(false)
      console.log(user);
      router.push('/login')
    }
    e.preventDefault()
  }


  return (
    <main className="flex h-screen w-full justify-center items-center bg-black">
      <div>
        <Heading className="text-white mb-5 text-center text-3xl border-b-2 border-x-white pb-3" tag="h1" text="Sing Up"/>
        <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md bg-white">
          <fieldset className="space-y-1">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <Input onChange={handleChange} name='name' placeholder="full name" type='text' className="ps-11" />
              <Icon>
                <User size={19} color="#AFBACA" />
              </Icon>
            </div>
            {nameError && <Paragraph className="text-red-500" text={nameError}/>}
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="name">Email</Label>
            <div className="relative">
              <Input onChange={handleChange} name='email'  placeholder="email" type='email' className="ps-11" />
              <Icon>
                <Envelope size={19} color="#AFBACA" />
              </Icon>
            </div>
            {emailError && <Paragraph className="text-red-500" text={emailError}/>}
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input onChange={handleChange} name='password'  id="password" placeholder="Enter password" type="password" className="ps-11" />
              <Icon>
                <Lock size={19} color="#AFBACA" />
              </Icon>
            </div>
            {passwordError && <Paragraph className="text-red-500" text={passwordError}/>}
          </fieldset>
          {lodding 
            ?<Button className='w-full' size="sm" color="secondary">
                <span className="pr-2">
                <Spinner color="secondary" size="sm" />
                </span>
                Loading...
            </Button>
            :<Button className='w-full' size="sm"  color="secondary" type="submit">
                Sign In
            </Button>
            }
        </form>
        <p className='text-white text-center mt-4'>Already a User? <Link className='text-slate-600' href="/login">Login</Link></p>
      </div>
    </main>
  );
}
