import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Navbar from "./NavBar";
import Banner from "./Banner";
import ProductSection from "./ProductSection";
import CartSection from "./CartSection";
import Footer from "./Footer";

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error fetching data:", err));
  }, []);

  
  const handleAddToCart = (product) => {
    
    const isExist = cart.find(item => item.id === product.id);
    if (isExist) {
      toast.error("Already added to cart!");
    } else {
      setCart([...cart, product]);
      toast.success("Successfully added to cart!");
    }
  };

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    toast.info("Removed from cart");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success("Order Placed Successfully!");
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      <Navbar cartCount={cart.length} />
      
      
      <Banner />

      
<section className="bg-[#7C3AED] py-16 my-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
      
      
      <div className="border-r-0 md:border-r border-white/30 last:border-0">
        <h2 className="text-5xl font-bold mb-2">50K+</h2>
        <p className="text-lg opacity-80 font-medium">Active Users</p>
      </div>

      
      <div className="border-r-0 md:border-r border-white/30 last:border-0">
        <h2 className="text-5xl font-bold mb-2">200+</h2>
        <p className="text-lg opacity-80 font-medium">Premium Tools</p>
      </div>

      
      <div>
        <h2 className="text-5xl font-bold mb-2">4.9</h2>
        <p className="text-lg opacity-80 font-medium">Rating</p>
      </div>

    </div>

   
  </div>
</section>



      
      <div className="flex justify-center gap-4 my-10">
        <button 
          onClick={() => setActiveTab("product")}
          className={`btn px-10 ${activeTab === "product" ? "btn-primary" : "btn-outline"}`}
        >
          Products
        </button>
        <button 
          onClick={() => setActiveTab("cart")}
          className={`btn px-10 ${activeTab === "cart" ? "btn-primary" : "btn-outline"}`}
        >
          Cart ({cart.length})
        </button>
      </div>

      
      <main className="container mx-auto px-4 pb-20">
        {activeTab === "product" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductSection 
                key={p.id} 
                product={p} 
                onAddToCart={handleAddToCart} 
              />
            ))}
          </div>
        ) : (
          <CartSection 
            cart={cart} 
            onRemove={handleRemove} 
            onCheckout={handleCheckout} 
          />
        )}
      </main>

      {/* Steps Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">Get Started in 3 Steps</h2>
    <p className="text-gray-600 mb-12">Start using premium digital tools in minutes, not hours.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
        <span className="absolute top-4 right-4 bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">01</span>
        <div className="text-purple-600 text-5xl mb-6 flex justify-center">👤</div>
        <h3 className="text-xl font-bold mb-3">Create Account</h3>
        <p className="text-gray-500 text-sm">Sign up for free in seconds. No credit card required to get started.</p>
      </div>

      {/* Step 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative border-2 border-purple-100">
        <span className="absolute top-4 right-4 bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">02</span>
        <div className="text-purple-600 text-5xl mb-6 flex justify-center">📦</div>
        <h3 className="text-xl font-bold mb-3">Choose Products</h3>
        <p className="text-gray-500 text-sm">Browse our catalog and select the tools that fit your needs.</p>
      </div>

      {/* Step 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
        <span className="absolute top-4 right-4 bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">03</span>
        <div className="text-purple-600 text-5xl mb-6 flex justify-center">🚀</div>
        <h3 className="text-xl font-bold mb-3">Start Creating</h3>
        <p className="text-gray-500 text-sm">Download and start using your premium tools immediately.</p>
      </div>
    </div>
  </div>
</section>



{/* Pricing Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
    <p className="text-gray-600 mb-12">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Starter Plan */}
      <div className="p-8 rounded-2xl border border-gray-100 text-left hover:border-purple-300 transition-colors">
        <h3 className="text-xl font-bold">Starter</h3>
        <div className="my-4"><span className="text-3xl font-bold">$0</span><span className="text-gray-500">/Month</span></div>
        <ul className="space-y-3 text-sm text-gray-600 mb-8">
          <li>✅ Access to 10 free tools</li>
          <li>✅ Basic templates</li>
          <li>✅ Community support</li>
        </ul>
        <button className="btn btn-outline btn-primary w-full rounded-full capitalize">Get Started Free</button>
      </div>

      {/* Pro Plan - Highlighted */}
      <div className="p-8 rounded-2xl bg-purple-600 text-white text-left shadow-xl scale-105 relative">
        <div className="bg-white text-purple-600 text-xs font-bold px-3 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2">POPULAR</div>
        <h3 className="text-xl font-bold">Pro</h3>
        <div className="my-4"><span className="text-3xl font-bold">$29</span><span className="text-gray-200">/Month</span></div>
        <ul className="space-y-3 text-sm text-gray-100 mb-8">
          <li>✅ Access to all premium tools</li>
          <li>✅ Unlimited templates</li>
          <li>✅ Priority support</li>
          <li>✅ Cloud sync</li>
        </ul>
        <button className="btn bg-white text-purple-600 border-none hover:bg-gray-100 w-full rounded-full capitalize">Start Pro Trial</button>
      </div>

      {/* Enterprise Plan */}
      <div className="p-8 rounded-2xl border border-gray-100 text-left hover:border-purple-300 transition-colors">
        <h3 className="text-xl font-bold">Enterprise</h3>
        <div className="my-4"><span className="text-3xl font-bold">$99</span><span className="text-gray-500">/Month</span></div>
        <ul className="space-y-3 text-sm text-gray-600 mb-8">
          <li>✅ Everything in Pro</li>
          <li>✅ Custom integrations</li>
          <li>✅ Dedicated support</li>
        </ul>
        <button className="btn btn-primary w-full rounded-full capitalize">Contact Sales</button>
      </div>
    </div>
  </div>
</section>


{/* CTA Section */}
<section className="bg-purple-600 py-20 text-center text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
    <p className="text-purple-100 mb-10 max-w-2xl mx-auto">
      Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
    </p>
    <div className="flex justify-center gap-4">
      <button className="btn bg-white text-purple-600 border-none hover:bg-gray-100 rounded-full px-8">Explore Products</button>
      <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 rounded-full px-8">View Pricing</button>
    </div>
    <p className="mt-6 text-sm text-purple-200">14-day free trial • No credit card required • Cancel anytime</p>
  </div>
</section>
{/* Final Footer */}
<footer className="bg-black text-gray-400 py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      {/* Brand Profile */}
      <div className="col-span-1 md:col-span-1">
        <h2 className="text-white text-2xl font-bold mb-6">DigiTools</h2>
        <p className="text-sm leading-relaxed">
          Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
        </p>
      </div>

      {/* Product Links */}
      <div>
        <h4 className="text-white font-bold mb-6">Product</h4>
        <ul className="space-y-4 text-sm">
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">Pricing</li>
          <li className="hover:text-white cursor-pointer">Templates</li>
          <li className="hover:text-white cursor-pointer">Integrations</li>
        </ul>
      </div>

      {/* Company Links */}
      <div>
        <h4 className="text-white font-bold mb-6">Company</h4>
        <ul className="space-y-4 text-sm">
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
          <li className="hover:text-white cursor-pointer">Careers</li>
          <li className="hover:text-white cursor-pointer">Press</li>
        </ul>
      </div>

      {/* Resources & Social */}
      <div>
        <h4 className="text-white font-bold mb-6">Resources</h4>
        <ul className="space-y-4 text-sm mb-6">
          <li className="hover:text-white cursor-pointer">Documentation</li>
          <li className="hover:text-white cursor-pointer">Help Center</li>
          <li className="hover:text-white cursor-pointer">Community</li>
        </ul>
        <div className="flex gap-4 text-xl">
          <span className="hover:text-white cursor-pointer">LinkedIn</span>
          <span className="hover:text-white cursor-pointer">Facebook</span>
          <span className="hover:text-white cursor-pointer">Twitter</span>
        </div>
      </div>
    </div>

    {/* Bottom Copyright */}
    <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center text-xs">
      <p>© 2026 DigiTools. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
        <span className="hover:text-white cursor-pointer">Terms of Service</span>
      </div>
    </div>
  </div>
</footer>
<ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
}
export default App;