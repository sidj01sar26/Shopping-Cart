import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

export default function Cart() {

  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <>
      <div>
        {
          cart.length > 0 ?
            (
              <div className=' max-w-6xl flex flex-wrap lg:flex-nowrap mx-auto gap-16 p-6 '>

                <div className=' lg:w-[70%] '>
                  {
                    cart.map((item, index) => {
                      return <CartItem key={item.id} item={item} itemIndex={index} />
                    })
                  }
                </div>

                <div className=' md:w-[30%] w-full flex flex-col justify-between gap-8'>

                  <div className=' mt-20'>
                    <p className=' text-xl font-semibold text-green-700 uppercase'>Your Cart</p>
                    <h3 className=' text-5xl font-semibold text-green-700 uppercase mb-4'>Summary</h3>
                    <p className='font-semibold text-slate-700 text-[18px]'>
                      <span>Total Item: {cart.length} </span>
                    </p>
                  </div>

                  <div className=' mb-20'>
                    <p className='text-slate-700 text-xl font-semibold mb-5'>Total Amount: ${totalAmount.toFixed(2)}</p>
                    <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d] border-2 border-[#15803d] hover:bg-white hover:text-[#15803d]  transition-all duration-300 ease-in">Checkout Now</button>
                  </div>

                </div>

              </div>
            ) :
            (<div className=' w-screen h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-6'>
              <h1 className=' text-xl font-semibold'>Cart Empty</h1>
              <NavLink to={"/"}>
                <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">SHOP NOW</button>
              </NavLink>
            </div>)
        }
      </div>
    </>
  )
}