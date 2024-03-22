import React from 'react'
import { twMerge } from 'tailwind-merge'

const Paragraph = ({text,className}) => {
  return (
    <p className={twMerge("font-normal",className)}>{text}</p>
  )
}

export default Paragraph