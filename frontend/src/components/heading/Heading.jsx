import React from 'react'
import { twMerge } from 'tailwind-merge'

const Heading = (props) => {
    let {className,text}=props
  return (
    <props.tag className={twMerge("font-bold",className)}>{text}</props.tag>
  )
}

export default Heading