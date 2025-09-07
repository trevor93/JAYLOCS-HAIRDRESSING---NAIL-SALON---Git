import React, { useState } from 'react'
import { Plus, Star, ShoppingCart, Filter } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const TrenchCoats: React.FC = () => {
  const { addItem } = useCart()
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('price-low')

  const coats = [
    {
      id: 'classic-beige',
      name: 'Classic Beige Trench',
      price: 4500,
      originalPrice: 5500,
      category: 'classic',
      size: ['S', 'M', 'L', 'XL'],
      color: 'Beige',
      description: 'Timeless beige trench coat perfect for Meru\'s cool weather. Water-resistant and stylish.',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
      features: ['Water-resistant', 'Double-breasted', 'Belted waist', 'Classic collar'],
      rating: 4.8
    },
    {
      id: 'modern-black',
      name: 'Modern Black Trench',
      price: 5200,
      originalPrice: 6000,
      category: 'modern',
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: 'Black',
      description: 'Contemporary black trench with modern silhouette. Perfect for university and formal occasions.',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      features: ['Modern cut', 'Breathable fabric', 'Hidden buttons', 'Adjustable cuffs'],
      rating: 4.9
    },
    {
      id: 'lightweight-navy',
      name: 'Lightweight Navy Coat',
      price: 3800,
      originalPrice: 4500,
      category: 'lightweight',
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: 'Navy Blue',
      description: 'Light yet warm navy coat ideal for daily wear around Meru and university campus.',
      image: 'https://images.pexels.com/photos/1040947/pexels-photo-1040947.jpeg',
      features: ['Lightweight', 'Windproof', 'Multiple pockets', 'Casual style'],
      rating: 4.7
    },
    {
      id: 'hooded-olive',
      name: 'Hooded Olive Trench',
      price: 4800,
      originalPrice: 5700,
      category: 'casual',
      size: ['M', 'L', 'XL'],
      color: 'Olive Green',
      description: 'Stylish olive trench with hood. Great for rainy days and outdoor activities in Maua.',
      image: 'https://images.pexels.com/photos/1040946/pexels-photo-1040946.jpeg',
      features: ['Detachable hood', 'Storm flaps', 'Thermal lining', 'Durable fabric'],
      rating: 4.6
    },
    {
      id: 'premium-camel',
      name: 'Premium Camel Coat',
      price: 6500,
      originalPrice: 7800,
      category: 'premium',
      size: ['S', 'M', 'L', 'XL'],
      color: 'Camel',
      description: 'Luxurious camel coat with premium materials. Perfect for special occasions and professional settings.',
      image: 'https://images.pexels.com/photos/1040948/pexels-photo-1040948.jpeg',
      features: ['Premium wool blend', 'Silk lining', 'Hand-finished details', 'Luxury buttons'],
      rating: 5.0
    },
    {
      id: 'student-special-grey',
      name: 'Student Special - Grey',
      price: 2800,
      originalPrice: 3500,
      category: 'budget',
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: 'Grey',
      description: 'Affordable grey trench specifically designed for students. Great quality at student-friendly prices.',
      image: 'https://images.pexels.com/photos/1040949/pexels-photo-1040949.jpeg',
      features: ['Student discount', 'Basic water resistance', 'Simple design', 'Easy care'],
      rating: 4.4
    },
    {
      id: 'winter-burgundy',
      name: 'Winter Burgundy Coat',
      price: 5800,
      originalPrice: 6800,
      category: 'winter',
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: 'Burgundy',
      description: 'Heavy-duty burgundy coat for cold Meru mornings. Excellent insulation and warmth.',
      image: 'https://images.pexels.com/photos/1040950/pexels-photo-1040950.jpeg',
      features: ['Extra insulation', 'Wind resistant', 'Warm lining', 'Deep pockets'],
      rating: 4.8
    },
    {
      id: 'trendy-pink',
      name: 'Trendy Pink Trench',
      price: 4200,
      originalPrice: 5000,
      category: 'trendy',
      size: ['XS', 'S', 'M', 'L'],
      color: 'Pink',
      description: 'Fashionable pink trench for the style-conscious. Stand out on campus with this unique piece.',
      image: 'https://images.pexels.com/photos/1040951/pexels-photo-1040951.jpeg',
      features: ['Fashion-forward', 'Unique color', 'Instagram-worthy', 'Comfortable fit'],
      rating: 4.5
    }
  ]

  const categories = [
    { value: 'all', label: 'All Coats' },
    { value: 'classic', label: 'Classic' },
    { value: 'modern', label: 'Modern' },
    { value: 'casual', label: 'Casual' },
    { value: 'premium', label: 'Premium' },
    { value: 'budget', label: 'Budget-Friendly' },
    { value: 'winter', label: 'Winter Collection' },
    { value: 'trendy', label: 'Trendy Styles' }
  ]

  const sortOptions = [
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'name', label: 'Name A-Z' }
  ]

  const filteredAndSortedCoats = coats
    .filter(coat => filter === 'all' || coat.category === filter)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const handleAddToCart = (coat: typeof coats[0]) => {
    addItem({
      id: coat.id,
      name: coat.name,
      price: coat.price,
      type: 'product'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Trench Coats Collection</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stylish and warm trench coats perfect for Meru's weather - designed for university life
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedCoats.map((coat) => (
            <div
              key={coat.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={coat.image}
                  alt={coat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Rating */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-800">{coat.rating}</span>
                  </div>
                </div>

                {/* Discount Badge */}
                {coat.originalPrice > coat.price && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      Save KES {(coat.originalPrice - coat.price).toLocaleString()}
                    </div>
                  </div>
                )}

                {/* Color */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                    {coat.color}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {coat.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {coat.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-pink-600">
                      KES {coat.price.toLocaleString()}
                    </span>
                    {coat.originalPrice > coat.price && (
                      <span className="text-lg text-gray-400 line-through">
                        KES {coat.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-4">
                  <span className="text-sm text-gray-600">Available sizes: </span>
                  <div className="flex space-x-2 mt-2">
                    {coat.size.map(size => (
                      <span
                        key={size}
                        className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-1">
                    {coat.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Star className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleAddToCart(coat)}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <Plus className="w-5 h-5" />
                  <span className="group-hover:hidden">Add to Cart</span>
                  <span className="hidden group-hover:inline">Order Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Trench Coats?</h2>
            <p className="text-xl text-gray-600">Quality coats designed for Meru's unique climate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Perfect for Meru Weather</h3>
              <p className="text-gray-600">
                Specially selected coats that handle Meru's cool mornings, warm afternoons, and occasional rain perfectly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Student-Friendly Prices</h3>
              <p className="text-gray-600">
                Special pricing for university students with payment plans available. Quality doesn't have to be expensive.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Materials</h3>
              <p className="text-gray-600">
                Durable, comfortable fabrics that last through university years and beyond. Investment pieces worth buying.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Payment Options</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">M</span>
                </div>
                <span className="text-sm font-medium">M-Pesa</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">💵</span>
                </div>
                <span className="text-sm font-medium">Cash</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">P</span>
                </div>
                <span className="text-sm font-medium">PayPal</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">PL</span>
                </div>
                <span className="text-sm font-medium">Payless</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold">K</span>
                </div>
                <span className="text-sm font-medium">KCB Paybill</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrenchCoats