import './about.css'
import { FaRegCirclePlay } from "react-icons/fa6";
export const About = () => {
  return (
    <div className=" md:w-[1366px] mx-auto  mt-20">
          <div className="md:flex md:justify-evenly gap-10 items-center text-center">
               <div className="about-p  mx-auto md:mx-0 mb-5 md:mb-0">
                         <div className="flex items-center gap-3 ms-3 pt-[250px]">
                       <a href="#">  <FaRegCirclePlay className='text-[#F2EFDF] text-[30px]'/></a>
                              <h3 className='text-[24px] font-[400] text-[#F2EFDF]'>Play Intro Video</h3>
                         </div>
               </div>
               <ul className="md:flex md:justify-evenly  w-[400px] md:w-[100%] mx-auto ">
                    <li className="w-[326px] h-[200px] p-[30px] mx-auto text-center mb-5 hover:shadow-2xl ">
                         <h4 className="text-[24px] leading-[30px] font-[400] text-[#270A05] mb-[27px]">our opening Hours</h4>
                         <span className="text-[16px] leading-[24px] font-[400] text-[#270A05]">Mon-Sat: 07:00 - 18:00 </span> <br />
                         <span className="text-[16px] leading-[24px] font-[400] text-[#270A05]">Only Sun: 09:00 - 14:00 </span>
                    </li>
                    <li className="w-[326px] h-[200px] p-[30px] mx-auto text-center hover:shadow-2xl">
                         <h4 className="text-[24px] leading-[30px] font-[400] text-[#270A05] mb-[27px]">our Live Location</h4>
                         <span className="text-center text-[16px] leading-[24px] font-[400] text-[#270A05]"> 848 A 28TH ST, Brooklyn New York, UK  </span>
                    </li>
                    <li className="w-[226px] h-[200px]   mx-auto text-center md:text-right hover:shadow-2xl pr-[20px] pt-[30px]">
                         <h4 className="text-[24px] leading-[30px] font-[400] text-[#270A05] mb-[27px]">Book A Table Now</h4>
                         <span className="text-[#270A05] text-[16px] leading-[24px] font-[400]">+1 452-754-6579  </span> <br />
                         <span className="text-[#270A05] text-[16px] leading-[24px] font-[400]">+1 318-254-6849 </span> 
                    </li>
                     
               </ul>
          </div>
    </div>
  )
}
