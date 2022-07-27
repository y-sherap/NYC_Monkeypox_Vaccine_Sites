// import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav className="navbar">
      <h4>Hi</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="faq">FAQ</Link>
      </div>
    </nav>
  )
}

export default NavBar