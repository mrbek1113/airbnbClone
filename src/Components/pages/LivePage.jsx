import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../Context/UserContext'

const LivePage = () => {
    const params = useParams()
    const { imgs } = useContext(UserContext)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://1c09cdff245b1f0c.mokky.dev/cards/${params.id}`)
            .then(res => setData(res.data))
    }, [params.id])

    return (
        <div className='flex items-center justify-center flex-col w-full min-h-screen mt-[100px] px-4'>
            <div className="w-full lg:w-[70%] grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="h-[250px] lg:h-[500px] col-span-2 row-span-2">
                    <img src={imgs[0]?.img} className='w-full h-full object-cover rounded-2xl' alt="" />
                </div>
                {imgs.slice(1, 5).map((img, index) => (
                    <div key={index} className="h-[250px] lg:h-auto">
                        <img src={img?.img} className='w-full h-full object-cover rounded-2xl' alt="" />
                    </div>
                ))}
            </div>

            <div className='flex flex-col lg:flex-row w-full lg:w-[70%] mx-auto mt-[30px] gap-10 lg:gap-0'>
                <div className='w-full lg:w-[48%]'>
                    <h1 className='border-b-2 text-[24px] lg:text-[36px] py-4 lg:py-6'>{data.name}</h1>
                    <h1 className='border-b-2 py-4 lg:py-6 text-lg lg:text-xl'>{data.desc}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dolore dolorum corrupti consectetur? Ipsam veritatis dolore officia. Modi distinctio corrupti dolor? Veritatis nesciunt quisquam deleniti adipisci harum quod, vero dolorem?</p>
                </div>
                <div className='w-full lg:w-[48%] flex justify-center lg:justify-end'>
                    <div className='shadow-[rgba(0,0,0,0.24)_0px_6px_16px] rounded-2xl flex flex-col items-center justify-between py-6 w-full lg:w-[340px] h-[180px]'>
                        <h1 className='text-4xl font-bold'>{data.price}</h1>
                        <h1 className='text-xl'>{data.name}</h1>
                        <button className='w-[80%] outline-none bg-red-600 hover:shadow-[rgba(0,0,0,0.4)_0px_6px_6px] hover:w-[90%] hover:h-11 active:w-[80%] active:h-auto rounded-md text-white text-2xl h-[45px] transition-all duration-300'>Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LivePage
