import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="pt-10 px-4 md:px-20 lg:px-32 w-full overflow-hidden"
      style={{ backgroundColor: "#3b6d72" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo & Description */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo} alt="Logo" className="w-32 md:w-40" />
          <p lang="ar" className="text-gray-200 mt-4">
           جولاند العقارية  نساعد المستثمرين والعائلات على امتلاك الأراضي بثقة ورؤية بعيدة المدى.
خبرة موثوقة، مواقع استراتيجية، وقيمة مستدامة.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-100">
            <li>
              <a href="#Header" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-100 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none flex-1"
            />
            <button className="py-2 px-4 rounded bg-[#d5ae49] text-white transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 py-4 mt-10 text-center text-gray-200">
        Copyright 2025 © JoLand. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;

