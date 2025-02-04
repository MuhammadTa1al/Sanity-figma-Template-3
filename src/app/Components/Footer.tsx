import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#000] text-[#7E7E7E] px-4 sm:px-6 lg:px-12 pt-8 lg:pt-12">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-col sm:flex-row text-white gap-8">
          <ul className="uppercase flex flex-col gap-4">
            {['Find A Store', 'Become A Member', 'Sign Up for Email', 'Send Us Feedback', 'Student Discounts'].map((item) => (
              <li key={item}>
                <Link href="#" className="font-sans text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-4 text-[#7E7E7E]">
            <li>
              <Link href="/ContactPage" className="font-sans uppercase text-white text-sm">
                Get Help
              </Link>
            </li>
            {['Order Status', 'Delivery', 'Returns', 'Payment Options', 'Contact Us On Nike.com Inquiries', 'Contact Us On All Other Inquiries'].map((item) => (
              <li key={item}>
                <Link href="/ContactPage" className="font-sans text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4 text-[#7E7E7E]">
            <li>
              <Link href="/Items" className="font-sans uppercase text-white text-sm">
                About Nike
              </Link>
            </li>
            {['News', 'Careers', 'Investors'].map((item) => (
              <li key={item}>
                <Link href="/Items" className="font-sans text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row text-white gap-8 lg:w-auto">
          <div className="flex gap-4">
            {[19, 20, 21, 22].map((num) => (
              <Link key={num} href="#">
                <Image
                  src={`/image/Frame (${num}).png`}
                  alt="Social Media"
                  width={30}
                  height={30}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 py-4 border-t border-[#7E7E7E]">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="font-sans text-sm">
            <Link href="#" className="font-sans text-white">
              <i className="fa-solid fa-location-dot"></i> Pakistan
            </Link>
            <span className="px-3 font-sans text-sm"> © 2025 Nike, Inc. All rights reserved.</span>
          </p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4">
          {['Guides', 'Terms of Sale', 'Terms of Use', 'Nike Privacy Policy'].map((item) => (
            <Link key={item} href="/ContactPage" className="font-sans text-sm">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
