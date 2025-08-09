'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    grade: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simulate form submission for now
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate successful submission
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        grade: '',
        subject: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '0954709885',
      link: 'tel:0954709885',
      description: 'Call us directly'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '0989806015',
      link: 'tel:0989806015',
      description: 'Call us directly'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Telegram',
      value: '@enattutors',
      link: 'https://t.me/enattutors',
      description: 'Message us on Telegram'
    },
    {
      icon: GlobeAltIcon,
      title: 'Website',
      value: 'www.enattutors.com',
      link: 'https://www.enattutors.com',
      description: 'Visit our website'
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      value: 'Addis Ababa, Ethiopia',
      link: '#',
      description: 'Serving the capital city'
    }
  ]

  const grades = [
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6',
    'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'
  ]

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Literature',
    'History', 'Geography', 'Economics', 'Computer Science', 'All Subjects', 'Other'
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-enat-gold/10 via-yellow-400/10 to-enat-purple-light/10">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-enat-black">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your educational journey? Get in touch with us today 
              to discuss your needs and find the perfect tutoring solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-enat-black mb-6">
                Get Started Today
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-enat-purple focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-enat-purple focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-enat-purple focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                      Student Grade *
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-enat-purple focus:border-transparent"
                    >
                      <option value="">Select Grade</option>
                      {grades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject(s) of Interest
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-enat-purple focus:border-transparent"
                  >
                    <option value="">Select Subject</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-enat-purple focus:border-transparent"
                    placeholder="Tell us about your needs, goals, or any specific questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
                  >
                    Thank you! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-enat-black mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  We're here to help! Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.title === 'Telegram' || info.title === 'Website' ? '_blank' : undefined}
                    rel={info.title === 'Telegram' || info.title === 'Website' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-enat-gold to-enat-purple rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-enat-black">{info.title}</h3>
                      <p className="text-enat-purple font-medium">{info.value}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-enat-gold to-enat-purple rounded-xl p-6 text-white"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <ClockIcon className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <p className="text-sm mt-4 text-purple-100">
                  * Flexible scheduling available for online sessions
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-enat-black mb-4">
              Serving Addis Ababa
            </h2>
            <p className="text-lg text-gray-600">
              We provide both in-person and online tutoring services throughout the capital city
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-enat-black">Service Areas</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="w-5 h-5 text-enat-gold" />
                    <span>Bole</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="w-5 h-5 text-enat-gold" />
                    <span>Kazanchis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="w-5 h-5 text-enat-gold" />
                    <span>Kebena</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="w-5 h-5 text-enat-gold" />
                    <span>Kazanchis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="w-5 h-5 text-enat-gold" />
                    <span>And surrounding areas</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-enat-black">Online Services</h3>
                <p className="text-gray-600">
                  We also provide online tutoring services via Zoom, Google Meet, and other 
                  video conferencing platforms, making our services accessible to students 
                  throughout Ethiopia and beyond.
                </p>
                <div className="flex items-center space-x-3">
                  <ComputerDesktopIcon className="w-5 h-5 text-enat-gold" />
                  <span>Available nationwide and internationally</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Don't wait to get the educational support you deserve. 
              Contact us today and take the first step toward academic success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0954709885" className="btn-primary">
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call 0954709885
              </a>
              <a href="tel:0989806015" className="btn-primary">
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call 0989806015
              </a>
              <a href="https://t.me/enattutors" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                Message on Telegram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 