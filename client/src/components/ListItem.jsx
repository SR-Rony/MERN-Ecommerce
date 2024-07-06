import React from 'react'
import { twMerge } from 'tailwind-merge'

const ListItem = ({className,text}) => {
  return (
    <li className={twMerge('text-base font-semibold',className)}>{text}</li>
  )
}

export default ListItem