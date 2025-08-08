'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PhoneIcon, GlobeAltIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-enat-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-enat-gold to-enat-purple rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">
                Enat <span className="text-enat-gold">Tutor</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Serving with Care! Personalized Tutoring with a Mother's Care.
            </p>
            <p className="text-gray-300 text-sm">
              Grades 1-12 • Addis Ababa, Ethiopia
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-enat-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-enat-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-enat-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-enat-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-enat-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-enat-gold">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="tel:0954709885"
                className="flex items-center space-x-3 text-gray-300 hover:text-enat-gold transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>0954709885</span>
              </a>
              <a
                href="https://www.enattutor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-enat-gold transition-colors"
              >
                <GlobeAltIcon className="w-5 h-5" />
                <span>www.enattutor.com</span>
              </a>
              <a
                href="https://t.me/enattutor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-enat-gold transition-colors"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span>Telegram: @enattutor</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Enat Tutor. All rights reserved. | 
            <span className="text-enat-gold"> Serving with Care!</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 