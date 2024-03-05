import { useState } from "react";
import logo from "../../assets/Grouplogo.png";
import { FaAngleDown, FaSearch, FaHeart, FaCartPlus, FaRegUser,FaBars  } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export const Header = () => {
  
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
         setIsMenuOpen(!isMenuOpen);
     };
 
     // Define your menu items as an array of objects
     const menuItems = [
         { label: 'Home', link: '#' },
         { label: 'Page', link: '#', dropdown: true },
         { label: 'Menu', link: '#', dropdown: true },
         { label: 'Contact Us', link: '#' },
     ];
      
  return (
 
<div className="w-[100%] md:w-[1366px] md:mx-auto h-[32px] my-[27px] px-5 md:px-0">
<nav className="flex justify-between gap-2 md:gap-10 items-center">
    

    {isMenuOpen ? <FaXmark className="md:hidden" onClick={toggleMenu} /> : <FaBars className="md:hidden" onClick={toggleMenu} />}



    <ul className={`gap-[50px] w-[100px] md:w-[408px] h-0 md:h-[24px] ${isMenuOpen ? 'block ms-[-30px] top-[14%]' : 'hidden'} md:flex md:items-center`}>
        {menuItems.map((menuItem, index) => (
            <li key={index}>
                <a className="text-[16px] leading-[24px] font-[500] text-[#270A05] flex items-center gap-2 hover:underline" href={menuItem.link}>
                    {menuItem.label} {menuItem.dropdown && <FaAngleDown />}
                </a>
            </li>
        ))}
    </ul>
    <a href="#">
        <img className="md:h-[31.28px] w-[102px] md:w-[202.47px]" src={logo} alt="logo" />
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
    <ul className="flex items-center gap-4 md:gap-3">
        <li className="bg-[#270A05] text-cyan-50 rounded-2xl hidden md:block ">
            <a href="#">
                <FaRegUser className="w-[30px] h-[30px]  rounded p-2" />
            </a>
        </li>
        <li>
            <a className="text-[16px] leading-[24px] font-[500] text-[#270A05]" href="#">Sign In</a>
        </li>
    </ul>
</nav>
</div>
 
  );
};
