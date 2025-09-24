import React from "react";

const Footer = () => {
  return (
    <div
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[800px] w-full">
        <Content />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="bg-[#0a0a0a] py-8 px-12 h-full w-full flex flex-col justify-between border-t border-[#222]">
      <Section1 />
      <Section2 />
    </div>
  );
};

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] leading-[0.8] mt-10 text-[#afa18f] font-bold">
        BookingBear
      </h1>
      <div className="text-right">
        <p className="text-[#666] text-sm">
          ©2025 BookingBear. All rights reserved.
        </p>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ec4e39] font-bold text-sm tracking-wider">
          Services
        </h3>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Instagram Ads
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Story Promotion
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Boost Packages
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Analytics
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ec4e39] font-bold text-sm tracking-wider">
          Pricing
        </h3>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          ₹299 - Basic Plan
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          ₹599 - Boost Plan
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          ₹999 - Premium Plan
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Custom Packages
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ec4e39] font-bold text-sm tracking-wider">
          Platform
        </h3>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Calendar Booking
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Content Upload
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Payment System
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Performance Tracking
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ec4e39] font-bold text-sm tracking-wider">
          Support
        </h3>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Help Center
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Contact Us
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Documentation
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          FAQ
        </p>
      </div>

      <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
        <h3 className="mb-2 uppercase text-[#ec4e39] font-bold text-sm tracking-wider">
          Connect
        </h3>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Instagram
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Twitter
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          LinkedIn
        </p>
        <p className="text-[#afa18f] hover:text-[#ec4e39] transition-colors cursor-pointer text-sm">
          Email
        </p>
      </div>
    </div>
  );
};

export default Footer;
