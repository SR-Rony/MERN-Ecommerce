import { twMerge } from 'tailwind-merge'

const List = ({classaName,children}) => {
  return (
    <ul className={twMerge('',classaName)}>{children}</ul>
  )
}

export default List