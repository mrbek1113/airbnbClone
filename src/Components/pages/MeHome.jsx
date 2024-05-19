import { RangeSlider } from 'flowbite-react'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/UserContext'


const MeHome = () => {
  const [count,setCount]=useState(0)
  const {imgs}=useContext(UserContext)

  return (
    <div className='flex items-center justify-evenly mt-[100px]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-[50px] text-red-500 font-bold'>Airbnb it.</h1>
        <h1 className='text-[40px]'>You could earn</h1>
        <span className='text-[80px]'>₽{count}</span>
        <input onInput={(e)=>setCount(e.target.value)} type='range' value={count}  max={1370} min={46}  className='w-[400px] h-[40px] ' />
        <a href="#">Learn how we estimate your earnings</a>
      </div>
      <div>
        <img className='w-[400px] h-[400px] rounded-xl' src={imgs[0]?.img} alt="" />
      </div>
    </div>
  )
}

export default MeHome
