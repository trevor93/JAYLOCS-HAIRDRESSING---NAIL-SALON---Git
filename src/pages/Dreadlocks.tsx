import React, { useState } from 'react'
import { Star, Clock, Users, Plus, BookOpen } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const Dreadlocks: React.FC = () => {
  const { addItem } = useCart()
  const [activeSection, setActiveSection] = useState('installation')

  const sections = {
    installation: {
      title: 'Installation Services',
      icon: Plus,
      services: [
        {
          id: 'artificial-locks',
          name: 'Artificial/Temporary Locks',
          price: 3000,
          duration: '4-6 hours',
          description: 'Quick temporary dreadlocks using synthetic hair for immediate results.',
          image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg',
          features: ['Instant results', 'Synthetic hair', 'Removable', 'Various lengths']
        },
        {
          id: 'dreadlock-extension',
          name: 'Dreadlock Extension',
          price: 2500,
          duration: '3-5 hours',
          description: 'Add length and volume to existing dreadlocks with extensions.',
          image: 'https://images.pexels.com/photos/1462638/pexels-photo-1462638.jpeg',
          features: ['Length addition', 'Volume enhancement', 'Natural blend', 'Various textures']
        },
        {
          id: 'instant-locks',
          name: 'Instant Locks',
          price: 3500,
          duration: '3-4 hours',
          description: 'Fast installation method for immediate dreadlock appearance.',
          image: 'https://images.pexels.com/photos/1462639/pexels-photo-1462639.jpeg',
          features: ['Quick process', 'Immediate results', 'Professional technique', 'Natural look']
        },
        {
          id: 'sisterlocks',
          name: 'Sisterlocks',
          price: 5000,
          duration: '6-8 hours',
          description: 'Precision micro-locking technique for fine, versatile locs.',
          image: 'https://images.pexels.com/photos/1462640/pexels-photo-1462640.jpeg',
          features: ['Micro technique', 'Versatile styling', 'Fine locks', 'Professional method']
        },
        {
          id: 'microlocs',
          name: 'Microlocs',
          price: 800,
          duration: '2-3 hours',
          description: 'Small, delicate dreadlocks for a refined, neat appearance.',
          image: 'https://images.pexels.com/photos/1462641/pexels-photo-1462641.jpeg',
          features: ['Small size', 'Neat appearance', 'Easy maintenance', 'Professional finish']
        },
        {
          id: 'traditional-dreads',
          name: 'Traditional Dreadlocks',
          price: 2000,
          duration: '4-6 hours',
          description: 'Classic dreadlock installation using traditional methods.',
          image: 'https://images.pexels.com/photos/1462642/pexels-photo-1462642.jpeg',
          features: ['Classic method', 'Long-lasting', 'Natural process', 'Authentic style']
        }
      ]
    },
    maintenance: {
      title: 'Maintenance Services',
      icon: Star,
      services: [
        {
          id: 'retwisting',
          name: 'Retwisting/Re-tightening',
          price: 500,
          duration: '1-2 hours',
          description: 'Professional root maintenance to keep dreadlocks neat and tight.',
          image: 'https://images.pexels.com/photos/1462643/pexels-photo-1462643.jpeg',
          features: ['Root maintenance', 'Neat appearance', 'Regular upkeep', 'Professional technique']
        },
        {
          id: 'loc-repair',
          name: 'Loc Repair',
          price: 300,
          duration: '30-60 min',
          description: 'Fix broken or damaged dreadlocks to restore their integrity.',
          image: 'https://images.pexels.com/photos/1462644/pexels-photo-1462644.jpeg',
          features: ['Damage repair', 'Integrity restoration', 'Professional fix', 'Seamless blend']
        },
        {
          id: 'loc-cleansing',
          name: 'Loc Cleansing & Detox',
          price: 400,
          duration: '1-1.5 hours',
          description: 'Deep cleansing treatment to remove buildup and refresh locs.',
          image: 'https://images.pexels.com/photos/1462645/pexels-photo-1462645.jpeg',
          features: ['Deep cleansing', 'Buildup removal', 'Scalp health', 'Fresh feeling']
        },
        {
          id: 'loc-combining',
          name: 'Loc Combining',
          price: 250,
          duration: '30-45 min',
          description: 'Combine thin locs or separate thick ones for desired thickness.',
          image: 'https://images.pexels.com/photos/1462646/pexels-photo-1462646.jpeg',
          features: ['Thickness adjustment', 'Uniform appearance', 'Professional technique', 'Customized look']
        }
      ]
    },
    styling: {
      title: 'Styling & Coloring',
      icon: BookOpen,
      services: [
        {
          id: 'loc-styling',
          name: 'Loc Styling (Braids, Updos, Buns)',
          price: 300,
          duration: '45-90 min',
          description: 'Creative styling options for special occasions and everyday wear.',
          image: 'https://images.pexels.com/photos/1462647/pexels-photo-1462647.jpeg',
          features: ['Creative styles', 'Special occasions', 'Versatile looks', 'Professional finish']
        },
        {
          id: 'loc-coloring',
          name: 'Dreadlock Coloring',
          price: 800,
          duration: '2-3 hours',
          description: 'Add color to your locs with professional hair coloring techniques.',
          image: 'https://images.pexels.com/photos/1462648/pexels-photo-1462648.jpeg',
          features: ['Color application', 'Professional dyes', 'Even coverage', 'Vibrant results']
        },
        {
          id: 'interlocking',
          name: 'Interlocking',
          price: 600,
          duration: '2-3 hours',
          description: 'Precision interlocking technique for maintenance and styling.',
          image: 'https://images.pexels.com/photos/1462649/pexels-photo-1462649.jpeg',
          features: ['Precision technique', 'Long-lasting', 'Professional method', 'Neat finish']
        }
      ]
    },
    consultation: {
      title: 'Professional Consultation',
      icon: Users,
      services: [
        {
          id: 'starter-consultation',
          name: 'Consultation for Starters',
          price: 200,
          duration: '30-45 min',
          description: 'Expert consultation for those beginning their dreadlock journey.',
          image: 'https://images.pexels.com/photos/1462650/pexels-photo-1462650.jpeg',
          features: ['Expert guidance', 'Hair assessment', 'Method recommendation', 'Care instructions']
        },
        {
          id: 'hair-type-analysis',
          name: 'Hair Type & Care Plan',
          price: 150,
          duration: '30 min',
          description: 'Detailed hair analysis and personalized long-term care plan.',
          image: 'https://images.pexels.com/photos/1462651/pexels-photo-1462651.jpeg',
          features: ['Hair analysis', 'Personalized plan', 'Care instructions', 'Product recommendations']
        }
      ]
    }
  }

  const handleBookService = (service: any) => {
    addItem({
      id: service.id,
      name: service.name,
      price: service.price,
      type: 'service'
    })
  }

  const currentSection = sections[activeSection as keyof typeof sections]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dreadlock Services</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Complete dreadlock care from installation to maintenance by professional locticians
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-0 overflow-x-auto">
            {Object.entries(sections).map(([key, section]) => {
              const IconComponent = section.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                    activeSection === key
                      ? 'border-pink-600 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{section.title}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Services Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentSection.title}</h2>
          <p className="text-xl text-gray-600">
            {activeSection === 'installation' && 'Professional dreadlock installation services for every hair type and preference'}
            {activeSection === 'maintenance' && 'Keep your dreadlocks healthy and looking their best with regular maintenance'}
            {activeSection === 'styling' && 'Creative styling options and coloring services to express your unique style'}
            {activeSection === 'consultation' && 'Expert guidance and personalized care plans for your dreadlock journey'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentSection.services.map((service) => (
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

      {/* Care Guide */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dreadlock Care Guide</h2>
            <p className="text-xl text-gray-600">Essential tips for healthy, beautiful locs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">New Locs (0-6 months)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Wash weekly with residue-free shampoo</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Palm roll roots every 2-3 weeks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Sleep with a silk or satin pillowcase</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Avoid heavy products and conditioners</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mature Locs (6+ months)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Wash 1-2 times per week</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Root maintenance every 4-6 weeks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Use natural oils for moisture</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Regular scalp massage for health</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">General Tips</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Dry thoroughly after washing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Protect from harsh chemicals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Regular professional maintenance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Be patient with the locking process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dreadlocks