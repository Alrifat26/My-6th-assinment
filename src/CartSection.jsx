const CartSection = ({ cart, onRemove, onCheckout }) => {
  const total = cart.reduce((acc, curr) => acc + curr.price, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed">
        <p className="text-4xl mb-4">🛒</p>
        <h2 className="text-2xl font-bold text-gray-400">Your cart is currently empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
        {cart.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-6 border-b last:border-0 hover:bg-slate-50 transition">
            <div className="flex items-center gap-6">
              <img src={item.icon} className="w-14 h-14" alt="" />
              <div>
                <h4 className="font-bold text-lg">{item.name}</h4>
                <p className="text-indigo-600 font-black">${item.price}</p>
              </div>
            </div>
            <button 
              onClick={() => onRemove(item.id)}
              className="text-red-400 hover:text-red-600 font-medium text-sm p-2 hover:bg-red-50 rounded-lg transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-8 bg-indigo-900 rounded-3xl text-white flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-indigo-200 text-sm uppercase font-bold tracking-widest">Total Investment</p>
          <h2 className="text-4xl font-black">${total}</h2>
        </div>
        <button 
          onClick={onCheckout}
          className="bg-white text-indigo-900 px-12 py-4 rounded-2xl font-black hover:bg-indigo-50 transition shadow-xl"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSection;