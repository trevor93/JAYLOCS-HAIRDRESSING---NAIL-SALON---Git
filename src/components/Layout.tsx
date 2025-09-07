import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import { 
  Home, 
  User, 
  Phone, 
  ShoppingCart, 
  LogOut,
  Scissors,
  Palette,
  Star,
  Sparkles
} from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth()
  const { items } = useCart()
  const location = useLocation()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Failed to log out:', error)
    }
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                JAYLOCS
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-pink-600' 
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>

              <Link
                to="/about"
                className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/about') 
                    ? 'text-pink-600' 
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                <User className="w-4 h-4" />
                <span>About Us</span>
              </Link>

              <Link
                to="/contact"
                className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/contact') 
                    ? 'text-pink-600' 
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </Link>

              <Link
                to="/cart"
                className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 relative ${
                  isActive('/cart') 
                    ? 'text-pink-600' 
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Link
                to="/cart"
                className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">JAYLOCS</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Premium hairdressing and nail salon services for Meru University students and the local community. 
                Quality beauty services at student-friendly prices.
              </p>
              <div className="text-sm text-gray-400">
                <p>📍 Nchiru, Meru County, Kenya</p>
                <p>🕒 Thu-Sun: 8:30 AM - 7:00 PM</p>
                <p>💳 Student discounts available</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="/hairdressing" className="hover:text-pink-400 transition-colors duration-200 flex items-center space-x-2">
                    <Scissors className="w-4 h-4" />
                    <span>Hair Dressing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/nailcare" className="hover:text-pink-400 transition-colors duration-200 flex items-center space-x-2">
                    <Palette className="w-4 h-4" />
                    <span>Nail Care</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dreadlocks" className="hover:text-pink-400 transition-colors duration-200 flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Dreadlocks</span>
                  </Link>
                </li>
                <li>
                  <Link to="/coats" className="hover:text-pink-400 transition-colors duration-200 flex items-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Trench Coats</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="/booking" className="hover:text-pink-400 transition-colors duration-200">
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-pink-400 transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-pink-400 transition-colors duration-200">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="hover:text-pink-400 transition-colors duration-200">
                    Shopping Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2024 JAYLOCS Hairdressing & Nail Salon. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <span>Serving Meru University Community</span>
                <span>•</span>
                <span>Professional Beauty Services</span>
                <span>•</span>
                <span>Student Friendly Prices</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout