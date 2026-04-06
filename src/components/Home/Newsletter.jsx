import React from 'react';

export default function Newsletter() {
  return (
    <footer className="bg-[var(--main-color)] text-[#fdfdfc] py-16 px-4 md:px-12 lg:px-24">
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Newsletter Subscription */}
        <div className="md:col-span-5 lg:col-span-6 flex flex-col md:pr-8">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">Subscribe to our newsletter</h2>
          <p className="text-[13px] md:text-sm mb-12 max-w-md font-light leading-relaxed">
            Receive our newsletter and discover our world, collections, and latest news from us.
          </p>
          
          <div className="relative border-b border-[#fdfdfc]/70 pb-2 mb-8 max-w-md group">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-transparent outline-none text-sm placeholder-[#fdfdfc]/80"
            />
            <button className="absolute right-0 top-0 text-xl font-light opacity-80 group-hover:translate-x-1 group-hover:opacity-100 transition-all">
              &rarr;
            </button>
          </div>
          
          <p className="text-[10px] md:text-[11px] opacity-80 max-w-sm leading-relaxed">
            I acknowledge that my email address will be processed by our brand in accordance with the provisions of the Privacy Policy.
          </p>
        </div>

        {/* Links Columns */}
        <div className="md:col-span-7 lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-6">
          
          {/* Get in touch */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-lg md:text-[17px] font-serif mb-2">Get in touch</h3>
            <a href="#" className="text-xs sm:text-[13px] hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-opacity">Contacts</a>
            <a href="#" className="text-xs sm:text-[13px] hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-opacity">FAQ</a>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-lg md:text-[17px] font-serif mb-2">Services</h3>
            <a href="#" className="text-xs sm:text-[13px] hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-opacity">All services</a>
            <a href="#" className="text-xs sm:text-[13px] hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-opacity">Return & exchange</a>
            <a href="#" className="text-xs sm:text-[13px] hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-opacity">Delivery & shipping</a>
          </div>

          {/* Legal & Cookies */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-lg md:text-[17px] font-serif mb-2">Legal & Cookies</h3>
            <a href="#" className="text-xs sm:text-[13px] hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-opacity">Compliance</a>
            <a href="#" className="text-xs sm:text-[13px] hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-opacity">Legal</a>
            <a href="#" className="text-xs sm:text-[13px] hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-opacity leading-tight">Privacy & Cookie notice</a>
            <a href="#" className="text-xs sm:text-[13px] hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-opacity">Accessibility</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
