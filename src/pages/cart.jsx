import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import { removeFromCart, removeToast } from '../redux/feature/addToCartSlice';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react'

export default function cart() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  
 
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  const tax = subtotal * 0.10;
  const total = subtotal + tax;
  
  const removeItem = (id) => {
    dispatch(removeFromCart(id));
    dispatch(removeToast());
  }
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
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-6 bg-[#f9f9f9] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-white shadow-sm">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain p-2" />
                </div>
                <div className="grow">
                <h3 className="font-bold text-sm line-clamp-2 mb-2">Premium Wireless Headphones</h3>
                <p className="text-black font-bold mb-3">${item.price.toFixed(2)}</p>
                <div className="">
                 <div className="flex items-center gap-2">
                <span className="flex items-center bg-white rounded-full w-fit px-3 py-2 shadow-sm px-2 font-bold text-sm min-w-[2rem] text-center">Quantity: {item.quantity}</span>
                <span className="flex items-center bg-white rounded-full w-fit px-3 py-2 shadow-sm px-2 font-bold text-sm min-w-[2rem] text-center">Size: {item.size}</span>
             </div>
              </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
                <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-all duration-300">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>


          ))}
        </div>
            

          {/* Continue Shopping */}
          <button onClick={() => navigate(-1)} className="mt-8 text-black hover:text-black/70 transition-colors font-semibold">
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
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">$0.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between mb-6 text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="btn-primary w-full">
              Proceed to Checkout
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
