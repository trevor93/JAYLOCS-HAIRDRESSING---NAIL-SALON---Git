import React, { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react'
import { format, addDays, startOfWeek, isSameDay, isAfter, isBefore } from 'date-fns'
import { useCart } from '../contexts/CartContext'

const Booking: React.FC = () => {
  const { serviceItems, clearServices } = useCart()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    notes: '',
    paymentMethod: '',
    cashAmount: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Generate calendar dates (current week + next 3 weeks)
  const generateCalendarDates = () => {
    const dates = []
    const startDate = startOfWeek(new Date(), { weekStartsOn: 1 }) // Start from Monday
    
    for (let i = 0; i < 28; i++) { // 4 weeks
      const date = addDays(startDate, i)
      const dayOfWeek = date.getDay()
      
      // Only include Thu(4), Fri(5), Sat(6), Sun(0) - our working days
      if (dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0) {
        dates.push(date)
      }
    }
    
    return dates
  }

  const availableDates = generateCalendarDates()

  // Time slots (8:30 AM to 7:00 PM)
  const timeSlots = [
    '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
    '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM'
  ]

  const services = [
    // Hair Dressing
    'Braids (KES 300)',
    'Knotless Braids (KES 500)',
    'Weaving (KES 500)',
    'Wash & Blow Dry (KES 200)',
    'Twist Out (KES 400)',
    
    // Nail Care
    'Pedicure + Polish (KES 400)',
    'Pedicure + Gel Polish (KES 500)',
    'Manicure + Polish (KES 250)',
    'Manicure + Gel Polish (KES 350)',
    'Polish (KES 100)',
    'Gel Polish (KES 200)',
    'Tip + Polish (KES 300)',
    'Tip + Gel (KES 500)',
    'Stick-on + Polish (KES 300)',
    'Stick-on + Gel (KES 400)',
    'Eyebrows Tattoo (KES 200)',
    
    // Dreadlocks
    'Artificial/Temporary Locks (KES 3000)',
    'Dreadlock Extension (KES 2500)',
    'Instant Locks (KES 3500)',
    'Sisterlocks (KES 5000)',
    'Microlocs (KES 800)',
    'Traditional Dreadlocks (KES 2000)',
    'Retwisting/Re-tightening (KES 500)',
    'Loc Repair (KES 300)',
    'Loc Cleansing & Detox (KES 400)',
    'Loc Combining (KES 250)',
    'Loc Styling (KES 300)',
    'Dreadlock Coloring (KES 800)',
    'Interlocking (KES 600)',
    'Consultation for Starters (KES 200)',
    'Hair Type & Care Plan (KES 150)'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', {
      ...formData,
      date: selectedDate,
      time: selectedTime,
      cartItems: serviceItems
    })
    setIsSubmitted(true)
  }

  const getDayName = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return days[date.getDay()]
  }

  const total = serviceItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const cashAmount = parseFloat(formData.cashAmount) || 0
  const change = cashAmount - total

  if (serviceItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Services to Book</h2>
          <p className="text-gray-600 mb-6">
            Add some services to your cart first.
          </p>
        </div>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for booking with JAYLOCS! We've received your appointment request and will contact you shortly to confirm.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">Your appointment details:</p>
            <p className="font-semibold">{selectedDate && format(selectedDate, 'EEEE, MMMM d, yyyy')}</p>
            <p className="font-semibold">{selectedTime}</p>
            <p className="text-sm text-gray-600 mt-2">{formData.service}</p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setSelectedDate(null)
              setSelectedTime('')
              setFormData({ name: '', phone: '', email: '', service: '', notes: '', paymentMethod: '', cashAmount: '' })
              clearServices()
            }}
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-200"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Schedule your beauty appointment with our professional team
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendar and Time Selection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Date & Time</h2>
            
            {/* Calendar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Your Date</h3>
              <div className="text-sm text-gray-600 mb-4">
                We're open Thursday - Sunday, 8:30 AM - 7:00 PM
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {availableDates.map((date) => (
                  <button
                    key={date.toISOString()}
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 rounded-lg text-center transition-all duration-200 ${
                      selectedDate && isSameDay(selectedDate, date)
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    <div className="text-xs font-medium">{getDayName(date)}</div>
                    <div className="text-lg font-bold">{format(date, 'd')}</div>
                    <div className="text-xs">{format(date, 'MMM')}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Your Time</h3>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg text-center text-sm font-medium transition-all duration-200 ${
                        selectedTime === time
                          ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Details</h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                    <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="0712345678"
                    />
                    <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Choose a service...</option>
                    <optgroup label="Hair Dressing">
                      {services.slice(0, 5).map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Nail Care">
                      {services.slice(5, 16).map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Dreadlocks">
                      {services.slice(16).map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Payment Method */}
                <div>
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method *
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    required
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Choose payment method...</option>
                    <option value="mpesa">M-Pesa</option>
                    <option value="cash">Cash</option>
                    <option value="paypal">PayPal</option>
                    <option value="payless">Payless (Kenya)</option>
                    <option value="kcb">KCB Paybill</option>
                  </select>
                </div>

                {/* Cash Payment Calculator */}
                {formData.paymentMethod === 'cash' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                      </svg>
                      Cash Payment Calculator
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <label htmlFor="cashAmount" className="block text-sm font-medium text-blue-700 mb-1">
                          Amount You Have (KES)
                        </label>
                        <input
                          type="number"
                          id="cashAmount"
                          name="cashAmount"
                          value={formData.cashAmount}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter cash amount..."
                        />
                      </div>
                      
                      {cashAmount > 0 && (
                        <div className="bg-white rounded-lg p-3 border border-blue-200">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Service Total:</span>
                            <span className="font-medium">KES {total.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Cash Given:</span>
                            <span className="font-medium">KES {cashAmount.toLocaleString()}</span>
                          </div>
                          <div className="border-t pt-2">
                            <div className="flex justify-between font-semibold">
                              <span className={change >= 0 ? 'text-green-600' : 'text-red-600'}>
                                {change >= 0 ? 'Change:' : 'Short by:'}
                              </span>
                              <span className={change >= 0 ? 'text-green-600' : 'text-red-600'}>
                                KES {Math.abs(change).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Additional Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <div className="relative">
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Any special requests or notes..."
                    />
                    <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Cart Summary */}
                {serviceItems.length > 0 && (
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Cart Summary</h3>
                    <div className="space-y-2 mb-4">
                      {serviceItems.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span>{item.name} x{item.quantity}</span>
                          <span className="font-medium">KES {(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span className="text-pink-600">KES {total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime || !formData.name || !formData.phone || !formData.service || !formData.paymentMethod || (formData.paymentMethod === 'cash' && change < 0)}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Important Booking Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Before Your Visit</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Come with washed and blow-dried hair</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Bring your own braids and hair products</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Arrive 10 minutes before your appointment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Bring reference photos for desired styles</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Payment & Policies</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Payment accepted: M-Pesa, Cash, PayPal, Payless, KCB Paybill</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Cancellations must be made 24 hours in advance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Student discounts available with valid ID</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Group bookings welcome for events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking