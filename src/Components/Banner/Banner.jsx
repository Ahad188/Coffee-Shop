import banner from '../../assets/banner.png'
import b1 from '../../assets/b1.png'
import b2 from '../../assets/b2.png'
import b3 from '../../assets/b3.png'
import './banner.css'

export const Banner = () => {
  return (
    <div className="w-[100%] md:w-[1366px] mx-auto px-2 md:px-0 ">
          <div className="md:grid md:grid-cols-2 ">
               <div className="pt-[56px] md:ps-[60px] px-4 md:px-0 overlay">
                    <h4 className='text-[16px] leading-[26px] font-[800] text-[#270A05]'>WELCOME TO OUR</h4>
                    <h2  className='text-[#270A05] text-[80px] md:text-[110px] leading-[124px] font-[400] font-[Font1]'>Unlocklive</h2>
                    <h4  className='text-[#270A05] text-[44px] leading-[60px] font-[400] font-[Font2]' >Elevating Your Coffee Experience </h4>
                    <p className='md:w-[669px] text-[16px] font-[400] my-4 opacity-[0.6] mb-[50px]'>Unlocklive embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.</p>

                    <div className="flex gap-3 md:gap-[40px] px-4 md:px-0">
                    <a className=' rounded-[12px] bg-[#86371C] hover:bg-transparent hover:border hover:border-[#86371c] py-[15px] md:py-[18px] px-[20px] Md:px-[30px] text-white hover:text-[#86371c]' href="#">Explore Our Menu</a>

                         <ul className='flex gap-[-10px]'>
                              <li><img src={b1} alt="" /></li>
                              <li className='ms-[-15px]'><img src={b2} alt="" /></li>
                              <li className='ms-[-15px]'><img src={b3} alt="" /></li>
                              <li className=''>
                                    <span className='block ms-[10px] text-[24px] font-[400] text-[#270A05]'>1200+</span> 
                                    <span className='block ms-[10px] text-[14px] font-[400] opacity-[0.6] text-[#270A05]'>testy variant coffee</span>
                              </li>
                            
                         </ul>
                    </div>
               </div>
               <div className=" ">
                    <img className='w-[100%]' src={banner} alt="banner" />
               </div>
          </div>
    </div>
  )
}
