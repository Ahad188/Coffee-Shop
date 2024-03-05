import logo from "../../assets/Grouplogo.png";
import { FaAngleDown, FaSearch, FaHeart, FaCartPlus, FaRegUser } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="w-[100%] md:w-[1366px] md:mx-auto h-[32px] my-[27px]">
      <nav className="flex justify-between items-center">
        <ul className="flex gap-[50px] w-[408px] h-[24px]">
          <li>
            <a className="text-[16px] leading-[24px] font-[500] text-[#270A05]" href="#">
              Home
            </a>
          </li>
          <li>
            <a
              className="text-[16px] leading-[24px] font-[500] text-[#270A05] flex items-center gap-2"
              href="#"
            >
              Page <FaAngleDown />
            </a>
          </li>
          <li>
            <a
              className="text-[16px] leading-[24px] font-[500] text-[#270A05] flex items-center gap-2"
              href="#"
            >
              Menu <FaAngleDown />
            </a>
          </li>
          <li>
            <a className="text-[16px] leading-[24px] font-[500] text-[#270A05]" href="#">
              Contact Us
            </a>
          </li>
        </ul>
        <a href="#">
          <img className="h-[31.28px] w-[202.47px]" src={logo} alt="logo" />
        </a>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">
              <FaSearch />
            </a>
          </li>
          <li>
            <a className="relative" href="#">
              <FaHeart />{" "}
              <span className="badge absolute top-[-20px] left-[3px] bg-[#270A05] text-white">
                5
              </span>{" "}
            </a>
          </li>

          <li>
            <a className="relative" href="#">
              <FaCartPlus />{" "}
              <span className="badge absolute top-[-20px] left-[3px] bg-[#270A05] text-white">
                4
              </span>{" "}
            </a>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          <li className="bg-[#270A05] text-cyan-50 rounded-2xl">
            <a href="#">
              <FaRegUser className="w-[30px] h-[30px]  rounded p-2" />
            </a>
          </li>
          <li>
               <a className="text-[16px] leading-[24px] font-[500] text-[#270A05]" href="#">Sing In</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
