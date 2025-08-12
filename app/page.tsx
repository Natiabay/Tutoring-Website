'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: "🎓",
      title: 'Grades 1-12',
      description: 'Comprehensive tutoring for all grade levels with personalized curriculum',
      color: 'from-yellow-400 to-orange-500',
      features: ['Personalized Learning Plans', 'Exam Preparation', 'Homework Help', 'Progress Tracking']
    },
    {
      icon: "⏰",
      title: 'Flexible Hours',
      description: 'Schedule that works perfectly for your family\'s busy lifestyle',
      color: 'from-purple-500 to-blue-600',
      features: ['Morning Sessions', 'Afternoon Classes', 'Evening Programs', 'Weekend Options']
    },
    {
      icon: "💻",
      title: 'Online & In-Person',
      description: 'Choose your preferred learning method with modern technology',
      color: 'from-pink-500 to-red-500',
      features: ['Virtual Classrooms', 'Interactive Whiteboards', 'Screen Sharing', 'Recorded Sessions']
    },
    {
      icon: "📍",
      title: 'Addis Ababa',
      description: 'Conveniently located in the heart of the capital city',
      color: 'from-green-500 to-teal-500',
      features: ['Central Location', 'Easy Access', 'Safe Environment', 'Modern Facilities']
    }
  ]

  const packages = [
    {
      name: 'National School',
      description: 'Ethiopian National Curriculum',
      icon: '🏫',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Grades 1-12 Ethiopian curriculum',
        'Amharic & English instruction',
        'Government exam preparation',
        'Homework assistance',
        'Progress tracking',
        'Parent consultation'
      ]
    },
    {
      name: 'International School',
      description: 'International Curriculum Standards',
      icon: '🌍',
      color: 'from-yellow-400 to-orange-500',
      features: [
        'International curriculum (IGCSE, IB)',
        'Bilingual instruction',
        'Advanced subject preparation',
        'University entrance guidance',
        'Standardized test prep',
        'Cultural exchange programs',
        'Monthly progress reports'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Logo and Badge */}
              <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                  <img 
                    src="/Logo.png" 
                    alt="Enat Tutor Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Premium Tutoring Services</div>
                  <div className="text-sm text-yellow-300">AAU Graduate Tutors</div>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 bg-clip-text text-transparent">
                    Transform
                  </span>
                  <br />
                  <span className="text-white">Your Future</span>
                </h1>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-yellow-300">
                  Excellence in Education
                </h2>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                  Experience personalized tutoring with a mother's care. Our expert AAU graduate tutors 
                  provide comprehensive support for grades 1-12, helping students achieve their dreams 
                  in Addis Ababa, Ethiopia.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#packages" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-xl group">
                  <span className="flex items-center space-x-2">
                    <span>View Packages</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </a>
                
                <a href="tel:0989806015" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-xl group">
                  <span className="flex items-center space-x-2">
                    <span>📞</span>
                    <span>Call Now</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Content - Interactive Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-700">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white text-center">Why Choose Enat Tutor?</h3>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div 
                        key={index}
                        className={`flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r ${service.color}/20 border border-white/30 hover:scale-105 transition-all duration-300 group`}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-all duration-300`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{service.title}</h4>
                          <p className="text-gray-300 text-sm">{service.description}</p>
                      </div>
                      </div>
                ))}
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-purple-900/50 to-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tutoring solutions designed with care and expertise to help every student succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 group hover:-translate-y-2 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-3xl`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
                  </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gradient-to-br from-slate-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Choose Your <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Learning Path</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Select the perfect tutoring package that matches your child's educational needs and goals. 
              Both options include our signature care and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:border-yellow-400/30 transition-all duration-500 group hover:-translate-y-4 hover:scale-105 shadow-2xl hover:shadow-yellow-400/20"
              >
                {/* Package Header */}
                <div className="text-center mb-10">
                  <div className={`w-24 h-24 bg-gradient-to-br ${pkg.color} rounded-3xl flex items-center justify-center mx-auto mb-6 text-5xl group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    {pkg.icon}
                    </div>
                  <h3 className="text-3xl font-bold text-white mb-3">{pkg.name}</h3>
                  <p className="text-gray-300 text-base mb-4">{pkg.description}</p>
                  <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-2 px-6 rounded-full text-sm">
                    Hourly-based pricing
                  </div>
                  <div className="text-gray-400 text-sm mt-2">Based on student grade level</div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-4 text-gray-300 group-hover:text-white transition-colors duration-300">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-base font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a 
                  href="tel:0989806015" 
                  className="w-full text-center py-5 px-8 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black shadow-xl hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>📞</span>
                    <span>Get Started Today</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">All packages include a free consultation and assessment</p>
            <p className="text-gray-300 mb-6">Pricing varies by grade level and curriculum type</p>
            <a href="tel:0989806015" className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              <span>📞</span>
              <span>Call for Pricing Details</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Contact us today to discuss your child's educational needs and find the perfect tutoring solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:0989806015" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-xl">
                <span className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>Call 0954709885</span>
                </span>
              </a>
              
              <a href="https://t.me/enattutor" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border border-white/30">
                <span className="flex items-center space-x-2">
                  <span>💬</span>
                  <span>Message on Telegram</span>
                </span>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 text-purple-100">
              <a href="https://www.enattutor.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
                <span>🌐</span>
                <span>www.enattutor.com</span>
              </a>
              <span className="hidden sm:block">•</span>
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 