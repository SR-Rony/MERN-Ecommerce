import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        i am nevbar
        <Outlet/>
        i am footer
    </div>
  )
}

export default Root