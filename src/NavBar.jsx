import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        
        <div className="text-2xl font-black text-indigo-700 tracking-tighter">
          DigiTools<span className="text-gray-900">.</span>
        </div>

        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-6 font-semibold text-gray-600">
            <li className="hover:text-indigo-600 cursor-pointer transition">Home</li>
            <li className="hover:text-indigo-600 cursor-pointer transition">Products</li>
            <li className="hover:text-indigo-600 cursor-pointer transition">About</li>
             <li className="hover:text-indigo-600 cursor-pointer transition">Login</li>
          </ul>

          
          <div className="relative group cursor-pointer p-2 bg-gray-100 rounded-full hover:bg-indigo-50 transition">
            <span className="text-2xl">🛒</span>
            
            
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;