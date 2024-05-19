
import  {useState,useEffect,createContext} from 'react'
import axios from 'axios'

export const UserContext=createContext()
const UserProvider=({children})=>{
  
    const [data, setData] = useState([]);
    const [imgs, setImgs] = useState([]);



    const url = "https://1c09cdff245b1f0c.mokky.dev/cards";
    const urlImgs = "https://1c09cdff245b1f0c.mokky.dev/cardimgs";
  
    const getDatas = async () => {
      await axios.get(url).then((res) => setData(res.data));
    };
  
    const getImages = async () => {
      await axios.get(urlImgs).then((res) => setImgs(res.data ));
    };
  
    useState(() => {
      getDatas();
      getImages();
    }, []);

return (
    <UserContext.Provider value={{data,imgs}}>
        {children}
        </UserContext.Provider>
)
  
}
export default UserProvider
