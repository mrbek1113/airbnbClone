import React, { useState, useEffect, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/image.png";
import { AiOutlineLike } from "react-icons/ai";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";

const Header = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const [count,setCount] =useState(0)
  const [countLike,setCountLike]=useState([])
  const navigate = useNavigate();
  const { setSearch } = useContext(UserContext);

  const [user, setUser] = useState([]);

  useEffect(()=>{
    axios.get('https://1c09cdff245b1f0c.mokky.dev/likePage')
    .then(res=>setCountLike(res.data))
    .then(setCount(countLike.length))
  })

  const [data, setData] = useState([]);

  const url = "https://1c09cdff245b1f0c.mokky.dev/carousel";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
    getUser();
  }, []);
  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.classList.add("hidden-navbar");
      } else {
        navbar.classList.remove("hidden-navbar");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const Modal = () => {
    setModalOpen(!ModalOpen);
  };
  const LittleModal = () => {
    return (
      <div className=" absolute rounded-md shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] top-[60px] right-[10px] flex items-start flex-col w-[200px]  bg-white h-[240px] p-[5px]">
        <button
          onClick={() => navigate("/register")}
          className="w-full text-center  border-b-2 py-5 border-black hover:bg-gray-300"
        >
          Register
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full text-center  border-b-2 py-5 border-black hover:bg-gray-300"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-full text-center  border-b-2 py-5 border-black hover:bg-gray-300"
        >
          Home
        </button>
        <button
          onClick={Modal}
          className="w-[70%] mx-auto py-1 px-2 bg-gray-300 mt-1"
        >
          Close
        </button>
      </div>
    );
  };

  const getUser = () => {
    axios
      .get("https://1c09cdff245b1f0c.mokky.dev/cards")
      .then((res) => setUser(res.data));
  };

  const MyModalContent = () => {
    return (
      <div className=" overflow-y-scroll  rounded-2xl p-[30px] w-full lg:w-[900px] h-[700px] bg-white">
        <button
          className=" fixed  bg-red-500 px-4 py-2 rounded-lg"
          onClick={toggleModal}
        >
          X
        </button>
        <div className="w-full h-[40px]  flex items-center mt-12 justify-start gap-5 px-4 py2 border-b-2 border-black">
          <h1>Language</h1>
          <h1>Currensy</h1>
        </div>
        <div className="flex w-[80%] bg-gray-300 px-4 py-3 rounded-2xl  my-[40px] items-center justify-between hover:bg-gray-200">
          <div>
            <h1>Translation</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, expedita.
            </span>
          </div>
          <button className="border rounded-2xl px-4 py-3 bg-red-500">
            Ru
          </button>
        </div>
        <section className=" text-2xl mb-6 font-bold">
          Choose a language and region
        </section>
        <div className=" flex items-center gap-3 justify-between flex-wrap">
          {data?.map((value) => (
            <div
              key={value.id}
              className="px-3 rounded-2xl py-2 w-[250px] h-[60px] hover:bg-gray-300"
            >
              <h1>{value.name}</h1>
              <span>{value.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="fixed z-30 top-0 bg-white w-full flex items-start justify-between px-2 py-2">
      <Link to={"/"} className="w-[200px]">
        <img src={Logo} alt="" className="w-[200px]" />
      </Link>
      <div
        className={` ${
          location.pathname === "/register" ? "hidden" : "block"
        } && ${
          location.pathname === "/login" ? "hidden" : "block"
        } flex flex-col items-center`}
      >
        <div
          id="navbar"
          className="lg:flex hidden items-center justify-center gap-4 text-black text-xl transition-all duration-300 bg-white"
        >
          <NavLink
            to="/"
            className="transition ease-in-out delay-150 hover:bg-gray-200 px-5 py-1 rounded-2xl"
          >
            Stays
          </NavLink>
          <NavLink
            to="/experiences"
            className="hover:bg-gray-200 px-2 py-1 rounded-2xl"
          >
            Experiences
          </NavLink>
          <NavLink
            to="/online"
            className="hover:bg-gray-200 px-2 py-1 rounded-2xl"
          >
            Online Experiences
          </NavLink>
        </div>
        <div className="text-[15px] gap-4 sticky top-0 flex border-2 border-black  xl:w-[1000px] xl:px-4 xl:py-1 justify-between px-2 py-1 items-center rounded-3xl mt-5">
          <div>
            <h1 className="font-bold hidden sm:block">Where</h1>
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none w-auto"
              type="text"
              placeholder="Search "
            />
          </div>
          <div className="hidden xl:block">
            <h1 className="font-bold">Check in</h1>
            <input
              className="outline-none"
              type="date"
              placeholder="Add dates"
            />
          </div>
          <div className="hidden xl:block">
            <h1 className="font-bold">Check out</h1>
            <input
              className="outline-none"
              type="text"
              placeholder="Add dates"
            />
          </div>
          <div
            className={`${
              location.pathname === "/experiences" ? "hidden" : "block"
            } hidden xl:block`}
          >
            <h1 className="font-bold">Who</h1>
            <input
              className="outline-none"
              type="text"
              placeholder="Add guests"
            />
          </div>
          <button className=" flex items-center justify-center text-white text-2xl rounded-[50%] bg-red-500 w-[40px] h-[40px] lg:w-[70px] lg:h-[70px]">
            <FiSearch />
          </button>
        </div>
      </div>
      <div className="flex items-center text-xl">
        <div  onClick={() => navigate("/likepage")} className="relative text-3xl px-3 py-3">
          <AiOutlineLike />
          <span className={`${count ===0 ? "hidden" :""} absolute top-0 right-0 bg-red-500 w-[30px] h-[30px] text-white rounded-2xl text-center text-[20px] `}>{count}</span>
        </div>
        <button
          onClick={() => navigate("/mehome")}
          className={` lg:flex hidden hover:bg-gray-200 px-3 py-2 rounded-2xl font-bold ${
            location.pathname === "/register" ? "hidden" : "block"
          } && ${location.pathname === "/login" ? "hidden" : "block"}`}
        >
          Airbnb your home
        </button>
        <button
          onClick={toggleModal}
          className=" lg:flex hidden hover:bg-gray-200 px-4 py-4 rounded-[50%]"
        >
          <BsGlobe2 />
        </button>
        <button
          onClick={Modal}
          className=" flex w-[100px] h-[40px]  items-center justify-evenly hover:bg-gray-200 px-2 py-1 rounded-2xl"
        >
          <GiHamburgerMenu />
          <FaUserAlt />
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-60">
          <div
            onClick={(e) => e.stopPropagation()}
            className="pointer-events-auto"
          >
            <MyModalContent />
          </div>
        </div>
      )}
      {ModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center ">
          <div
            onClick={(e) => e.stopPropagation()}
            className="pointer-events-auto"
          >
            <LittleModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
