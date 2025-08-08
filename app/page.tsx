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
      <section className="pt-20 pb-16 bg-gradient-to-br from-enat-gold/10 via-yellow-400/10 to-enat-purple-light/10">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-enat-gold to-enat-purple rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-enat-black">
                  Enat <span className="text-gradient">Tutor</span>
                </h1>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-enat-purple">
                Serving with Care!
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Personalized Tutoring with a Mother's Care. We provide comprehensive 
                educational support for grades 1-12 in Addis Ababa, Ethiopia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started Today
                </Link>
                <a href="tel:0954709885" className="btn-secondary">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-enat-gold to-enat-purple rounded-3xl p-8 text-white">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Why Choose Enat Tutor?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <AcademicCapIcon className="w-6 h-6 text-enat-gold" />
                      <span>AAU Graduate Tutors</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <ClockIcon className="w-6 h-6 text-enat-gold" />
                      <span>Flexible Scheduling</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <ComputerDesktopIcon className="w-6 h-6 text-enat-gold" />
                      <span>Online & In-Person</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <MapPinIcon className="w-6 h-6 text-enat-gold" />
                      <span>Addis Ababa Location</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-enat-black mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive tutoring solutions designed with care and expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-enat-black mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
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
              <a href="https://www.enattutor.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-enat-gold transition-colors">
                <GlobeAltIcon className="w-5 h-5" />
                <span>www.enattutor.com</span>
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