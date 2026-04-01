import React from 'react';

const ProductSection = ({ product, onAddToCart }) => {
  // Destructuring product data
  const { name, description, price, period, tagType, features, icon } = product;

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
      
     
      <div className="flex justify-between items-start mb-6">
        <div className="p-4 bg-indigo-50 rounded-2xl group-hover:bg-indigo-600 transition-colors duration-300">
          <img 
            src={icon} 
            alt={name} 
            className="w-12 h-12 group-hover:brightness-0 group-hover:invert transition duration-300" 
          />
        </div>
        <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
          {tagType}
        </span>
      </div>

      
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      
      <div className="text-3xl font-black text-indigo-600 mb-6">
        ${price} 
        <span className="text-sm font-medium text-gray-400"> / {period}</span>
      </div>

      
      <div className="space-y-3 mb-8 border-t pt-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
            <span className="bg-green-100 text-green-600 rounded-full p-1 text-[10px]">
              ✔
            </span>
            {feature}
          </div>
        ))}
      </div>

      
      <button 
        onClick={() => onAddToCart(product)}
        className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-indigo-600 hover:shadow-xl active:scale-95 transition-all duration-300"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductSection;