'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  AcademicCapIcon, 
  ClockIcon, 
  ComputerDesktopIcon, 
  MapPinIcon,
  StarIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const services = [
    {
      icon: AcademicCapIcon,
      title: 'Grades 1-12',
      description: 'Comprehensive tutoring for all grade levels',
      color: 'from-enat-gold to-yellow-500'
    },
    {
      icon: ClockIcon,
      title: 'Flexible Hours',
      description: 'Schedule that works for your family',
      color: 'from-enat-purple to-enat-purple-dark'
    },
    {
      icon: ComputerDesktopIcon,
      title: 'Online & In-Person',
      description: 'Choose your preferred learning method',
      color: 'from-enat-gold to-yellow-500'
    },
    {
      icon: MapPinIcon,
      title: 'Addis Ababa',
      description: 'Conveniently located in the capital',
      color: 'from-enat-purple to-enat-purple-dark'
    }
  ]



  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-enat-gold/5 via-yellow-50 to-enat-purple/5 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-enat-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-enat-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-enat-gold to-enat-purple rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">E</span>
                </div>
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold text-enat-black leading-tight">
                    Enat <span className="text-gradient bg-gradient-to-r from-enat-gold to-enat-purple bg-clip-text text-transparent">Tutor</span>
                  </h1>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-enat-purple mb-4">
                  Serving with Care! 💝
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                  Personalized tutoring with a mother's love. We provide comprehensive 
                  educational support for grades 1-12 in Addis Ababa, Ethiopia.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact" className="btn-primary text-lg px-8 py-4 group">
                  <span>Get Started Today</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a href="tel:0954709885" className="btn-secondary text-lg px-8 py-4 group">
                  <PhoneIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Call Now
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center space-x-6 pt-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">100+ Students Served</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Modern feature cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <AcademicCapIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Expert Tutors</h4>
                  <p className="text-sm text-gray-600">AAU Graduates</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Flexible</h4>
                  <p className="text-sm text-gray-600">Your Schedule</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <ComputerDesktopIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Hybrid</h4>
                  <p className="text-sm text-gray-600">Online & In-Person</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Local</h4>
                  <p className="text-sm text-gray-600">Addis Ababa</p>
                </motion.div>
              </div>

              {/* Call-to-action card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-enat-gold via-yellow-400 to-enat-purple rounded-3xl p-8 text-white shadow-2xl"
              >
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Ready to Excel?</h3>
                  <p className="text-white/90">Join hundreds of successful students</p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-enat-purple font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Start Your Journey
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-enat-purple font-semibold text-lg tracking-wide uppercase">WHAT WE OFFER</span>
            <h2 className="text-4xl md:text-5xl font-bold text-enat-black mb-6 mt-2">
              Our <span className="text-gradient bg-gradient-to-r from-enat-gold to-enat-purple bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive tutoring solutions designed with care and expertise for every student's unique journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:border-enat-gold/30 transition-all duration-500 hover:shadow-2xl"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-enat-gold/5 to-enat-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-enat-black mb-4 group-hover:text-enat-purple transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Decorative arrow */}
                  <div className="mt-6 flex items-center text-enat-purple opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-sm font-semibold mr-2">Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>



      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-enat-purple to-enat-purple-dark text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Contact us today to discuss your educational needs and find the perfect tutoring solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0954709885" className="btn-primary">
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call 0954709885
              </a>
              <a href="https://t.me/enattutor" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                Message on Telegram
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 text-purple-100">
              <a href="https://www.enattutors.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-enat-gold transition-colors">
                <GlobeAltIcon className="w-5 h-5" />
                <span>www.enattutors.com</span>
              </a>
              <span className="hidden sm:block">•</span>
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 