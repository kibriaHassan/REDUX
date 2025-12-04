import React, { useState } from "react";
import { FaCartShopping, FaX } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { removeItem } from "../features/addToCart/cartSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false)
  const dispatch = useDispatch()
  const data = useSelector(state => state.cart)
  const handleRemove = (id) => {
   dispatch(removeItem(id))
  }
  return (
    <>
    
      <nav className="bg-gray-900 text-white sticky top-0 py-4">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Redux EBT</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg items-center">
            <li className="hover:text-gray-300 cursor-pointer"><NavLink to='/'>Home</NavLink></li>
            <li className="hover:text-gray-300 cursor-pointer"><NavLink to='/about'>About</NavLink></li>
            <li className="hover:text-gray-300 cursor-pointer" ><NavLink to='/shop'>Shop</NavLink></li>
            <li className="hover:text-gray-300 cursor-pointer" ><NavLink to='/cart'>Cart</NavLink></li>
            <li>
              <button onClick={()=>setCartOpen(true)} className="relative">
                <FaCartShopping />
                <div className="absolute size-5 rounded-full flex justify-center items-center bg-slate-100 text-slate-900 text-xs -top-4 -right-4 cursor-pointer">
                  {data?.length}
                </div>
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden flex flex-col gap-4 mt-4 bg-gray-800 p-4 rounded-lg">
            <li className="hover:text-gray-300">Home</li>
            <li className="hover:text-gray-300">About</li>
            <li className="hover:text-gray-300">Services</li>
            <li className="hover:text-gray-300">Contact</li>
          </ul>
        )}
      </nav>
      {
        cartOpen &&
        <div className="w-1/2 fixed top-0 right-0 bg-slate-800 text-slate-100 min-h-screen p-10 overflow-y-auto">
          <button onClick={()=>setCartOpen(false)}><FaX /></button>
          <div className="space-y-2 overflow-y-auto">
            {data?.map(product=>(
              <div key={product.id} className="bg-slate-700 text-slate-50 flex gap-2 items-center rounded-md p-3 justify-between">
                <img className="size-20 object-cover" src={product.thumbnail} alt="" />
                <p className="text-xl font-semibold">{product.title}</p>
                <p>{product.price}</p>
                <button onClick={()=>handleRemove(product.id)} className="text-red-500 text-2xl cursor-pointer"><MdDelete /></button>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Navbar;
