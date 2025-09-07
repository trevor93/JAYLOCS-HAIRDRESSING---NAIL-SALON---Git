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
  ChevronDown,
  Calendar,
  Plus
} from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { logout } = useAuth()
  const { items } = useCart()
  const location = useLocation()
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

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

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setOpenDropdown(null)
  }

  // Hair Dressing Services
  const hairServices = [
    { name: 'Braids', price: 300, link: '/hairdressing' },
    { name: 'Knotless Braids', price: 500, link: '/hairdressing' },
    { name: 'Weaving', price: 500, link: '/hairdressing' },
    { name: 'Wash & Blow Dry', price: 200, link: '/hairdressing' },
    { name: 'Twist Out', price: 400, link: '/hairdressing' }
  ]

  // Nail Care Services
  const nailServices = [
    { name: 'Pedicure + Polish', price: 400, link: '/nailcare' },
    { name: 'Pedicure + Gel Polish', price: 500, link: '/nailcare' },
    { name: 'Manicure + Polish', price: 250, link: '/nailcare' },
    { name: 'Manicure + Gel Polish', price: 350, link: '/nailcare' },
    { name: 'Polish', price: 100, link: '/nailcare' },
    { name: 'Gel Polish', price: 200, link: '/nailcare' },
    { name: 'Tip + Polish', price: 300, link: '/nailcare' },
    { name: 'Tip + Gel', price: 500, link: '/nailcare' },
    { name: 'Stick-on + Polish', price: 300, link: '/nailcare' },
    { name: 'Stick-on + Gel', price: 400, link: '/nailcare' },
    { name: 'Eyebrows Tattoo', price: 200, link: '/nailcare' }
  ]

  // Dreadlock Services by Category
  const dreadlockServices = {
    installation: [
      { name: 'Artificial/Temporary Locks', price: 3000, link: '/dreadlocks' },
      { name: 'Dreadlock Extension', price: 2500, link: '/dreadlocks' },
      { name: 'Instant Locks', price: 3500, link: '/dreadlocks' },
      { name: 'Sisterlocks', price: 5000, link: '/dreadlocks' },
      { name: 'Microlocs', price: 800, link: '/dreadlocks' },
      { name: 'Traditional Dreadlocks', price: 2000, link: '/dreadlocks' }
    ],
    maintenance: [
      { name: 'Retwisting/Re-tightening', price: 500, link: '/dreadlocks' },
      { name: 'Loc Repair', price: 300, link: '/dreadlocks' },
      { name: 'Loc Cleansing & Detox', price: 400, link: '/dreadlocks' },
      { name: 'Loc Combining', price: 250, link: '/dreadlocks' }
    ],
    styling: [
      { name: 'Loc Styling (Braids, Updos, Buns)', price: 300, link: '/dreadlocks' },
      { name: 'Dreadlock Coloring', price: 800, link: '/dreadlocks' },
      { name: 'Interlocking', price: 600, link: '/dreadlocks' }
    ],
    consultation: [
      { name: 'Consultation for Starters', price: 200, link: '/dreadlocks' },
      { name: 'Hair Type & Care Plan', price: 150, link: '/dreadlocks' }
    ]
  }
  return (
    <div className="min-h-screen bg-gray-50" onClick={closeDropdown}>
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
            <nav className="hidden lg:flex items-center space-x-6 relative">
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

              {/* Hair Dressing Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleDropdown('hair')
                  }}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                    isActive('/hairdressing') 
                      ? 'text-pink-600' 
                      : 'text-gray-700 hover:text-pink-600'
                  }`}
                >
                  <Scissors className="w-4 h-4" />
                  <span>Hair Dressing</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === 'hair' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {openDropdown === 'hair' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-800">Hair Services</h3>
                    </div>
                    {hairServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        className="flex items-center justify-between px-4 py-2 hover:bg-pink-50 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        <span className="text-gray-700">{service.name}</span>
                        <span className="text-pink-600 font-medium">KES {service.price}</span>
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        to="/hairdressing"
                        className="flex items-center justify-center px-4 py-2 text-pink-600 font-medium hover:bg-pink-50 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        View All Hair Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Nail Care Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleDropdown('nail')
                  }}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                    isActive('/nailcare') 
                      ? 'text-pink-600' 
                      : 'text-gray-700 hover:text-pink-600'
                  }`}
                >
                  <Palette className="w-4 h-4" />
                  <span>Nail Care</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === 'nail' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {openDropdown === 'nail' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-80 overflow-y-auto">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-800">Nail Services</h3>
                    </div>
                    {nailServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        className="flex items-center justify-between px-4 py-2 hover:bg-pink-50 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        <span className="text-gray-700 text-sm">{service.name}</span>
                        <span className="text-pink-600 font-medium text-sm">KES {service.price}</span>
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        to="/nailcare"
                        className="flex items-center justify-center px-4 py-2 text-pink-600 font-medium hover:bg-pink-50 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        View All Nail Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Dreadlocks Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleDropdown('dreadlocks')
                  }}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                    isActive('/dreadlocks') 
                      ? 'text-pink-600' 
                      : 'text-gray-700 hover:text-pink-600'
                  }`}
                >
                  <Star className="w-4 h-4" />
                  <span>Dreadlocks</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === 'dreadlocks' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {openDropdown === 'dreadlocks' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-800">Dreadlock Services</h3>
                    </div>
                    
                    {/* Installation */}
                    <div className="px-4 py-2">
                      <h4 className="font-medium text-purple-600 text-sm mb-2">Installation</h4>
                      {dreadlockServices.installation.map((service, index) => (
                        <Link
                          key={index}
                          to={service.link}
                          className="flex items-center justify-between px-2 py-1 hover:bg-pink-50 transition-colors duration-200 rounded"
                          onClick={closeDropdown}
                        >
                          <span className="text-gray-700 text-sm">{service.name}</span>
                          <span className="text-pink-600 font-medium text-sm">KES {service.price}</span>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Maintenance */}
                    <div className="px-4 py-2 border-t border-gray-100">
                      <h4 className="font-medium text-purple-600 text-sm mb-2">Maintenance</h4>
                      {dreadlockServices.maintenance.map((service, index) => (
                        <Link
                          key={index}
                          to={service.link}
                          className="flex items-center justify-between px-2 py-1 hover:bg-pink-50 transition-colors duration-200 rounded"
                          onClick={closeDropdown}
                        >
                          <span className="text-gray-700 text-sm">{service.name}</span>
                          <span className="text-pink-600 font-medium text-sm">KES {service.price}</span>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Styling/Coloring */}
                    <div className="px-4 py-2 border-t border-gray-100">
                      <h4 className="font-medium text-purple-600 text-sm mb-2">Styling & Coloring</h4>
                      {dreadlockServices.styling.map((service, index) => (
                        <Link
                          key={index}
                          to={service.link}
                          className="flex items-center justify-between px-2 py-1 hover:bg-pink-50 transition-colors duration-200 rounded"
                          onClick={closeDropdown}
                        >
                          <span className="text-gray-700 text-sm">{service.name}</span>
                          <span className="text-pink-600 font-medium text-sm">KES {service.price}</span>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Consultation */}
                    <div className="px-4 py-2 border-t border-gray-100">
                      <h4 className="font-medium text-purple-600 text-sm mb-2">Consultation</h4>
                      {dreadlockServices.consultation.map((service, index) => (
                        <Link
                          key={index}
                          to={service.link}
                          className="flex items-center justify-between px-2 py-1 hover:bg-pink-50 transition-colors duration-200 rounded"
                          onClick={closeDropdown}
                        >
                          <span className="text-gray-700 text-sm">{service.name}</span>
                          <span className="text-pink-600 font-medium text-sm">KES {service.price}</span>
                        </Link>
                      ))}
                    </div>
                    
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        to="/dreadlocks"
                        className="flex items-center justify-center px-4 py-2 text-pink-600 font-medium hover:bg-pink-50 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        View All Dreadlock Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Trench Coats */}
              <Link
                to="/coats"
                className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/coats') 
                    ? 'text-pink-600' 
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Trench Coats</span>
              </Link>

              {/* Book Now / Order Now Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleDropdown('book')
                  }}
                  className="flex items-center space-x-2 text-sm font-medium bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === 'book' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {openDropdown === 'book' && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-800">Quick Actions</h3>
                    </div>
                    <Link
                      to="/booking"
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-pink-50 transition-colors duration-200"
                      onClick={closeDropdown}
                    >
                      <Calendar className="w-5 h-5 text-pink-600" />
                      <div>
                        <div className="font-medium text-gray-800">Book Services</div>
                        <div className="text-sm text-gray-600">Schedule appointments</div>
                      </div>
                    </Link>
                    <Link
                      to="/coats"
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-purple-50 transition-colors duration-200"
                      onClick={closeDropdown}
                    >
                      <Plus className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-medium text-gray-800">Order Coats</div>
                        <div className="text-sm text-gray-600">Shop trench coats</div>
                      </div>
                    </Link>
                    <Link
                      to="/cart"
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-pink-50 transition-colors duration-200"
                      onClick={closeDropdown}
                    >
                      <ShoppingCart className="w-5 h-5 text-pink-600" />
                      <div>
                        <div className="font-medium text-gray-800">View Cart</div>
                        <div className="text-sm text-gray-600">{cartItemCount} items</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
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
            <div className="lg:hidden flex items-center space-x-4">
              <Link
                to="/booking"
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-200"
              >
                Book
              </Link>
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