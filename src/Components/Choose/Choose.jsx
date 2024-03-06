import img from '../../assets/choose.png'
import './choose.css'
export const Choose = () => {
  return (
    <section className="mt-[110px] md:flex md:justify-between gap-[40px]">
     <div className="left ms-[50px]">
          <h4 className="sub-title text-[16px] text-[#86371C] font-[380] ">Why Choose Us</h4>
          <h2 className='text-[#270A05] text-[44px] leading-[60px] font-[400]'>Choosing Unlocklive, A Taste of Perfection</h2>
          <p className='text-[16px] font-[400] text-[#270A05] opacity-[0.6] my-10 md:w-[646px]'>Unlocklive takes pride in the art of roasting, transforming raw coffee beans into a symphony of aromatic notes and rich flavors.</p>

          <ul className='md:flex gap-3'>
               <li className='w-[203px] h-[134px] text-center border border-gray-400 lis'>
                    <h4 className='text-[#270A05] text-[44px] leading-[56px] font-[400]'>20+</h4>
                    <span className='text-[#270A05] text-[20px] leading-[30px] font-[400]'>Year Experience</span>
               </li>
               <li className='w-[203px] h-[134px] text-center border border-gray-400 lis'>
                    <h4 className='text-[#270A05] text-[44px] leading-[56px] font-[400]'>100+</h4>
                    <span className='text-[#270A05] text-[20px] leading-[30px] font-[400]'>Master Chefs</span>
               </li>
               <li className='w-[203px] h-[134px] text-center border border-gray-400 lis'>
                    <h4 className='text-[#270A05] text-[44px] leading-[56px] font-[400]'>30+</h4>
                    <span className='text-[#270A05] text-[20px] leading-[30px] font-[400]'>Achievements</span>
               </li>
          </ul>

          <p className='text-[16px] font-[400] text-[#270A05] opacity-[0.6] my-10 md:w-[646px]'>Your choice to savor our coffee is an invitation to experience the epitome of craftsmanship, flavor, and dedication..</p>

          <a className='w-[199px] h-[52px] rounded-[12px] links' href="#">
          Explore Our Menus
          </a>
     </div>
     <div className="right-img ms-3 md:ms-0">
          <img className='w-[380px] md:w-[464px] mx-auto md:mx-0' src={img} alt="choose-img" />
     </div>
     </section>
  )
}
