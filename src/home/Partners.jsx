const Partners = () => {
  return (
    <section className="bg-[#fcfafa] py-16">
      <div className="container mx-auto px-[10%]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 ">
            <h2 className="text-7xl md:text-8xl font-bold text-[#2f241f] mb-2 text-center md:text-start">25+</h2>
            <p className="text-2xl text-[#2f241f]">PARTNERED BRANDS</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            <img 
              src="/img/company_logo.svg" 
              alt="Gusto" 
              className="h-[52px] w-auto"
            />
            <img 
              src="/img/company_logo_indigo_a200.svg" 
              alt="Stripe" 
              className="h-[52px] w-auto"
            />
            <div className="h-[52px] w-[178px] relative">
              <img 
                src="/img/vector_green_400.svg" 
                alt="Treehouse Logo" 
                className="absolute top-[5px] left-0 h-[41px] w-[37px]"
              />
              <img 
                src="/img/vector_blue_gray_800.png" 
                alt="Treehouse Text" 
                className="absolute top-[15px] left-[47px] h-[20px] w-[131px]"
              />
            </div>
            <img 
              src="/img/company_logo_green_800.svg" 
              alt="Upwork" 
              className="h-[52px] w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;