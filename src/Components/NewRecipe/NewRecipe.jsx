import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import sw1 from "../../assets/swiper1.png";
import sw2 from "../../assets/swiper2.png";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

export const NewRecipe = () => {
  return (
    <div className="mt-[110px] px-1 md:px-0 ">
      <div className="md:w-[450px] ms-10 md:ms-0">
        <h4 className="sub-title text-[16px] text-[#86371C] font-[380] font-[Font1.lamoda] ">New Recipe</h4>
        <h2 className="text-[#270A05] text-[44px] leading-[60px] font-[400] font-[Font2]">
          Taste Our New Recipe
        </h2>

        <p className="text-[16px] font-[400] text-[#270A05] opacity-[0.6] my-10 font-[Font3] ">
        
          Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut
          vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae
          tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec
          quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. 
        </p>

        <p className="text-[16px] font-[400] text-[#270A05] opacity-[0.6] my-10  font-[Font3]">
       
          There are many variations of passages of Lorem Ipsum form any injected humour, or
          randomised words which don t look slightly believable.
        </p>

        <div className="flex gap-8">
          <a href="#">
            <CiCircleChevLeft className="text-[30px]" />
          </a>
          <a href="#">
            <CiCircleChevRight className="text-[30px]" />
          </a>
        </div>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-20 md:mt-[-26%]"
      >
        <SwiperSlide className="swi ">
          <img className="h-[300px] md:h-[471px] w-[480px] md:w-[375px] " src={sw1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swi ">
          <img className="h-[300px] md:h-[471px] w-[480px] md:w-[375px]  " src={sw2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swi  ">
          <img className="h-[300px] md:h-[471px] w-[480px] md:w-[375px] " src={sw1} alt="" />
        </SwiperSlide>
         
        <SwiperSlide className="swi ">
          <img className="h-[300px] md:h-[471px] w-[480px] md:w-[375px]  " src={sw2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swi  ">
          <img className="h-[300px] md:h-[471px] w-[480px] md:w-[375px] " src={sw1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
