import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container' >
        <ul>
            <li>COMPANY PROFILE</li>
            <li>OUR SERVICE</li>
            <li>OUR CUSTOMER</li>
            <li>DIRECTOR TEAM</li>
            <li><button className='btn'>CONTACT</button></li>
        </ul>
    </nav>
  )
}

export default Navbar