import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  ChevronUp,
  ChevronDown,
  LogOut
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [dropdowns, setDropdowns] = useState<{[key: string]: boolean}>({})
  const { user, logout } = useAuth()
  const { items } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleDropdown = (key: string) => {
    setDropdowns(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  const navigationItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Hair Dressing', 
      path: '/hairdressing',
      dropdown: [
        { name: 'Braids - KES 300', path: '/hairdressing/braids' },
        { name: 'Knotless Braids - KES 500', path: '/hairdressing/knotless' },
        { name: 'Weaving - KES 500', path: '/hairdressing/weaving' },
        { name: 'Wash & Blow Dry - KES 200', path: '/hairdressing/wash-blow' },
        { name: 'Twist Out - KES 400', path: '/hairdressing/twist' },
      ]
    },
    {
      name: 'Nail Care',
      path: '/nailcare',
      dropdown: [
        { name: 'Pedicure + Polish - KES 400', path: '/nailcare/pedicure-polish' },
        { name: 'Pedicure + Gel Polish - KES 500', path: '/nailcare/pedicure-gel' },
        { name: 'Manicure + Polish - KES 250', path: '/nailcare/manicure-polish' },
        { name: 'Manicure + Gel Polish - KES 350', path: '/nailcare/manicure-gel' },
        { name: 'Polish - KES 100', path: '/nailcare/polish' },
        { name: 'Gel Polish - KES 200', path: '/nailcare/gel-polish' },
        { name: 'Tip Polish - KES 300', path: '/nailcare/tip-polish' },
        { name: 'Tip Gel - KES 500', path: '/nailcare/tip-gel' },
        { name: 'Stick-on Polish - KES 300', path: '/nailcare/stick-polish' },
        { name: 'Stick-on Gel - KES 400', path: '/nailcare/stick-gel' },
        { name: 'Eyebrows Tattoo - KES 200', path: '/nailcare/eyebrows' },
      ]
    },
    { name: 'Dreadlocks', path: '/dreadlocks' },
    { name: 'Trench Coats', path: '/coats' },
    { name: 'Book Now', path: '/booking' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/about' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Announcements Banner */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center text-sm font-medium">
            <div className="text-center">
              🚨 IMPORTANT: Come fully equipped (buy braids/products in advance) & with washed, blow-dried hair! 🚨
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  JAYLOCS
                </h1>
                <p className="text-xs text-gray-600">HAIRDRESSING & NAIL SALON</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 transition-colors duration-200 py-2"
                    onMouseEnter={() => item.dropdown && toggleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Link>
                  
                  {item.dropdown && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search, Cart, User */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:flex">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services..."
                    className="w-48 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
              </form>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Link>

              {/* User */}
              {user ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200">
                    <User className="w-6 h-6" />
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute right-0 top-full w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="px-4 py-2 text-sm text-gray-600 border-b">
                      {user.email}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
                >
                  <User className="w-6 h-6" />
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-pink-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-2">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  />
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
              </form>
              
              {navigationItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.path}
                      className="block py-3 text-gray-700 hover:text-pink-600 transition-colors duration-200 flex-1"
                      onClick={() => !item.dropdown && setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleDropdown(`mobile-${item.name}`)}
                        className="p-3 text-gray-700 hover:text-pink-600"
                      >
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            dropdowns[`mobile-${item.name}`] ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    )}
                  </div>
                  
                  {item.dropdown && dropdowns[`mobile-${item.name}`] && (
                    <div className="pl-4 pb-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Working Hours Banner */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-purple-800 font-medium">
            📅 Open Thu-Sun: 8:30AM-7PM | Closed Mon-Wed | 📍 Meru Town
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">JAYLOCS SALON</h3>
              <p className="text-gray-300 text-sm mb-4">
                Premier hairdressing & nail salon serving Meru University students and the community with professional care.
              </p>
              <div className="text-sm text-gray-400">
                <p>📍 Meru Town</p>
                <p>📞 Available Thu-Sun</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Services</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Hair Dressing & Styling</li>
                <li>Nail Care & Polish</li>
                <li>Dreadlocks (Installation & Maintenance)</li>
                <li>Fashion Trench Coats</li>
              </ul>
            </div>

            {/* Nearby Areas */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Service Areas</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Meru Town</li>
                <li>Maua</li>
                <li>Nchiru</li>
                <li>Meru University</li>
                <li>Katheri</li>
              </ul>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Payment Options</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>💳 M-Pesa</li>
                <li>💵 Cash</li>
                <li>🌐 PayPal</li>
                <li>🏦 Payless (Kenya)</li>
                <li>📱 KCB Paybill</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 JAYLOCS HAIRDRESSING & NAIL SALON. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

export default Layout