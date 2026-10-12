"use client"

import { useState } from 'react'

export const CartCounter = () => {
  const [numero, setNumero] = useState(0);

  const handleIncrement = () => {
    setNumero(numero + 1);
  }

  const handleDecrement = () => {
    setNumero(numero - 1);
  }
  
  return (
    <>
    <span className="text-9xl">{numero}</span>      

      <div className="flex gap-3 mt-2">
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2" onClick={handleDecrement}>
          -1
        </button>
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2" onClick={handleIncrement}>
          +1
        </button>
      </div>
    </>
  )
}
