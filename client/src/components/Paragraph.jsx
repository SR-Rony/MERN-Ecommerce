import React from 'react'
import { twMerge } from 'tailwind-merge'

const Paragraph = ({className,text}) => {
  return (
    <p className={twMerge('text-base font-normal',className)}>{text}</p>
  )
}

export default Paragraph