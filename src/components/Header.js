import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='flex justify-center pt-20 '>
            {/* <div class="grid grid-cols-1 divide-y text-slate-400 text-base flex flex-col space-y-6 font-mono text-3xl rounded-md
                    backdrop-blur-md bg-white/30 transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 h
                    over:bg-blue-600 duration-300 npm start text-slate-400/100 hover:text-blue-400"></div> */}

            <nav>
                <ul className='tracking-wide  text-slate-400 text-base font-mono text-3xl rounded-md   mb-7'>

                    <li className='px-5 py-2 transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110  over:bg-blue-600 duration-300 npm start text-slate-400/100 hover:text-blue-400 rounded-md mb-5 '>
                        <Link to="/about"> About Me</Link>
                    </li>

                    <li className='px-5 py-2 transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110  over:bg-blue-600 duration-300 npm start text-slate-400/100 hover:text-blue-400 rounded-md mb-5'>
                        <Link to="/projects"> Projects</Link>
                    </li>

                    <li className='px-5 py-2 transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110  over:bg-blue-600 duration-300 npm start text-slate-400/100 hover:text-blue-400 rounded-md mb-5 '>
                        <Link to="/education"> Education</Link>
                    </li>

                    <li className='px-5 py-2 transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110  over:bg-blue-600 duration-300 npm start text-slate-400/100 hover:text-blue-400 rounded-md mb-5 '>
                        <Link to="/contact"> Contact</Link>
                    </li>


                </ul>

            </nav>
        </div>
    )
}

export default Header
