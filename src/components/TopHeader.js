import React from 'react'
import {Link} from 'react-router-dom'

export default function TopHeader() {
  return (
    <div>
          <div className=" min-w-full text-6xl font-mono text-slate-400 text-slate-500/100
        hover:text-blue-600">
        <h1>
            <Link to="/"> Chawntel Stitts </Link>
        </h1>
      </div>
          <div className='text-2xl font-mono flex flex-col space-y-4 text-slate-400 text-slate-500/100
        hover:text-blue-600'>
        <h4>
          <Link to="https://promineotech.com/">Marketing Coordinator/ Web Developer</Link>  
        </h4>
      </div>
    </div>
  )
}
