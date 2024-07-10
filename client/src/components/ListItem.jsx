import React from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const ListItem = ({className,text,to}) => {
  return (
    <Link to={to}><li className={twMerge('text-xl font-semibold',className)}>{text}</li></Link>
  ) 
}

export default ListItem