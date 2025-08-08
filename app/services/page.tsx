'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  AcademicCapIcon, 
  ClockIcon, 
  ComputerDesktopIcon, 
  MapPinIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function Services() {
  const serviceFeatures = [
    {
      icon: AcademicCapIcon,
      title: 'Grades 1-12',
      description: 'Comprehensive tutoring for all grade levels',
      details: 'From elementary to high school, we cover all subjects and grade levels with specialized curriculum support.'
    },
    {
      icon: MapPinIcon,
      title: '📍 Addis Ababa',
      description: 'Conveniently located in the capital city',
      details: 'We serve families throughout Addis Ababa with both in-person and online tutoring options.'
    },
    {
      icon: ClockIcon,
      title: '⏰ Flexible Hours',
      description: 'Schedule that works for your family',
      details: 'Morning, afternoon, evening, and weekend sessions available to accommodate busy family schedules.'
    },
    {
      icon: ComputerDesktopIcon,
      title: '💻 Online & 📍 In-Person',
      description: 'Choose your preferred learning method',
      details: 'Virtual sessions via Zoom/Teams or face-to-face tutoring at our center or your home.'
    },
    {
      icon: CurrencyDollarIcon,
      title: '✅ Affordable Packages',
      description: 'Competitive pricing for quality education',
      details: 'Flexible payment plans and package deals to make quality tutoring accessible to all families.'
    },
    {
      icon: StarIcon,
      title: '🎯 Exam Prep',
      description: 'Specialized preparation for important exams',
      details: 'Focused preparation for national exams, international curricula, and university entrance tests.'
    },
    {
      icon: GlobeAltIcon,
      title: 'National & International Curricula',
      description: 'Support for diverse educational systems',
      details: 'Experience with Ethiopian national curriculum, IGCSE, IB, American, and other international programs.'
    },
    {
      icon: AcademicCapIcon,
      title: '🎓 AAU Graduate Tutors',
      description: 'Highly qualified and experienced educators',
      details: 'Our tutors are graduates from Addis Ababa University with specialized training in their subjects.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Basic Package',
      price: 'Affordable',
      features: [
        'Individual tutoring sessions',
        'Flexible scheduling',
        'Progress tracking',
        'Homework support'
      ],
      recommended: false
    },
    {
      name: 'Premium Package',
      price: 'Most Popular',
      features: [
        'All Basic features',
        'Exam preparation',
        'Study materials included',
        'Monthly progress reports',
        'Progress consultation'
      ],
      recommended: true
    },
    {
      name: 'Intensive Package',
      price: 'Comprehensive',
      features: [
        'All Premium features',
        'Multiple subjects',
        'Extended session times',
        'Priority scheduling',
        'Weekly assessments'
      ],
      recommended: false
    }
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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tutoring solutions designed with care and expertise. 
              We provide personalized educational support for students in Addis Ababa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-enat-black mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600">
              Every service is designed with your child's success in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-enat-gold to-enat-purple rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-enat-black mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>
                <p className="text-gray-500 text-xs">
                  {service.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-enat-black mb-4">
              Pricing Packages
            </h2>
            <p className="text-lg text-gray-600">
              Flexible options to meet your family's needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg p-8 card-hover ${
                  plan.recommended ? 'ring-2 ring-enat-gold relative' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-enat-gold text-enat-black px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-enat-black mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-enat-purple font-semibold text-lg">
                    {plan.price}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-enat-gold flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.recommended
                        ? 'bg-enat-gold hover:bg-yellow-500 text-enat-black'
                        : 'bg-enat-purple hover:bg-enat-purple-dark text-white'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-enat-black">
                Why Choose <span className="text-gradient">Enat Tutor</span>?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach combines academic excellence with the nurturing care that every child deserves. 
                We understand that each student is unique and requires personalized attention.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <UserGroupIcon className="w-6 h-6 text-enat-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-enat-black">Personalized Approach</h3>
                    <p className="text-gray-600 text-sm">Every student receives customized learning plans tailored to their needs and learning style.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <AcademicCapIcon className="w-6 h-6 text-enat-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-enat-black">Qualified Tutors</h3>
                    <p className="text-gray-600 text-sm">Our tutors are AAU graduates with extensive experience in their respective subjects.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <StarIcon className="w-6 h-6 text-enat-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-enat-black">Proven Results</h3>
                    <p className="text-gray-600 text-sm">Students consistently show improvement in grades, confidence, and academic performance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-enat-gold to-enat-purple rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Our Commitment</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-6 h-6 text-enat-gold" />
                      <span>Individual attention for every student</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-6 h-6 text-enat-gold" />
                      <span>Regular progress updates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-6 h-6 text-enat-gold" />
                      <span>Flexible scheduling options</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-6 h-6 text-enat-gold" />
                      <span>Affordable pricing packages</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-6 h-6 text-enat-gold" />
                      <span>Support for all curricula</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
              Ready to Start Your Child's Success Story?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Contact us today to discuss your child's educational needs and find the perfect tutoring solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get Started Today
              </a>
              <a href="tel:0954709885" className="btn-secondary">
                Call 0954709885
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 