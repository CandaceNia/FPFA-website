import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

export default function 
() {
  return (
    <div id='nav-bar'>
                <button id='nav-button'>
            <Link
            to="/"
            id='logo-button'>
            The Forest Playground Neighborhood Association, Inc.
            </Link>
        </button>
        <button id='nav-button'>
            <Link
            to="/"
            id='home-button'>
            Home
            </Link>
        </button>
       
        <button id='nav-button'>
            <Link
             to="/aboutus"
             id='about-us-button'
            > About Us </Link>
        </button>
        <button id='nav-button'>
            <Link
            to="/events"
            id='events-button'
            > Events </Link>
        </button>
        <button id='nav-button'>
            <Link
             to="/contactus"
             id='contact-us-button'
             > Contact Us </Link>
        </button>

    </div>
  )
}
