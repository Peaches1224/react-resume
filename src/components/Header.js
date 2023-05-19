import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='flex justify-center pt-20'>
          
            <nav>
                <ul className='text-red-600'>
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="/about"> About</Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
