import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../Context/UserContext'


const LivePage = () => {
    const params=useParams()
    const {imgs}=useContext(UserContext)
    const [img,setImg]=useState()
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`https://1c09cdff245b1f0c.mokky.dev/cards/${params.id}`)
        .then(res=>setData(res.data))
    },[params])

    
    
    return(
        <div className='flex items-center justify-center flex-col w-full h-[100vh] mt-[100px]'>        

<div className="w-[70%]  grid grid-cols-4 grid-rows-2 gap-4">
    <div className="h-[500px] col-span-2 row-span-2"> 
<img src={imgs[0]?.img} className='w-full h-full object-cover rounded-2xl' alt="" />
    </div>
    <div className="col-start-3">
<img src={imgs[0]?.img} className='w-full h-full object-cover rounded-2xl' alt="" />
    </div>
    <div className="col-start-4"> 
<img src={imgs[0]?.img} className='w-full h-full object-cover rounded-2xl' alt="" />
    </div>
    <div className="col-start-3 row-start-2">
<img src={imgs[0]?.img} className='w-full h-full object-cover rounded-2xl' alt="" />
    </div>
    <div className="col-start-4 row-start-2">
<img src={imgs[0]?.img} className='w-full h-full object-cover rounded-2xl' alt="" />
    </div>
</div>
    
        <div className=' flex  w-[1200px] mx-auto mt-[30px]'>
            <div className='w-[48%]'>
                <h1 className='border-b-2 text-[36px] py-6'>{data.name}</h1>
                <h1 className='border-b-2 py-6 text-xl'>{data.desc}</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dolore dolorum corrupti consectetur? Ipsam veritatis dolore officia. Modi distinctio corrupti dolor? Veritatis nesciunt quisquam deleniti adipisci harum quod, vero dolorem?</span>
            </div>
            <div className='w-[48%] flex  justify-end'>
                <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_6px_16px] rounded-2xl flex flex-col items-center justify-between py-6  w-[340px] h-[180px]'>
                    <h1 className='text-4xl font-bold'>{data.price}</h1>
                    <h1 className='text-xl'>{data.name}</h1>
                    <button className='w-[80%] outline-none bg-red-600 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_6px_6px] hover:w-[90%] hover:h-11 active:w-[80%] active:h-auto rounded-md text-white text-2xl h-[45px]'>Request</button>
                </div>
            </div>
        </div>
        </div>
    )



    }

export default LivePage
