import React from 'react'

export default function Card({items, price}) {
  return (
    <div className='max-w-60 font-mono flex flex-col gap-4 p-4 shadow-md rounded-md bg-amber-300'>
        <h1 className='font-bold text-lg'>Item : {items || "Earbuds"}</h1>
        <p>Price : {price || 2000}</p>
    </div>
  )
}
