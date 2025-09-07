import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Scissors, 
  Palette, 
  Clock, 
  MapPin, 
  Star, 
  ArrowRight,
  Sparkles,
  Heart,
  CheckCircle
} from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const Home: React.FC = () => {
  const { addItem } = useCart()

  const services = [
    {
      title: 'Hair Dressing',
      description: 'Braids, weaving, wash & blow dry, and twist outs',
      price: 'From KES 200',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg',
      link: '/hairdressing'
    },
    {
      title: 'Nail Care',
      description: 'Manicures, pedicures, gel polish, and nail art',
      price: 'From KES 100',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg',
      link: '/nailcare'
    },
    {
      title: 'Dreadlocks',
      description: 'Installation, maintenance, styling, and consultation',
      price: 'From KES 500',
      image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg',
      link: '/dreadlocks'
    },
    {
      title: 'Trench Coats',
      description: 'Stylish coats perfect for Meru weather',
      price: 'From KES 2,500',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
      link: '/coats'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'Amazing braiding service! My knotless braids looked perfect and lasted for weeks.',
      rating: 5
    },
    {
      name: 'Faith K.',
      text: 'The nail art is incredible. Professional service and great prices for students.',
      rating: 5
    },
    {
      name: 'Grace W.',
      text: 'Got my dreadlocks installed here - excellent work and aftercare advice.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-pink-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              JAYLOCS
              <span className="block text-xl md:text-3xl font-light mt-2">
                HAIRDRESSING & NAIL SALON
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
              Premium beauty services for Meru University students and the community
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="py-12 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Working Hours</h3>
              <p className="text-gray-600">Thu-Sun: 8:30AM-7PM</p>
              <p className="text-gray-600">Mon-Wed: CLOSED</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">Meru Town</p>
              <p className="text-gray-600">Serving Maua, Nchiru & surrounding areas</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Student Friendly</h3>
              <p className="text-gray-600">Special rates for</p>
              <p className="text-gray-600">Meru University students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional beauty services with premium quality and student-friendly prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-pink-600 font-semibold hover:text-purple-600 transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Announcements */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Important Information</h2>
            <p className="text-xl opacity-90">Please read before booking your appointment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Come Prepared</h3>
              </div>
              <p className="text-lg opacity-90">
                Please bring your own braids, hair products, and any materials needed for your service. 
                We want to ensure you get exactly what you want!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Hair Preparation</h3>
              </div>
              <p className="text-lg opacity-90">
                Come with freshly washed and blow-dried hair. This helps us provide the best 
                service and ensures optimal results for your styling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from our amazing clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-800">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Beauty Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your appointment today and experience premium beauty services 
            designed for the Meru University community
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home