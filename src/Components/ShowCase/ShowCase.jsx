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
          Behold the extraordinary creations born from the synergy of our users' ingenuity and the
          transformative power of AI, a testament to boundless innovation.
        </p>
      </div>

      <ul className="mt-[40px] flex flex-wrap md:justify-evenly gap-16 ">
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
          <div className=" md:w-[424px] h-[348px] flex gap-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/6b0d/99e9/7e471a6b826ecf9de973e11dd8a41154?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OiykYRsnfgFt9de1pBW1FptvHnO4PTfOrFxUM-~1l1wPTTfzt7skc3e39fOPT-Pd2Y3xeSNdrSQ7XpDg9V4tKdJJfZl~CDKT9Bb1JQmj45V3H3N-cTethD6cN1fDFzfJfEy~td-P2ZFpAq0bm0oHqHyQBdc6EMJR0DHPceAmH6r0erERGDSbW94nTRzIxz7SCBQXsrcew1H3ndDk5bguygLr9Bd4jgvs5r04yW4gemcAl3Krg4ulbUNVA86MvQgDc14IELIf5cx6ntZyRdNGauZjhcR8byPTIin-agQ5aNaS6VhbQ3l6CFps7jh9TZX5tFgxuQTMqw8fF2OgxlHEbA__"
              alt="Image 1"
              className="w-[100%] h-[348px] rounded-[12px] "
            />
          </div>
          <div className=" md:w-[872px] h-[348px] ">
            <img
              src="https://s3-alpha-sig.figma.com/img/8ce2/353b/042a85e3f8c8eae932862a9ef567603e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FgDuXCIoPqarjEJFuo5ykFezWX3FXWbOrszd~gFpDOpR5NBdRwNbJBZq8xALATpPITOGE0zID1MVo9S8tWZpWWvyI4z9-p8-6WzdoEterHYI7OEvuhuQZrs3CBlL6qNl0uWN2oKS2o7-Cf3QnLVqwNuC3TSNWgMHsVuux9-SsTMRFMEpjvVX2MAefjoeXLLhYWzAl7Dl0mdQEQVPsNPWPbZFqy8sLPSJqb~2N-6UIr7y-KtLHyzao2i5kUAXE2xVLhvmK2cR5O1o06LqC~DWI4iSTLQzzLFs~mN13KHm8pCKd1ryefdbmMGjBIaYYWmzKzFkdzRjx3N4S4x-wPtYJQ__"
              alt="Image 2"
              className="w-[100%] h-[348px] rounded-[12px] "
            />
          </div>
          {/* Second Row */}
          <div className=" md:w-[312px] h-[348px] flex gap-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/74ed/b3ab/c44c901be8354e0bab276340147410fc?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JPVDHdqnO73Jv9mfr8iywLper~R30s506~LhYCGHnAxXVjNF8eCxELpc2ewViUsE5Iy-jSQdrSYxgbjqs58lH4XR8GaO0TRl8B9gqq7sg9eITGS8fr03Tw0SsFWs8NkgdkIqniKOe2uhFBX81lbJGTYgTwezXKVyRtNODaSoZ2amjbrHbilGgcA4SQM8rSwrEDJ6b9b3A-Z6GmsGAEauKKQ3xm5DRvpf5mJhsbtbdlGXuOr6W19v7uKwqLkfvbayO8aNkMKt-G0XCKwL3xDvut-jLXia~kH6SkjIoKKbkFzUFwJYA49eASOLVrHgDFvQ5XMZ-ddqtusCKakUvtKYUQ__"
              alt="Image 1"
              className="w-[100%] h-[348px] rounded-[12px] "
            />
          </div>
          <div className=" w-full md:w-[536px] h-[348px] flex gap-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/de6e/ace1/120cd7f688bdaee2a06eb99c4d5a276b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NFidwErA8ZRz~IlZUJr~-xzwlNqjectPMK5vIWwlSeAk8A0hLsC~Jyr5KUF7RkyaUcjh8qhYw8XObU1iyVEuiXGzBpaLxYgU6vxV~e91Yus5puImldpEEnomWZmSxYdcYdOhp9urq66Hd47ZtahD3rD3Vp054C~T36aPeEQvfd3sMr3P5HGQ5HYDcGCRRAYxXJxiJrQ0DTZiumoBP4uIN2CUcsQyGhZdudTqGpkjgP3Mfqt50RatUhimtY29xEolxxJgqBmEqiOq2e9mRQaUJWcTx0oXOIQwIk0Os9ZQBvfvHuFylVTwIimS-UJk~Q4Bk1YW2-yFt5Vzk~kM6JgE0w__"
              alt="Image 1"
              className="w-[100%] h-[348px] rounded-[12px]  "
            />
          </div>
          <div className="w-full md:w-[424px] h-[348px] flex gap-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/8ddd/c4fc/87afc0244c0e5ea4944b4ecfd226da72?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdNkse4m5KEB~9ZTQQ7R-x7jec6S3u7m0rDiKoRqMoTxUvTPe63~NeDZrVpjiPTzsBLxVZ2GXqCJs7mk1rpnG1wG5diG4m-kpUqyqDXbO8LC309iNQL9Pyj74YJ5D7HeNx4E8oRZwkUezSYLoVgPr8OPcj2nJicVgbA7h5FuG5ZjV3vPY~vOrCjuiz2QZ~t6BftGeK46-sJdQRJB6U1~LjvWt6uIJ7B-M6COdIF5ugmwWX0bGYv10iYRKQ19RXVSx0g0UADJov9yRab5tDoX13QwX2wjOSOpv0OKiwzNES5jpg9~HIkr60NAWSgE5qr~Pb-SllGICPa45~wsDha~0A__"
              alt="Image 1"
              className="w-[100%] h-[348px] rounded-[12px] "
            />
          </div>

        </div>
      </div>
    </section>
  );
};
