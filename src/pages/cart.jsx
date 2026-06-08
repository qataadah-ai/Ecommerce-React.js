import React from 'react'
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react'

export default function cart() {
  return (
    <section className="min-h-screen px-5 md:px-8 py-20 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold border-l-4 border-black pl-6 mb-2">
          Shopping Cart
        </h1>
        <p className="text-gray-600 ml-6">3 items in your cart</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            
            {/* Cart Item 1 */}
            <div className="flex gap-4 p-6 bg-[#f9f9f9] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-white shadow-sm">
                <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-full object-contain p-2" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-sm line-clamp-2 mb-2">Premium Wireless Headphones</h3>
                <p className="text-black font-bold mb-3">$79.99</p>
                <div className="flex items-center gap-3 bg-white rounded-full w-fit px-3 py-2 shadow-sm">
                  <button className="text-gray-600 hover:text-black transition-colors p-1">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-2 font-bold text-sm min-w-[2rem] text-center">1</span>
                  <button className="text-gray-600 hover:text-black transition-colors p-1">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <p className="font-bold text-lg">$79.99</p>
                <button className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-all duration-300">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Cart Item 2 */}
            <div className="flex gap-4 p-6 bg-[#f9f9f9] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-white shadow-sm">
                <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-full object-contain p-2" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-sm line-clamp-2 mb-2">Ultra HD Monitor 4K Display</h3>
                <p className="text-black font-bold mb-3">$349.99</p>
                <div className="flex items-center gap-3 bg-white rounded-full w-fit px-3 py-2 shadow-sm">
                  <button className="text-gray-600 hover:text-black transition-colors p-1">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-2 font-bold text-sm min-w-[2rem] text-center">2</span>
                  <button className="text-gray-600 hover:text-black transition-colors p-1">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <p className="font-bold text-lg">$699.98</p>
                <button className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-all duration-300">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Cart Item 3 */}
            <div className="flex gap-4 p-6 bg-[#f9f9f9] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-white shadow-sm">
                <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-full object-contain p-2" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-sm line-clamp-2 mb-2">Mechanical Keyboard RGB</h3>
                <p className="text-black font-bold mb-3">$129.99</p>
                <div className="flex items-center gap-3 bg-white rounded-full w-fit px-3 py-2 shadow-sm">
                  <button className="text-gray-600 hover:text-black transition-colors p-1">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-2 font-bold text-sm min-w-[2rem] text-center">1</span>
                  <button className="text-gray-600 hover:text-black transition-colors p-1">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <p className="font-bold text-lg">$129.99</p>
                <button className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-all duration-300">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Continue Shopping */}
          <button className="mt-8 text-black hover:text-black/70 transition-colors font-semibold">
            ← Continue Shopping
          </button>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-[#f9f9f9] rounded-2xl p-6 shadow-sm sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">$909.96</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">$0.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-semibold">$90.99</span>
              </div>
            </div>

            <div className="flex justify-between mb-6 text-lg font-bold">
              <span>Total</span>
              <span>$1,000.95</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-full font-bold uppercase tracking-widest hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg mb-3">
              Proceed to Checkout
            </button>

            <button className="w-full bg-white text-black py-3 rounded-full font-bold uppercase tracking-widest border-2 border-black hover:-translate-y-1 transition-all duration-300">
              Save for Later
            </button>

            <p className="text-center text-sm text-green-600 font-semibold mt-4">
              ✓ Free shipping on orders over $100
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}
