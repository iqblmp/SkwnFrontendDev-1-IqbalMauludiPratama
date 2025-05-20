const Why = () => {
  return (
    <section className="bg-[#2f241f]  py-16 md:py-24">
      <div className="container mx-auto px-[10%]  w-full">
        <h2 className="text-2xl text-[#e5f0b6] mb-5 text-center lg:text-start">WHY CHOOSE US?</h2>
        
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-start text-[#e5f0b6] leading-tight space-y-5 max-w-[70rem]  mb-16">
          We care about details and the quality  of our products
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex  items-center ">
            <div className="bg-[#e5f0b6]/50 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
              <img src="/img/search_gray_100.svg" alt="Quality" className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#e5f0b6] leading-9 max-w-[277px]">
                MANUFACTURED WITH QUALITY MATERIALS
              </h4>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="flex items-center">
            <div className="bg-[#e5f0b6]/50 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl font-bold text-white">5</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#e5f0b6] leading-9 max-w-[290px]">
                5 YEARS OF WARRANTY FOR EACH PROFUCT
              </h4>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="flex items-center">
            <div className="bg-[#e5f0b6]/50 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
              <img src="/img/workoutline.svg" alt="Experience" className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#e5f0b6]">
                20 YEARS OF EXPERTISE
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;