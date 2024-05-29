import React from 'react';

function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li className="nav-element"><a href = "">Home</a></li>
                <li className="nav-element"><a href = "">About</a></li>
                <li className="nav-element"><a href = "">Project</a></li>
                <li className="nav-element"><a href = "">Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;