import React from 'react'
import './Nav.css'
import ClearIcon from '@mui/icons-material/Clear';
import DehazeIcon from '@mui/icons-material/Dehaze';

function Nav() {
  return (
    <nav>
        <div>SimpleNav</div>
        <div><DehazeIcon/></div>
        <div>
            <ul>
                <li>home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav