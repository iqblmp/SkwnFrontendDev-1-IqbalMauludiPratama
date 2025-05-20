import  { useState, useRef } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/Card';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderRef = useRef(null);

  const products = [
    {
      id: 1,
      image: '/img/rectangle_6799.png',
      title: 'Und Chair',
      price: '$329',
    },
    {
      id: 2,
      image: '/img/rectangle_6798.png',
      title: 'Orange Sofa',
      price: '$499',
    },
    {
      id: 3,
      image: '/img/rectangle_6796.png',
      title: 'Wooden Table',
      price: '$199',
    },
    {
      id: 4,
      image: '/img/rectangle_6800.png',
      title: 'Bookshelf',
      price: '$349',
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (currentIndex < products.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild?.offsetWidth || 0;
      sliderRef.current.scrollTo({
        left: index * (cardWidth + 24),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#2f241f] py-16">
      <div className="container mx-auto px-6 lg:px-[8.6%]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <p className="text-lg sm:text-xl text-[#e5f0b6] mb-3">OUR PRODUCTS</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e5f0b6]">
              This month's best seller
            </h2>
          </div>

          <Button
            variant="primary"
            className="mt-6 lg:mt-0 h-[52px] px-9 rounded-xl"
          >
            SEE MORE
          </Button>
        </div>

        {/* Cards Scroll */}
        <div className="relative">
        <div
  ref={sliderRef}
  className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-8 pb-8 scroll-smooth snap-x snap-mandatory"
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
>
  {products.map((product, index) => (
    <Card
      key={product.id}
      image={product.image}
      title={product.title}
      price={product.price}
      isActive={index === currentIndex}
      className="flex-shrink-0 snap-center"
    />
  ))}
</div>


          {/* Arrows */}
          <div className="flex justify-end mt-5 gap-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e5f0b6] rounded-full flex items-center justify-center disabled:opacity-40"
              disabled={currentIndex === 0}
            >
              <img src="/img/arrowbackios.svg" alt="Previous" className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e5f0b6] rounded-full flex items-center justify-center disabled:opacity-40"
              disabled={currentIndex === products.length - 1}
            >
              <img src="/img/arrowforwardios.svg" alt="Next" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
