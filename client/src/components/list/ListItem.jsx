import React from 'react'

const ListItem = ({text,className}) => {
  return (
    <div className={className}>{text}</div>
  )
}

export default ListItem