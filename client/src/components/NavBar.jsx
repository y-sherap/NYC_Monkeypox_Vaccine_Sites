import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav className="navbar">
      <h4>TEXT HERE</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="FAQ">FAQ</Link>
      </div>
    </nav>
  )
}

export default NavBar