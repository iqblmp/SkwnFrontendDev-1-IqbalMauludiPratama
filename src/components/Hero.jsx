import React from 'react';
import Button from './ui/Button';

const Hero = () => {
  return (
<section className="relative w-full pt-10 lg:pt-2 bg-white">
  <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-center  lg:px-0 gap-12">
    
    {/* Text Section */}
    <div className="w-full lg:w-[75%] lg:ml-[10%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight space-y-1 lg:space-y-5">
        <p className="text-[#2f241f]">The kind of</p> 
        <p className="text-[#817253]">furniture you have</p> 
        <p className="text-[#817253]">been looking for</p>
      </h1>

      <div className="flex flex-col sm:flex-row mt-10 sm:mt-14 gap-4 sm:gap-6 justify-center lg:justify-start">
        <Button 
          variant="primary" 
          className="h-14 sm:h-16 px-6 sm:px-10 rounded-xl flex items-center justify-center"
          icon={<img src="/img/search.svg" alt="Search" className="w-5 sm:w-6 h-5 sm:h-6" />}
          iconPosition="left"
        >
          <span className="text-base sm:text-xl ml-2">SEARCH CATALOG</span>
        </Button>

        <Button 
          variant="secondary" 
          className="h-14 sm:h-16 px-6 sm:px-10 rounded-xl flex items-center justify-center"
          icon={<img src="/img/playcircleoutline.svg" alt="Play" className="w-5 sm:w-6 h-5 sm:h-6" />}
          iconPosition="left"
        >
          <span className="text-base sm:text-xl ml-2">WATCH VIDEOS</span>
        </Button>
      </div>
    </div>

    {/* Image section */}
    <div className="w-full lg:w-1/2">
      <div
        className="relative w-full h-[229px] sm:h-[460px] lg:h-[709px] bg-cover bg-center flex flex-col justify-between lg:justify-end px-6 py-6"
        style={{ backgroundImage: "url('/img/image_64.png')" }}
      >
        <p className="block lg:hidden text-xs font-semibold text-white tracking-widest mb-2">
         HIGHLIGHTED PRODUCT
        </p>
        <div>
            
        <p className="text-xl sm:text-2xl font-bold text-[#2f241f] bg-white/60 backdrop-blur-sm rounded-lg w-fit px-3 py-1 mb-3">$329</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1 mb-2 md:mb-4">Pösht Sofa</h2>
        <Button 
          variant="dark" 
          className=" px-6 py-3 text-white text-sm sm:text-base font-medium h-14 rounded-xl flex items-center w-fit "
          icon={<img src="/img/chevronright.svg" alt="View Details" className="w-6 h-6 " />}
          iconPosition="right"
        >
          VIEW DETAILS
        </Button>
        </div>
      </div>
    </div>
  </div>
</section>




  );
};

export default Hero;
