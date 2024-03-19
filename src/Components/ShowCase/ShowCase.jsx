import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/img5.jpeg';
export const ShowCase = () => {
  return (
    <section className="mt-[110px] ">
      <div className="title text-center ">
        <h4 className="text-[16px] leading-[24px] font-[380] text-[#86371C] uppercase border-b border-b-[#86371C] w-[124px] mx-auto px-3 font-[Font1] ">
          Showcase
        </h4>

        <h2 className=" md:w-[501px] md:mx-auto text-[44px] leading-[60px] font-[400] text-[#270A05] mt-[15px] font-[Font2] ">
          Our Chefs New Creations
        </h2>

        <p className="text-[18px] leading-[32px] font-[400] text-[#031811B3] md:w-[674px] md:mx-auto mt-[15px] px-3 font-[Font3]">
          Behold the extraordinary creations born from the synergy of our users ingenuity and the
          transformative power of AI, a testament to boundless innovation.
        </p>
      </div>

      <ul className="mt-[40px] flex flex-wrap md:justify-evenly md:gap-10 px-5 md:px-0 ">
        <li className="h-[54px] w-[102px] hover:border hover:border-[#86371C] hover:rounded-[24px] pl-[30px] pt-[10px]">
          <a
            className="text-[#031811] hover:text-[#86371C] text-[22px] leading-[30px] font-[400]"
            href="#"
          >
            All
          </a>
        </li>
        <li className="h-[54px] w-[102px] hover:border hover:border-[#86371C] hover:rounded-[12px] p-3">
          <a
            className="text-[#031811] hover:text-[#86371C] text-[22px] leading-[30px] font-[400]"
            href="#"
          >
            Burger
          </a>
        </li>
        <li className="h-[54px] w-[102px] hover:border hover:border-[#86371C] hover:rounded-[12px] p-3">
          <a
            className="text-[#031811] hover:text-[#86371C] text-[22px] leading-[30px] font-[400]"
            href="#"
          >
            Drinks
          </a>
        </li>
        <li className="h-[54px] w-[102px] hover:border hover:border-[#86371C] hover:rounded-[12px] p-3">
          <a
            className="text-[#031811] hover:text-[#86371C] text-[22px] leading-[30px] font-[400]"
            href="#"
          >
            Pizza
          </a>
        </li>
        <li className="h-[54px] w-[102px] hover:border hover:border-[#86371C] hover:rounded-[12px] p-3">
          <a
            className="text-[#031811] hover:text-[#86371C] text-[22px] leading-[30px] font-[400]"
            href="#"
          >
            Dinner
          </a>
        </li>
        <li className="h-[54px] w-[102px] hover:border hover:border-[#86371C] hover:rounded-[12px] p-3">
          <a
            className="text-[#031811] hover:text-[#86371C] text-[22px] leading-[30px] font-[400]"
            href="#"
          >
            Lunch
          </a>
        </li>
        <li className="h-[54px] w-[102px] hover:border hover:border-[#86371C] hover:rounded-[12px] p-3">
          <a
            className="text-[#031811] hover:text-[#86371C] text-[22px] leading-[30px] font-[400]"
            href="#"
          >
            Cookies
          </a>
        </li>
        <li className="h-[54px] w-[102px] hover:border hover:border-[#86371C] hover:rounded-[12px] p-3">
          <a
            className="text-[#031811] hover:text-[#86371C] text-[22px] leading-[30px] font-[400]"
            href="#"
          >
            Bakery
          </a>
        </li>
      </ul>

      {/* gallery */}

      <div className="container mx-auto mt-[35px]">
        <div className="flex flex-wrap justify-center gap-5">
          {/* First Row */}
          <div className="w-full md:w-[424px] h-[348px] flex gap-10 px-2">
            <img
              src={img1}
              alt="Image 1"
              className="w-[100%] h-[348px] rounded-[12px] "
            />
          </div>
          <div className="w-full md:w-[872px] h-[348px] px-2">
            <img
              src={img2}
              alt="Image 2"
              className="w-[100%] h-[348px] rounded-[12px] "
            />
          </div>
          {/* Second Row */}
          <div className=" w-full md:w-[312px] h-[348px] flex gap-10 px-2">
            <img
              src={img3}
              alt="Image 1"
              className="w-[100%] h-[348px] rounded-[12px] "
            />
          </div>
          <div className=" w-full md:w-[536px] h-[348px] flex gap-10 px-2">
            <img
              src={img4}
              alt="Image 1"
              className="w-[100%] h-[348px] rounded-[12px]  "
            />
          </div>
          <div className="w-full md:w-[424px] h-[348px] flex gap-10 px-2">
            <img
              src={img5}
              alt="Image 1"
              className="w-[100%] h-[348px] rounded-[12px] "
            />
          </div>
     
        </div>
      </div>
    </section>
  );
};
