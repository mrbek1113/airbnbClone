import { useContext, useEffect, useState } from "react";
import { UserContext } from '../../Context/UserContext';
import axios from "axios";

const Online = () => {
    const { imgs } = useContext(UserContext);
    const [data, setData] = useState([]);
  const url = 'https://1c09cdff245b1f0c.mokky.dev/carousel';
  
  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
    }, []);
    return (
        <div className="w-full flex flex-col h-full">
           <div className=' mt-8 flex  justify-center items-center  flex-wrap gap-6 h-[270px] overflow-hidden'>
            {imgs?.map((img) => (
                <div 
                    key={img.id} 
                    className='w-[400px] flex items-end p-[30px] h-[250px] rounded-lg' 
                    style={{ backgroundImage: `url(${img?.img})` }}>
                      <h1 className="text-2xl text-white font-bold">{data[0]?.name}</h1>
                    </div>
            ))}
        </div>

        </div>
    );
}

export default Online;
