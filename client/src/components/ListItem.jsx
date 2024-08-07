import React from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const ListItem = ({className,text,to,onClick,key}) => {
  return (
    <Link key={key} to={to}><li onClick={onClick} className={twMerge('text-xl font-semibold',className)}>{text}</li></Link>
  ) 
}

export default ListItem