import React from 'react'
import { twMerge } from 'tailwind-merge'

const Heading = (props) => {
  return (
    < props.tag className={twMerge('font-bold text-2xl',props.className)}>{props.text}</props.tag>
  )
}

export default Heading