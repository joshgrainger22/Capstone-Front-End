import { Link } from 'react-router-dom'
import React from 'react'


const Header = () => {

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Lakes">Lake Feed</Link>
      </nav>
    </header>
  )
}

export default Header
