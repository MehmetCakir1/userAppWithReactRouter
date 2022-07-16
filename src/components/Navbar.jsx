import React from 'react'
import Picture from "../assets/navbarImage.png"
import {Link} from "react-router-dom"   

const Navbar = () => {
  return (
    <div className='d-flex justify-content-between align-items-center  px-md-4'>
      <Link to="/" ><img src={Picture} alt=""/></Link>
      <Link className='text-decoration-none fs-2 text-danger fw-bold  px-3 px-md-2' to="/" >HOME</Link>
    </div>
  )
}

export default Navbar