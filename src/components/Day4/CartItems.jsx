import Card from './Card'
import { useState } from 'react'

export default function CartItems() {
    const [items, setItems] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [isAscending, setIsAscending] = useState(true)

    const handleClick = () => {
        if (!name || !price || isNaN(price)) return;
        const item = {
            name : name,
            price : Number(price)
        }
        setItems(prevItems => [...prevItems, item]);
        setName('');
        setPrice('');

    }

    const handleSort = ()=>{
        const sorted = [...items].sort((a, b) => 
           isAscending?a.price - b.price : b.price - a.price )
        setItems(sorted)
        setIsAscending(prev => !prev)
    }

  return (
    <div className='w-full p-12'>
        <h1></h1>
        <div className='flex flex-col'>
            <div className='mb-8'>
                <input type="text" onChange={e => setName(e.target.value)} value={name} className='mr-4 bg-gray-100/50 p-2 outline-1 outline-blue-500 rounded-md placeholder:text-gray-400 placeholder:text-sm' placeholder='Enter item name' />
                <input type="text" onChange={e => setPrice(e.target.value)} value={price} className='mr-4 bg-gray-100/50 p-2 outline-1 outline-blue-500 rounded-md placeholder:text-gray-400 placeholder:text-sm' placeholder='Enter price' />
                <button onClick={handleClick} className='mr-4 bg-blue-600 text-white mx-auto px-4 py-2 cursor-pointer rounded-md '>
                    Add 
                </button>
                <button onClick={handleSort} className='bg-blue-600 text-white mx-auto px-4 py-2 cursor-pointer rounded-md '>
                    Sort {isAscending ? '↑' : '↓'}
                </button>
            </div>
            <div className='grid grid-cols-4 gap-8'>
                {
                    items.map((item, index)=>(
                        <Card key={index} items={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}
