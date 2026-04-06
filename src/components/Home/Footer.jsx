import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--bg-color-main)] py-10 px-4 md:px-12 lg:px-24">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between text-[var(--main-color)] text-xs lg:text-[13px]">

        {/* Left side: Copyright */}
        <div className="flex flex-1 items-center justify-center md:justify-start space-x-2 mb-8 md:mb-0">
          <span className="font-serif tracking-wide opacity-90">
            &copy; {new Date().getFullYear()} all rights reserved
          </span>
        </div>

        {/* Center: Logo and Copyright */}
        <div className="flex flex-1 flex-col items-center justify-center mb-8 md:mb-0">
          {/* Cursive Brand Name using the imported font */}
          <h2 className="text-2xl md:text-3xl mb-1" style={{ fontFamily: '"Playwrite IE", cursive' }}>
            My Ecommerce
          </h2>
          <p className="text-[9px] sm:text-[10px] opacity-70 tracking-widest uppercase mt-2">
            My Ecommerce S.P.A 2026 VAT Number 01611400027
          </p>
        </div>

        {/* Right side: Social Links */}
        <div className="flex flex-1 items-center justify-center md:justify-end flex-wrap gap-4 sm:gap-5 md:gap-6">
          <a href="#" className="font-serif tracking-wide opacity-90 hover:opacity-100 hover:underline decoration-1 underline-offset-4 transition-all">Instagram</a>
          <a href="#" className="font-serif tracking-wide opacity-90 hover:opacity-100 hover:underline decoration-1 underline-offset-4 transition-all">Facebook</a>
          <a href="#" className="font-serif tracking-wide opacity-90 hover:opacity-100 hover:underline decoration-1 underline-offset-4 transition-all">LinkedIn</a>
          <a href="#" className="font-serif tracking-wide opacity-90 hover:opacity-100 hover:underline decoration-1 underline-offset-4 transition-all">Wechat</a>
          <a href="#" className="font-serif tracking-wide opacity-90 hover:opacity-100 hover:underline decoration-1 underline-offset-4 transition-all">Weibo</a>
        </div>

      </div>
    </footer>
  );
}
