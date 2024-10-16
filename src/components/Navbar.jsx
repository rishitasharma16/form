import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='py-7 bg-slate-400 flex justify-center text-white'>
        <Link className='px-3' to="/">Form</Link>
        <Link className="w-10" to="/data">Submission </Link>
    </div>
  )
}

export default Navbar