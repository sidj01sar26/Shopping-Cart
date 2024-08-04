import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

export default function Product({ item }) {

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(item));
    toast.success("Item Added");
  }

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <>
      <div className=' w-full flex flex-col justify-between items-center hover:scale-[1.03] md:hover:scale-[1.05] transition duration-300 ease-in gap-3 p-4 rounded-xl border'>
        <div className=' font-semibold text-gray-700 text-lg truncate w-40 mt-1 text-left'>
          <p> {item.title.split(" ").slice(0, 2).join(" ") + "..."} </p>
        </div>
        <div>
          <p className=' w-40 font-normal text-[10px] text-gray-400 text-left'> {item.description.split(" ").slice(0, 10).join(" ") + "..."} </p>
        </div>
        <div className=' h-[180px]'>
          <img src={item.image} className=' h-full w-full' />
        </div>
        <div className=' flex justify-between items-center w-full mt-5'>
          <div>
            <p className=' text-green-500 font-semibold'> ${item.price} </p>
          </div>
          {
            cart.some((p) => p.id === item.id) ?
              (<button
                onClick={removeFromCart}
                className=' text-gray-700 border border-gray-700 font-semibold text-[12px] p-1 px-2 rounded-full uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
              >
                Remove Item</button>) :
              (<button
                onClick={addToCart}
                className=' text-gray-700 border border-gray-700 font-semibold text-[12px] p-1 px-2 rounded-full uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
              >Add to Cart</button>)
          }
        </div>

      </div>
    </>
  )
}