import { twMerge } from 'tailwind-merge'

const Button = ({className,text}) => {
  return (
    <button className={twMerge('py-2 px-6 font-semibold text-xl ring-2 ring-secoundary rounded-full',className)}>{text}</button>
  )
}

export default Button