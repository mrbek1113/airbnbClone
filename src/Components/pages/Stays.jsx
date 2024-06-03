import React, { useContext, useEffect, useState, useRef } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiPaperclip } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { UserContext } from "../../Context/UserContext";
import { useHref, useNavigate } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import axios from "axios";

const Housing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, imgs, search, category } = useContext(UserContext);
  const navigate = useNavigate();
  const [likeData, setLikeData] = useState([]);
  const [actionId, setActionId] = useState([]);
  const modalRef = useHref(null);

  useEffect(() => {
    axios
      .get("https://1c09cdff245b1f0c.mokky.dev/likePage")
      .then((res) => setLikeData(res.data));
  }, []);

  useEffect(() => {
    const likedIds = likeData.map((el) => el.id);
    setActionId(likedIds);
  }, [likeData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const likeClick = (id) => {
    const product = data.find((product) => product.id === id);
    if (!product) return;

    if (actionId.includes(id)) {
      axios
        .delete(`https://1c09cdff245b1f0c.mokky.dev/likePage/${id}`)
        .then(() => {
          setActionId((prev) => prev.filter((itemId) => itemId !== id));
        });
    } else {
      axios
        .post("https://1c09cdff245b1f0c.mokky.dev/likePage", product)
        .then(() => {
          setActionId((prev) => [...prev, id]);
        });
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const MyModalContent = () => {
    return (
      <div className="bg-white p-[25px] relative z-10 flex items-start flex-col justify-between sm:w-[600px] md:w-[700px] md:h-[500px] lg:w-[800px] h-auto rounded-lg">
        <div className="w-full flex items-center gap-6">
          <img
            className="w-[150px] h-[150px] object-cover rounded-lg"
            src={imgs[0]?.img}
            alt=""
          />
          <h1 className="text-xl font-bold">Share this experience</h1>
        </div>
        <div className="w-full flex flex-col md:flex-row mt-8 items-center justify-between">
          <div className="w-[48%] flex flex-col gap-3">
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg
                className="h-8 w-8 text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
              </svg>
              <span>Copy Link</span>
            </nav>
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg
                className="h-8 w-8 text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                <line x1="12" y1="11" x2="12" y2="11.01" />
                <line x1="8" y1="11" x2="8" y2="11.01" />
                <line x1="16" y1="11" x2="16" y2="11.01" />
              </svg>
              <span>Messages</span>
            </nav>
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg
                className="h-8 w-8 text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="10" y1="14" x2="21" y2="3" />
                <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
              </svg>
              <span>Messenger</span>
            </nav>
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg
                className="h-8 w-8 text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
              </svg>
              <span>Twitter</span>
            </nav>
          </div>

          <div className="w-[48%] flex flex-col gap-3">
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg
                className="h-8 w-8 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8M10 12h4"
                />
              </svg>
              <span>Email</span>
            </nav>
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg
                className="h-8 w-8 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42A16.29 16.29 0 0 0 12 2C6.6 2 2.02 6.14 1.03 11.21a15.94 15.94 0 0 0-.02 5.58c.92 4.63 4.71 8.19 9.46 8.19a15.48 15.48 0 0 0 4.86-.77l1.36-.49a1 1 0 0 0 .57-.74 1 1 0 0 0-.26-.86L14.5 18a1 1 0 0 1-.14-1.41l1.28-1.49a8.79 8.79 0 0 0 3.67-7.24V7a1 1 0 0 0-.73-.96A15.93 15.93 0 0 0 12 5a11.7 11.7 0 0 0-2.22.19A1 1 0 0 0 9.5 6.59a1 1 0 0 0 .64.77A7.75 7.75 0 0 1 12 7a13.91 13.91 0 0 1 8.75 3.32 1 1 0 0 1-.02 1.4 11.28 11.28 0 0 0-2.18 3.59 1 1 0 0 0 .73 1.26 1 1 0 0 0 1.29-.61 13.23 13.23 0 0 1 2.56-4.26c.34-.36.67-.77.96-1.2a1 1 0 0 0-.57-1.53z" />
              </svg>
              <span>WhatsApp</span>
            </nav>
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg
                className="h-8 w-8 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>Facebook</span>
            </nav>
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg
                className="h-8 w-8 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
              <span>More</span>
            </nav>
          </div>
        </div>
        <button
          className="absolute top-5 right-[30px] bg-red-500 px-4 py-2 rounded-lg"
          onClick={toggleModal}
        >
          X
        </button>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="w-[90%] mt-5 flex items-center gap-1 flex-wrap mx-auto">
        {data
          ?.filter(
            (product) =>
              product.city.toLowerCase().includes(search) &&
              product.category.toLowerCase().includes(category.toLowerCase())
          )
          .map((product) => {
            return (
              <div
                className="relative sm:w-[280px] sm:h-[400px] w-[100%] p-[5px] h-[100] rounded-2xl"
                key={product.id}
              >
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{ delay: 3000 }}
                  pagination={{ clickable: true }}
                >
                  {imgs?.map((img) => (
                    <SwiperSlide className="w-10" key={img.id}>
                      <img
                        className="w-full h-[320px] rounded-2xl object-cover"
                        src={img?.img}
                        alt="experience"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <h1>{product.name}</h1>
                <h1>{product.price}</h1>
                <h1>{product.city}</h1>
                <button
                  onClick={() => navigate(`/navigate/${product.id}`)}
                  className="absolute z-20 bg-white text-2xl w-[60px] top-[20px] left-[20px] flex items-center justify-center rounded-2xl"
                >
                  Live
                </button>
                <div>
                  <button
                    onClick={() => likeClick(product.id)}
                    className={`box-border absolute z-20 bg-white text-2xl w-[40px] h-[40px] top-[20px] right-[70px] flex items-center justify-center rounded-2xl`}
                  >
                    <IoIosHeartEmpty
                      className={`${
                        actionId.includes(product.id)
                          ? "bg-red-500 rounded-2xl text-white"
                          : ""
                      }`}
                    />
                  </button>
                  <button
                    onClick={toggleModal}
                    className="absolute z-20 bg-white text-2xl w-[40px] h-[40px] top-[20px] right-[20px] flex items-center justify-center rounded-2xl"
                  >
                    <FiPaperclip />
                  </button>
                </div>
              </div>
            );
          })}

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-60"
            onClick={toggleModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
              className="pointer-events-auto"
            >
              <MyModalContent />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Housing;
