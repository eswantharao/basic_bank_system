
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
  <nav>
    <div class='title'>
      <h1>Banking System</h1>
    </div>
    
    <div className='nav-links'>
      <ul>
        <li>
          <a href='/'>HOME</a>
        </li>
        <li>
          <a href='/customers'>CUSTOMERS</a>
        </li>
        <li>
          <a href='/history'>TRANSACTIONS</a>
        </li>
        <li>
          <a href='/transfer'>TRANSFER</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar