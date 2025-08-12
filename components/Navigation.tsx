'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#packages', label: 'Packages' },
    { href: '#contact', label: 'Contact' }
  ]

  const smoothScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-2xl' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-all duration-500 overflow-hidden">
              <img 
                src="/Logo.png" 
                alt="Enat Tutor Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-2xl font-black text-gray-800">
                Enat <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 bg-clip-text text-transparent">Tutor</span>
              </div>
              <div className="text-xs text-gray-500 font-medium">Serving with Care!</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  smoothScroll(item.href)
                }}
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold relative group hover:-translate-y-1"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:0989806015"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-xl flex items-center space-x-2"
            >
              <span>📞</span>
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-purple-600 text-white"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-purple-600 text-white"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  smoothScroll(item.href)
                }}
                className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile CTA */}
            <a
              href="tel:0989806015"
              className="block bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-6 rounded-full text-center mt-6"
            >
              Call 0989806015
            </a>
          </div>
        </div>
      )}
    </nav>
  )
} 