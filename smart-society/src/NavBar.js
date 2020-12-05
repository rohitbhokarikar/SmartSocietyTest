import React from 'react'

function NavBar() {
    return (
        <div>
            <nav>

            <div className="logo">
                Smart Society
            </div>

            <ul className="nav-link">
                <li><a>Home</a></li>
                <li><a>Services</a></li>
                <li><a>Sign In</a></li>
                <li><a>About Us</a></li>
                <li><a>Contact Us</a></li>

            </ul>
            </nav>
            <i  class="fas fa-bars menu"></i>
        </div>
    )
}

export default NavBar
