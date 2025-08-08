'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  HeartIcon,
  AcademicCapIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function About() {
  const values = [
    {
      icon: HeartIcon,
      title: 'Care & Compassion',
      description: 'We treat every student like family, providing the nurturing support they need to thrive.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Excellence',
      description: 'We maintain the highest standards of educational quality and professional development.'
    },
    {
      icon: UserGroupIcon,
      title: 'Personalization',
      description: 'Every student receives customized attention tailored to their unique learning needs.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We continuously adapt our methods to provide the most effective learning experiences.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Trust',
      description: 'Families trust us with their children\'s education, and we honor that trust daily.'
    },
    {
      icon: StarIcon,
      title: 'Results',
      description: 'We are committed to measurable improvements in every student\'s academic journey.'
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
              About <span className="text-gradient">Enat Tutor</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our story is one of passion, dedication, and the belief that every child deserves 
              personalized educational support delivered with a mother's care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
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
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Enat Tutor was founded with a simple yet powerful vision: to provide educational 
                support that combines academic excellence with the nurturing care that every child deserves. 
                The name "Enat" means "mother" in Amharic, reflecting our commitment to treating 
                every student with the same love, patience, and dedication that a mother provides.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a small group of passionate educators from Addis Ababa University 
                has grown into a trusted educational partner for families throughout Addis Ababa. 
                Our founders recognized that many students needed more than just academic tutoring 
                – they needed someone who would care for their overall development and well-being.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to serve with the same care and dedication, helping students 
                from grades 1-12 achieve their full potential while building confidence and a 
                love for learning that lasts a lifetime.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-enat-gold to-enat-purple rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-lg">
                    To provide personalized, high-quality educational support that nurtures 
                    each student's unique potential while fostering confidence, curiosity, 
                    and a lifelong love for learning.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <HeartIcon className="w-6 h-6 text-enat-gold" />
                      <span>Nurturing care for every student</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <AcademicCapIcon className="w-6 h-6 text-enat-gold" />
                      <span>Academic excellence and growth</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <UserGroupIcon className="w-6 h-6 text-enat-gold" />
                      <span>Personalized learning approaches</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-enat-black mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-enat-gold to-enat-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-enat-black mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-r from-enat-purple to-enat-purple-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Families Trust Us
              </h2>
              <p className="text-xl text-purple-100 leading-relaxed">
                Our commitment to excellence and care has made us a trusted partner 
                for families throughout Addis Ababa. We understand that choosing 
                a tutor is a significant decision, and we honor that trust every day.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <AcademicCapIcon className="w-6 h-6 text-enat-gold flex-shrink-0" />
                  <span>AAU graduate tutors with specialized expertise</span>
                </div>
                <div className="flex items-center space-x-4">
                  <HeartIcon className="w-6 h-6 text-enat-gold flex-shrink-0" />
                  <span>Nurturing approach that builds confidence</span>
                </div>
                <div className="flex items-center space-x-4">
                  <UserGroupIcon className="w-6 h-6 text-enat-gold flex-shrink-0" />
                  <span>Personalized attention for every student</span>
                </div>
                <div className="flex items-center space-x-4">
                  <StarIcon className="w-6 h-6 text-enat-gold flex-shrink-0" />
                  <span>Proven track record of academic improvement</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-enat-gold">Our Promise</h3>
                <div className="space-y-4">
                  <p className="text-purple-100">
                    "We promise to treat every student with the same care and dedication 
                    that we would want for our own children. Your child's success is our success."
                  </p>
                  <p className="text-purple-100">
                    "We are committed to continuous improvement and staying current with 
                    the latest educational methods and curricula."
                  </p>
                  <p className="text-purple-100">
                    "We believe in open communication and regular updates 
                    on your child's progress and development."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-enat-black">
              Ready to Experience the Enat Tutor Difference?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the many families who have trusted us with their children's education. 
              Contact us today to learn more about how we can help your child succeed.
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