import React from 'react'
import { twMerge } from 'tailwind-merge'

const Image = ({className,src,alt='img'}) => {
  return (
    <img className={twMerge('w-full object-cover',className)} src={src} alt={alt} />
  )
}

export default Image