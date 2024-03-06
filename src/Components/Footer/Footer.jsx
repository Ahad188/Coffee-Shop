import "./footer.css";
import logo from "../../assets/flogo.png";
import { TiSocialLinkedinCircular,TiSocialTwitterCircular } from "react-icons/ti";
import { CiFacebook } from "react-icons/ci";
export const Footer = () => {
  return (
    <footer className=" ">
      <div className=" w-[400px] md:w-[1366px] h-[110px]  mx-auto   md:flex md:justify-between md:items-center px-28 md:px-0">
        <a href="#" className="">
          <img src={logo} alt="" />
        </a>
        <ul className="flex gap-6 mt-2 md:mt-0">
          <li>
            <a className="text-[16px] leading-[16px] font-[400] text-white hover:underline"  href="#">Team</a>
          </li>
          <li>
            <a  className="text-[16px] leading-[16px] font-[400] text-white hover:underline" href="#">Privacy</a>
          </li>
          <li>
            <a className="text-[16px] leading-[16px] font-[400] text-white hover:underline"  href="#">Cookies</a>
          </li>
        </ul>

        <ul className="flex px-5">
          <a href="#"><TiSocialLinkedinCircular className="text-white text-[40px]" /></a>
          <a href="#"><CiFacebook className="text-white text-[40px]"/></a>
          <a href="#"><TiSocialTwitterCircular className="text-white text-[40px]" /></a>
        </ul>
      </div>
    </footer>
  );
};
