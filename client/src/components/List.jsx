import { twMerge } from 'tailwind-merge'

const List = ({className,children,key}) => {
  return (
    <ul key={key} className={className}>{children}</ul>
  )
}

export default List