import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Root  ()  {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <h1 className='bg-success'>copyright@23075A0507</h1>
    </div>
  )
}
export default Root 
