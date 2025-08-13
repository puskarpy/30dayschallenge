import React from 'react'
import { useState } from 'react'

export default function MergeArray() {

    const [array1, setArray1] = useState('')
    const [array2, setArray2] = useState('')
    const [mergedArray, setMergedArray] = useState([])

    const handleMerge = () => {
        const firstArray = array1.replace(/\s+/g, '').split(',').map(Number).filter(num => !isNaN(num))
        const secondArray = array2.replace(/\s+/g, '').split(',').map(Number).filter(num => !isNaN(num))

        setMergedArray([...new Set([...firstArray, ...secondArray])])
    }

  return (
      <div className='w-full p-12 flex justify-center'>
        <div className='max-w-4xl flex flex-col gap-4'>
            <h1 className='font-bold text-4xl'>Merge Array</h1>
            <div className='flex flex-col gap-6'>
                <input type="text" value={array1} onChange={e => setArray1(e.target.value)} className='bg-gray-100 p-2 outline-1 outline-blue-500 rounded-md placeholder:text-gray-400 placeholder:text-sm' placeholder='Enter the array. Eg. 22,43,45,...' />
                <input type="text" value={array2} onChange={e => setArray2(e.target.value)} className='bg-gray-100 p-2 outline-1 outline-blue-500 rounded-md placeholder:text-gray-400 placeholder:text-sm' placeholder='Enter the array. Eg. 22,43,45,...' />
                <button onClick={handleMerge} className='bg-blue-600 text-white mx-auto px-4 py-2 cursor-pointer rounded-md '>Merge</button>
            </div>
        <div className='mt-4'>
            
            <p>  
                {
                    mergedArray.length > 0 && mergedArray.map((elem, key)=>(
                        <span className='bg-blue-50 py-2 px-4 border-r-[1px] border-blue-400/50' key={key}>{elem}</span>
                    ))
                }
            </p>
        </div>
        </div>
    </div>
  )
}
