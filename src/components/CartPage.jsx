import React from 'react';
import { ShoppingCart, ArrowLeft, Trash2, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const navigate = useNavigate();
  
  // Sample cart data
  const cartItems = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 2999,
      quantity: 2,
      size: "M",
      color: "White"
    },
    {
      id: 2,
      name: "Classic Denim Jeans",
      price: 5999,
      quantity: 1,
      size: "32",
      color: "Blue"
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 499;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-amber-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-amber-600 hover:text-amber-800 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              Shopping Cart
            </h1>
            
            <div className="w-20"></div> {/* Spacer for balance */}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 text-amber-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-amber-800 mb-2">Your cart is empty</h2>
            <p className="text-amber-600 mb-6">Start shopping to add items to your cart</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-amber-100 p-6">
                <h2 className="text-xl font-semibold text-amber-900 mb-6">Cart Items ({cartItems.length})</h2>
                
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-amber-100 rounded-lg">
                      <div className="w-20 h-20 bg-amber-100 rounded-md flex items-center justify-center">
                        <ShoppingCart className="w-10 h-10 text-amber-400" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium text-amber-900">{item.name}</h3>
                        <p className="text-sm text-amber-600">Size: {item.size} | Color: {item.color}</p>
                        <p className="text-lg font-semibold text-amber-700">Nrs {item.price}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-amber-600 hover:text-amber-800">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button className="p-1 text-amber-600 hover:text-amber-800">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button className="p-2 text-amber-400 hover:text-red-500 transition-colors duration-200">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-amber-100 p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-amber-900 mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-amber-600">Subtotal</span>
                    <span className="font-medium">Nrs {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-600">Shipping</span>
                    <span className="font-medium">Nrs {shipping}</span>
                  </div>
                  <div className="border-t border-amber-100 pt-3">
                    <div className="flex justify-between text-lg font-semibold text-amber-900">
                      <span>Total</span>
                      <span>Nrs {total}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-full font-medium transition-colors duration-200 mb-4">
                  Proceed to Checkout
                </button>
                
                <button 
                  onClick={() => navigate('/')}
                  className="w-full border border-amber-300 text-amber-600 hover:bg-amber-50 py-3 rounded-full font-medium transition-colors duration-200"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
