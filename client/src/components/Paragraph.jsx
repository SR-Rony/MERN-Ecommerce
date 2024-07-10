import React from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const Paragraph = ({className,text,onclick,link,to}) => {
  return (
    <p onclick={onclick} className={twMerge('text-xl font-normal',className)}>{text}<Link to={to} className='text-secoundary font-bold'>{link}</Link></p>
  )
}

export default Paragraph