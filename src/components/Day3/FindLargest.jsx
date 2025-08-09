import React from 'react'
import { useState } from 'react'

export default function FindLargest() {

    const [array, setArray] = useState([])
    const [largest, setlargest] = useState('')

    const handleOnCLick = () => {
        const newArray =  array
        .trim()
        .split(',')
        .map(num => Number(num.trim()))
        .filter(num => num != isNaN(num));
        if(newArray.length === 0){
            setlargest('No valid numbers entered')
        }
        setlargest(Math.max(...newArray))
    }
  return (
    <div className='w-full p-12 flex justify-center'>
        <div className='max-w-4xl flex flex-col gap-4'>
            <h1 className='font-bold text-4xl'>Find Largest</h1>
            <div className='flex flex-col gap-6'>
                <input type="text" value={array} onChange={e => {setArray(e.target.value)}} className='bg-gray-200 p-2 outline-1 outline-blue-500 rounded-md placeholder:text-gray-400 placeholder:text-sm' placeholder='Enter the array. Eg. 22,43,45,...' />
                <button onClick={handleOnCLick} className='bg-blue-600 text-white mx-auto px-4 py-2 cursor-pointer rounded-md '>Find</button>
            </div>
        <div className='mt-4'>
            The largest element is {largest}.
        </div>
        </div>
    </div>
  )
}
