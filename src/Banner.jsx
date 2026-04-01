import React from 'react';

const Banner = () => {
  return (
    <section className="relative bg-white pt-16 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
            New: AI-Powered Tools Available Now.
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mt-6 mb-6">
            Master Your Workflow with <span className="text-indigo-600">DigiTools.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Discover a handpicked collection of premium digital tools designed to boost your productivity and scale your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all active:scale-95">
              Explore Tools
            </button>
            <button className="bg-white text-gray-800 border-2 border-gray-100 px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        
        <div className="md:w-1/2 relative">
          <div className="absolute -z-10 w-72 h-72 bg-indigo-400/20 blur-3xl rounded-full top-0 right-0 animate-pulse"></div>
          <img 
            src="/banner.png" 
            alt="Digital Tools Banner" 
            className="w-full rounded-3xl shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;