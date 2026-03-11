import React from "react";
import Heading from "../Heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import testimonialsList from "./TestimonialsList";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
const Testimonials = () => {
  return (
    <section className="max-w-350 m-auto px-10 my-16">
      <Heading highlight={"Customers"} text={"Sayings"} />

      <div className="flex gap-2 justify-end py-5">
        <button className="custom-prev  h-8 w-8 bg-zinc-200 flex justify-center items-center hover:cursor-pointer text-sm text-zinc-800 hover:bg-amber-600">
          <FaLessThan />
        </button>
        <button className="custom-next h-8 w-8 bg-zinc-200 flex justify-center items-center hover:cursor-pointer text-sm text-zinc-800 hover:bg-amber-600">
          <FaGreaterThan />
        </button>
      </div>
      <div>
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={40}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {testimonialsList.map((customer) => {
            return (
              <SwiperSlide>
                <div className=" flex ">
                  <div
                    key={customer.id}
                    className="bg-zinc-200 p-6 rounded-xl shadow-md"
                  >
                    <div className="flex gap-5 ">
                      
                      <div className="w-16 h-16 rounded-full outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                      <img
                        className=" w-full h-full "
                        src={customer.icon}
                        alt=""
                      />
                        </div>
                       
                      <div>
                        <h3>{customer.name}</h3>
                        <p>{customer.username}</p>
                        <p className=" flex  text-amber-600 mt-2">
                          {Array.from(
                            { length: customer.rating },
                            (_, index) => (
                              <FaStar key={index} />
                            )
                          )}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p>{customer.para}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
