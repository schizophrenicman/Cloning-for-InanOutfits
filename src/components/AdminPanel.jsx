import React from 'react';
import Header from './Header';
import { BarChart3, Users, Package, ShoppingCart, Settings, TrendingUp } from 'lucide-react';

export default function AdminPanel({ onSignupClick }) {
  const adminSections = [
    {
      title: 'Dashboard',
      description: 'View overall store statistics and performance metrics',
      icon: BarChart3,
      color: 'bg-amber-500',
    },
    {
      title: 'Product Management',
      description: 'Add, edit, and manage your product catalog',
      icon: Package,
      color: 'bg-orange-500',
    },
    {
      title: 'Order Management',
      description: 'Process and track customer orders',
      icon: ShoppingCart,
      color: 'bg-amber-600',
    },
    {
      title: 'User Management',
      description: 'Manage customer accounts and permissions',
      icon: Users,
      color: 'bg-orange-600',
    },
    {
      title: 'Analytics',
      description: 'Detailed reports and sales analytics',
      icon: TrendingUp,
      color: 'bg-amber-700',
    },
    {
      title: 'Settings',
      description: 'Configure store settings and preferences',
      icon: Settings,
      color: 'bg-orange-700',
    },
  ];

  return (
    <>
      <Header onSignupClick={onSignupClick} />
      <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">Admin Panel</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminSections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-amber-100"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${section.color} text-white mr-4`}>
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900">{section.title}</h3>
                </div>
                <p className="text-amber-700 mb-4">{section.description}</p>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                  Access {section.title}
                </button>
              </div>
            ))}
          </div>

          {/* Quick Stats Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">Quick Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100 text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">xxx</div>
                <div className="text-amber-700">Total Orders</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">xxx</div>
                <div className="text-amber-700">Active Users</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100 text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">xxx</div>
                <div className="text-amber-700">Products</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100 text-center">
                <div className="text-3xl font-bold text-orange-700 mb-2">xxx</div>
                <div className="text-amber-700">Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
