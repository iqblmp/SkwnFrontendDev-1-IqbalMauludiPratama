const Categories = () => {
  return (
 <section className="py-16 px-6 lg:pr-[10%] lg:px-0">
  <div className="container mx-auto">
    <div className="flex flex-col-reverse lg:flex-row gap-12 md:gap-8">
      
      {/* Image Gallery */}
      <div className="w-full lg:w-3/5 grid grid-cols-3 sm:flex sm:flex-row gap-4 h-auto">
        <img 
          src="/img/Rectangle 6794.png" 
          alt="Living Room" 
          className="w-full h-[132px] lg:h-[523px] object-cover rounded-xl"
        />
        <img 
          src="/img/Rectangle 6793.png" 
          alt="Bedroom" 
          className="w-full h-[132px] lg:h-[523px] object-cover rounded-xl"
        />
        <img 
          src="/img/Rectangle 6792.png" 
          alt="Home Office" 
          className="w-full h-[132px] lg:h-[523px] object-cover rounded-xl"
        />
      </div>

      {/* Categories */}
      <div className="w-full lg:w-2/5">
        <p className="text-xl sm:text-2xl text-[#2f241f] mb-4 lg:mb-10 text-center lg:text-start">Categories</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2f241f] leading-tight mb-6 lg:mb-10  text-center lg:text-start">
          Furniture Sets<br />Recommendations
        </h2>

        <div className="space-y-4">
          <button className="w-full text-left bg-[#fcfafa] py-5 px-4 rounded-xl hover:bg-[#f2f2f2]">
            <h3 className="text-base sm:text-lg font-bold">Bedroom</h3>
          </button>

          <button className="w-full text-left bg-[#e5f0b6] py-5 px-4 rounded-xl">
            <h3 className="text-base sm:text-lg font-bold mb-2">Living Room</h3>
            <p className="text-sm text-[#333] leading-relaxed">
              Enjoy a great living room aesthetics with your family<br />
              Designs created for increased comfortability
            </p>
          </button>

          <button className="w-full text-left bg-[#fcfafa] py-5 px-4 rounded-xl hover:bg-[#f2f2f2]">
            <h3 className="text-base sm:text-lg font-bold">Home Office</h3>
          </button>

          <button className="w-full text-left bg-[#fcfafa] py-5 px-4 rounded-xl hover:bg-[#f2f2f2]">
            <h3 className="text-base sm:text-lg font-bold">Gaming Room</h3>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Categories;