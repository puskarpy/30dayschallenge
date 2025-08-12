import React from 'react'
import { useState } from 'react'

export default function FilterNumber() {

    const [array, setArray] = useState('')
    const [threshold, setThreshold] = useState('')
    const [filteredArray, setFilteredArray] = useState([])

    const handleFilterArray = () => {
        if(isNaN(Number(threshold)))
            {
                alert("Enter a number.") 
                return
            } 
        const cleanArray = array.trim().replace(/\s+/g, '').split(',').map(Number)
        setFilteredArray(cleanArray.filter(num => num > Number(threshold)))
    } 


  return (
    <div className='w-full p-12 flex justify-center'>
        <div className='max-w-4xl flex flex-col gap-4'>
            <h1 className='font-bold text-4xl'>Filter</h1>
            <div className='flex flex-col gap-6'>
                <input type="text" value={array} onChange={e => {setArray(e.target.value)}} className='bg-gray-100 p-2 hover:outline-1 hover:outline-blue-500 rounded-md placeholder:text-gray-400 placeholder:text-sm transition-all ease-out' placeholder='Enter the array. Eg. 22,43,45,...' />
                <input type="text" value={threshold} onChange={e => {setThreshold(e.target.value)}} className='bg-gray-100 p-2 hover:outline-1 hover:outline-blue-500 rounded-md placeholder:text-gray-400 placeholder:text-sm transition-all ease-out' placeholder='Threshold...' />
                <button onClick={handleFilterArray} className='bg-blue-600 text-white mx-auto px-4 py-2 cursor-pointer rounded-md '> Filter {`> ${threshold || 0}`}</button>
            </div>
        <div className='mt-4'>
            The Filtered array is [{filteredArray.join(',')}]
        </div>
        </div>
    </div>
  )
}
