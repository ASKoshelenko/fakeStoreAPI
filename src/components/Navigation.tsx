import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-300 items-center text-black">
      <span className="font-bold">React practise by ASK</span>

      <span>
        <Link to="/" className="mr-2">Products</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  )
}