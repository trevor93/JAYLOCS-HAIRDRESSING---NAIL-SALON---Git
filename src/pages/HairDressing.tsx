import React from 'react'
import { Scissors, Clock, Star, Plus } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const HairDressing: React.FC = () => {
  const { addItem } = useCart()

  const services = [
    {
      id: 'braids',
      name: 'Braids',
      price: 300,
      duration: '2-3 hours',
      description: 'Classic braiding styles for all hair types. Perfect for protective styling.',
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg',
      features: ['Protective styling', 'Long-lasting', 'Various patterns available']
    },
    {
      id: 'knotless-braids',
      name: 'Knotless Braids',
      price: 500,
      duration: '3-4 hours',
      description: 'Modern, gentler braiding technique that reduces tension on the scalp.',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg',
      features: ['Less tension', 'Natural look', 'Comfortable wear']
    },
    {
      id: 'weaving',
      name: 'Weaving',
      price: 500,
      duration: '2-4 hours',
      description: 'Professional hair weaving services for length and volume.',
      image: 'https://images.pexels.com/photos/3384253/pexels-photo-3384253.jpeg',
      features: ['Added volume', 'Length extension', 'Various textures']
    },
    {
      id: 'wash-blow',
      name: 'Wash & Blow Dry',
      price: 200,
      duration: '1-1.5 hours',
      description: 'Deep cleansing wash followed by professional blow dry and styling.',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
      features: ['Deep cleansing', 'Professional styling', 'Heat protection']
    },
    {
      id: 'twist-out',
      name: 'Twist Out',
      price: 400,
      duration: '2-3 hours',
      description: 'Beautiful twist out styles that enhance natural curl patterns.',
      image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg',
      features: ['Natural curl enhancement', 'Moisturizing treatment', 'Long-lasting style']
    }
  ]

  const handleBookService = (service: typeof services[0]) => {
    addItem({
      id: service.id,
      name: service.name,
      price: service.price,
      type: 'service'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Scissors className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hair Dressing Services</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Professional hair styling services designed to enhance your natural beauty
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    KES {service.price.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleBookService(service)}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <Plus className="w-5 h-5" />
                  <span className="group-hover:hidden">Add to Cart - KES {service.price.toLocaleString()}</span>
                  <span className="hidden group-hover:inline">Book Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hair Care Tips</h2>
            <p className="text-xl text-gray-600">Keep your hair healthy between appointments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Before Your Appointment</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Wash and condition your hair thoroughly</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Bring your own braiding hair and products</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Come with dry, blow-dried hair</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Bring reference photos if you have specific styles in mind</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Aftercare</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Sleep with a silk or satin bonnet/pillowcase</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Moisturize your scalp regularly</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Avoid excessive manipulation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Schedule maintenance appointments as needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HairDressing