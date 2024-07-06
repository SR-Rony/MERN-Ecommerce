import React,  from 'react'
import { twMerge } from 'tailwind-merge'

const List = ({clasaName,children}) => {
  return (
    <ul className={twMerge('flex',clasaName)}>{children}</ul>
  )
}

export default List