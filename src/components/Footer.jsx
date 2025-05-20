import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-[7%] w-full">
        <div className="flex flex-col md:flex-row justify-between w-full gap-x-24 ">
          {/* Company Info */}
          <div className=''>
            <div className="flex items-center mb-4 justify-center md:justify-start">
              <img src="/img/vector.svg" alt="Dekoor Logo" className="w-[29px] h-[29px]" />
              <img src="/img/dekoor.svg" alt="Dekoor" className="h-[13px] ml-2" />
            </div>
            <p className="text-[16px] leading-[24px] text-[#667085] mb-8  pt-4 text-center md:text-start">
              Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture. Always pay attention to details and give clear communication for the customers. Priority of our design is comfortability.
            </p>
            <p className="hidden md:block text-[16px] leading-[20px] text-[#667085] ">©Copyright 2022 Dekoor"</p>
          </div>
<div className="flex gap-x-10 pt-1.5 w-full text-center md:text-start ">
          {/* Support */}
          <div className='w-full'>
            <h3 className="text-[20px] font-medium leading-[25px] text-[#101828] mb-5">Support</h3>
            <ul className="space-y-4">
              <li><a href="#faq" className="text-[16px] leading-[20px] text-[#667085] hover:text-black">FAQ</a></li>
              <li><a href="#shipping" className="text-[16px] leading-[20px] text-[#667085] hover:text-black">Shipping & Returns</a></li>
              <li><a href="#care" className="text-[16px] leading-[20px] text-[#667085] hover:text-black">Care guide</a></li>
              <li><a href="#warranty" className="text-[16px] leading-[20px] text-[#667085] hover:text-black">Redeem warranty</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className='w-full'>
            <h3 className="text-[20px] font-medium leading-[25px] text-[#101828] mb-5 ">Social Media</h3>
            <ul className="space-y-4">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[16px] leading-[20px] text-[#667085] hover:text-black">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[16px] leading-[20px] text-[#667085] hover:text-black">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[16px] leading-[20px] text-[#667085] hover:text-black">Twitter</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-[16px] leading-[20px] text-[#667085] hover:text-black">TikTok</a></li>
            </ul>
          </div>

          {/* About Us */}
           <div className='w-full'>
            <h3 className="text-[20px] font-medium leading-[25px] text-[#101828] mb-5">About Us</h3>
            <ul className="space-y-4">
              <li><a href="#story" className="text-[16px] leading-[20px] text-[#667085] hover:text-black">Our story</a></li>
              <li><a href="#designer" className="text-[16px] leading-[20px] text-[#667085] hover:text-black">Designer</a></li>
              <li><a href="#craftmanship" className="text-[16px] leading-[20px] text-[#667085] hover:text-black">Craftmanship</a></li>
              <li><a href="#sustainability" className="text-[16px] leading-[20px] text-[#667085] hover:text-black">Sustainability</a></li>
            </ul>
          </div>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;