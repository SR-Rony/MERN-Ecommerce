import React from 'react'
import { twMerge } from 'tailwind-merge'

const Input = ({className,type,name,placeholder,onChange,label}) => {
  return (
    <>
        <label>{label} : </label>
        <input onChange={onChange} className={twMerge('ring ring-[#0059C7] py-2 w-full',className)} type={type} name={name} placeholder={placeholder}/>
    </>
  )
}

export default Input