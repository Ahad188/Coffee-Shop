import m1 from "../../assets/menu1.png";
import m2 from "../../assets/menu2.png";
import m3 from "../../assets/menu3.png";
import m4 from "../../assets/menu4.png";
import price from "../../assets/price.png";
export const CoffeeMenu = () => {
  return (
    <section className="mt-[110px]">
      <div className="title text-center">
        <h4 className="subtitle text-[#86371C] text-[16px] font-[380]">Coffee Menu</h4>
        <h2 className="text-[44px] text-[#270A05] font-[400] leading-[60px]">
          Unlocklive Coffee Menu
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-5 mt-[30px]">
        <div className="md:w-[668px] h-[144px] rounded-[15px] border border-gray-400 flex items-center gap-2 md:gap-10 px-2 md:px-8 hover:shadow-2xl">
          <img src={m1} alt="m1" />
          <div>
            <h4 className="font-[600] text-[24px] leading-[36px] text-[#270A05]">
              Double Espresso x2
            </h4>
            <p className="w-[302px] opacity-[0.6] text-[#270A05] leading-[24px] text-[14px] font-[400]">
              There are many variations of passages Lorem Ipsum form
            </p>
          </div>
          <img className="hover:bg-[#86371C] rounded-[50px]" src={price} alt="" />
        </div>
        <div className="md:w-[668px] h-[144px] rounded-[15px] border border-gray-400 flex items-center gap-2 md:gap-10 px-2 md:px-8 hover:shadow-2xl">
          <img src={m2} alt="m1" />
          <div>
            <h4 className="font-[600] text-[24px] leading-[36px] text-[#270A05]">
              Hazelnut Heaven Latte
            </h4>
            <p className="w-[302px] opacity-[0.6] text-[#270A05] leading-[24px] text-[14px] font-[400]">
              There are many variations of passages Lorem Ipsum form
            </p>
          </div>
          <img className="hover:bg-[#86371C] rounded-[50px]" src={price} alt="" />
        </div>
        <div className="md:w-[668px] h-[144px] rounded-[15px] border border-gray-400 flex items-center gap-3 md:gap-10 px-2 md:px-8 hover:shadow-2xl">
          <img src={m3} alt="m1" />
          <div>
            <h4 className="font-[600] text-[24px] leading-[36px] text-[#270A05]">
              Salted Caramel Cold Brew
            </h4>
            <p className="w-[302px] opacity-[0.6] text-[#270A05] leading-[24px] text-[14px] font-[400]">
              There are many variations of passages Lorem Ipsum form
            </p>
          </div>
          <img className="hover:bg-[#86371C] rounded-[50px]" src={price} alt="" />
        </div>
        <div className=" md:w-[668px] h-[144px] rounded-[15px] border border-gray-400 flex items-center gap-3 md:gap-10 px-2 md:px-8 hover:shadow-2xl">
          <img src={m4} alt="m1" />
          <div>
            <h4 className="font-[600] text-[24px] leading-[36px] text-[#270A05]">
              Coconut Cream Delight (Summer)
            </h4>
            <p className="w-[302px] opacity-[0.6] text-[#270A05] leading-[24px] text-[14px] font-[400]">
              There are many variations of passages Lorem Ipsum form
            </p>
          </div>
          <img className="hover:bg-[#86371C] rounded-[50px]" src={price} alt="" />
        </div>
      </div>
      <div className="w-[180px] h-[52px]  mx-auto mt-16 ">
        <a
          href="#"
          className=" w-[162px] h-[52px] rounded-[12px] hover:bg-[#270A05] hover:text-white links"
        >
          View All Menu
        </a>
      </div>
    </section>
  );
};
