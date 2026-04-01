import React from 'react';

import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-white text-2xl font-black mb-4">DigiTools.</h2>
            <p className="text-sm leading-relaxed mb-6">
              Leading directory for premium digital products and creative assets. Helping creators build faster.
            </p>
            
            
            <div className="flex gap-5 text-2xl mt-4">
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-indigo-400 cursor-pointer transition">Browse All Tools</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Premium Kits</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Pricing Plans</li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-indigo-400 cursor-pointer transition">Contact Us</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Terms of Service</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white font-bold mb-6">Join Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-gray-800 border-none rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-indigo-500 text-white"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-indigo-700 transition">
                →
              </button>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-800 pt-8 text-center text-xs uppercase tracking-widest">
          <p>© 2026 DigiTools Marketplace. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;