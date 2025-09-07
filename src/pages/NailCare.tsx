import React from 'react'
import { Palette, Clock, Star, Plus } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const NailCare: React.FC = () => {
  const { addItem } = useCart()

  const services = [
    {
      id: 'pedicure-polish',
      name: 'Pedicure + Polish',
      price: 400,
      duration: '45-60 min',
      description: 'Complete pedicure with nail shaping, cuticle care, and regular polish.',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg',
      features: ['Foot soak', 'Nail shaping', 'Cuticle care', 'Regular polish']
    },
    {
      id: 'pedicure-gel',
      name: 'Pedicure + Gel Polish',
      price: 500,
      duration: '60-75 min',
      description: 'Luxury pedicure with long-lasting gel polish application.',
      image: 'https://images.pexels.com/photos/3997760/pexels-photo-3997760.jpeg',
      features: ['Complete pedicure', 'Gel polish', 'Long-lasting', 'UV cured']
    },
    {
      id: 'manicure-polish',
      name: 'Manicure + Polish',
      price: 250,
      duration: '30-45 min',
      description: 'Professional manicure with nail care and regular polish application.',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg',
      features: ['Hand treatment', 'Nail shaping', 'Cuticle care', 'Regular polish']
    },
    {
      id: 'manicure-gel',
      name: 'Manicure + Gel Polish',
      price: 350,
      duration: '45-60 min',
      description: 'Professional manicure with durable gel polish for longer wear.',
      image: 'https://images.pexels.com/photos/3997765/pexels-photo-3997765.jpeg',
      features: ['Complete manicure', 'Gel polish', 'Chip-resistant', 'Professional finish']
    },
    {
      id: 'polish',
      name: 'Polish Only',
      price: 100,
      duration: '15-20 min',
      description: 'Quick regular polish application on prepared nails.',
      image: 'https://images.pexels.com/photos/3997382/pexels-photo-3997382.jpeg',
      features: ['Quick service', 'Color change', 'Regular polish', 'Base & top coat']
    },
    {
      id: 'gel-polish',
      name: 'Gel Polish Only',
      price: 200,
      duration: '30-45 min',
      description: 'Gel polish application with professional UV curing.',
      image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg',
      features: ['Gel application', 'UV cured', 'Long-lasting', 'Glossy finish']
    },
    {
      id: 'tip-polish',
      name: 'Tip + Polish',
      price: 300,
      duration: '45-60 min',
      description: 'Nail tip application with regular polish for extended length.',
      image: 'https://images.pexels.com/photos/3997763/pexels-photo-3997763.jpeg',
      features: ['Nail tips', 'Length extension', 'Shaping', 'Regular polish']
    },
    {
      id: 'tip-gel',
      name: 'Tip + Gel Polish',
      price: 500,
      duration: '60-75 min',
      description: 'Premium nail tips with gel polish for durability and style.',
      image: 'https://images.pexels.com/photos/3997387/pexels-photo-3997387.jpeg',
      features: ['Quality tips', 'Professional shaping', 'Gel polish', 'Long-lasting']
    },
    {
      id: 'stick-polish',
      name: 'Stick-on + Polish',
      price: 300,
      duration: '30-45 min',
      description: 'Easy application stick-on nails with regular polish finish.',
      image: 'https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg',
      features: ['Stick-on application', 'Various designs', 'Regular polish', 'Quick service']
    },
    {
      id: 'stick-gel',
      name: 'Stick-on + Gel',
      price: 400,
      duration: '45-60 min',
      description: 'Stick-on nails with gel polish overlay for enhanced durability.',
      image: 'https://images.pexels.com/photos/3997388/pexels-photo-3997388.jpeg',
      features: ['Stick-on nails', 'Gel overlay', 'Enhanced durability', 'Professional finish']
    },
    {
      id: 'eyebrows',
      name: 'Eyebrows Tattoo',
      price: 200,
      duration: '30-45 min',
      description: 'Semi-permanent eyebrow enhancement for defined, natural-looking brows.',
      image: 'https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg',
      features: ['Semi-permanent', 'Natural look', 'Professional technique', 'Long-lasting']
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
              <Palette className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nail Care Services</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Professional nail care and beauty treatments for hands and feet
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-pink-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    KES {service.price.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-600">
                        <Star className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleBookService(service)}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 text-sm group"
                >
                  <Plus className="w-4 h-4" />
                  <span className="group-hover:hidden">Add - KES {service.price.toLocaleString()}</span>
                  <span className="hidden group-hover:inline">Book Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Care Tips */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nail Care Tips</h2>
            <p className="text-xl text-gray-600">Keep your nails beautiful between appointments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Care</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Moisturize hands and cuticles daily</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Wear gloves when cleaning</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Keep nails at moderate length</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Polish Care</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Apply top coat every 3-4 days</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Avoid using nails as tools</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Touch up chips immediately</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Health Tips</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Take biotin supplements</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Give nails breaks between polish</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Stay hydrated for strong nails</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NailCare