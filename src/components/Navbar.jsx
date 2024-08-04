import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  const { cart } = useSelector((state) => state)

  return (
    <>
      <div>
        <nav className=' h-20 max-w-6xl flex justify-between items-center mx-auto'>
          <NavLink to="/">
            <div className=' ml-5'>
              <img src="logo.png" className=' lg:h-14 md:h-10 h-8' />
            </div>
          </NavLink>
          <div className=' flex items-center space-x-6 mr-5 font-semibold text-slate-100'>
            <NavLink to="/">
              <p className='cursor-pointer hover:text-green-400'>Home</p>
            </NavLink>
            <NavLink to="/cart">
              <div className=' relative'>
                <FaShoppingCart className=' text-2xl' />
                {
                  cart.length > 0 &&
                  <span
                    className=' absolute -top-1 -right-2 bg-[#199109] text-xs w-5 h-5 flex justify-center  items-center rounded-full animate-bounce text-black'>
                    {cart.length} </span>
                }
              </div>
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  )
}