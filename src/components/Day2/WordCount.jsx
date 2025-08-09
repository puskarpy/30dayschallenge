import React from 'react'
import { useState } from 'react'

export default function WordCount() {

    const [string, setString] = useState('')
    const [word, setWord] = useState('')
    const [count, setCount] = useState(0)

    const handleOnCLick = () => {
        setCount(string.trim().split(/\s+/).filter((word1) => word1 === word).length)
    }

  return (
    <div className='w-full flex justify-center p-12'>
        <div className='max-w-4xl flex flex-col gap-6'>
            <h1 className='font-bold text-4xl'>Count No of words in a string.</h1>
            <div className='flex flex-col gap-6'>
                <input type="text" value={string} onChange={e => setString(e.target.value)} className='bg-gray-200 p-2 outline-1 outline-blue-500 rounded-md placeholder:text-gray-400' placeholder='Enter the sentence here...' />
                <input type="text" value={word} onChange={e => setWord(e.target.value)} className='bg-gray-200 p-2 outline-1 outline-blue-500 rounded-md placeholder:text-gray-400' placeholder='Enter the word here..' />
                <button onClick={handleOnCLick} className='bg-blue-600 text-white mx-auto px-4 py-2 cursor-pointer rounded-md '>Check</button>
            </div>
            <div className='mt-4'>
                The word {word || ". . . . ."} appeared {count|| ". . . . ."} times.
            </div>
        </div>
    </div>
  )
}
