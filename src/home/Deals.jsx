import { useState } from 'react';
import InputField from '@components/ui/InputField';

const Deals = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };
  
  return (
    <section className="bg-[#fcfafa] py-16 md:py-24 ">
      <div className="container mx-auto px-[10%] text-center lg:text-start">
        <p className="text-2xl text-[#2f241f]  mb-14">LIMITED DEALS</p>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2f241f] leading-tight max-w-6xl mb-16">
          Become a member and get 10% off of your first purchase
        </h2>
        
        <form onSubmit={handleSubmit} className="flex max-w-xl">
          <div className="flex-grow">
            <InputField
              type="email"
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-20 px-8 text-2xl text-[#553b33] bg-white rounded-l-xl"
              required
            />
          </div>
          
          <button 
            type="submit"
            className="bg-[#e5f0b6] h-20 w-20 rounded-r-xl flex items-center justify-center"
          >
            <img src="/img/mail.svg" alt="Submit" className="w-6 h-6" />
          </button>
        </form>
        
        {isSubmitted && (
          <div className="mt-4 text-green-600 font-medium">
            Thank you! You've been added to our membership list.
          </div>
        )}
      </div>
    </section>
  );
};

export default Deals;