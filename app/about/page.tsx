'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from '@/components/animated-background';
import { 
  Home, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Shield, 
  TrendingUp,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize our customers' needs and satisfaction above everything else.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Building trust through transparent transactions and honest communication.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for excellence in every aspect of our service delivery.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing technology and innovation to provide better services.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "15+ years of experience in real estate"
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Expert in property management"
    },
    {
      name: "Amit Patel",
      position: "Lead Property Consultant",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      description: "Specialist in commercial properties"
    },
    {
      name: "Sneha Reddy",
      position: "Legal Advisor",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      description: "Expert in real estate law"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl font-bold text-white mb-4"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(251, 191, 36, 0.3)",
                  "0 0 40px rgba(251, 191, 36, 0.6)",
                  "0 0 20px rgba(251, 191, 36, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              About <span className="bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">RAARYA</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Your trusted partner in real estate for over 15 years, helping thousands of families find their dream properties.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Founded in 2009, RAARYA has grown from a small local agency to one of the most trusted names in real estate across India. 
                  Our journey began with a simple mission: to make property transactions transparent, efficient, and customer-friendly.
                </p>
                <p>
                  Over the years, we've helped over 50,000 families find their perfect homes, facilitated thousands of commercial property deals, 
                  and guided numerous investors in making sound real estate investments.
                </p>
                <p>
                  Today, we continue to innovate and expand our services, leveraging technology to provide better experiences while maintaining 
                  the personal touch that our customers value.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-xl border-gold-400/20 p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "15+", label: "Years Experience" },
                    { number: "50K+", label: "Happy Customers" },
                    { number: "10K+", label: "Properties Listed" },
                    { number: "100+", label: "Expert Agents" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <motion.div 
                        className="text-3xl font-bold text-gold-400 mb-2"
                        animate={{ 
                          color: ["#fbbf24", "#f59e0b", "#fbbf24"]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-slate-300 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="bg-gradient-to-r from-slate-900/80 to-purple-900/80 backdrop-blur-xl border-gold-400/20 p-6 text-center shadow-xl">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(251, 191, 36, 0.3)",
                        "0 0 40px rgba(251, 191, 36, 0.6)",
                        "0 0 20px rgba(251, 191, 36, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-slate-300 text-sm">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Meet the experienced professionals who drive our success and ensure exceptional service delivery.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="bg-gradient-to-r from-slate-900/80 to-purple-900/80 backdrop-blur-xl border-gold-400/20 p-6 text-center shadow-xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-gold-400/30 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-gold-400 text-sm mb-2">{member.position}</p>
                  <p className="text-slate-300 text-xs">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-gold-400/20 my-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To simplify the property buying, selling, and renting process by providing transparent, 
                efficient, and customer-centric real estate services. We strive to be the most trusted 
                partner in every property transaction, ensuring satisfaction and success for our clients.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To become the leading real estate platform in India, known for innovation, reliability, 
                and customer satisfaction. We envision a future where property transactions are seamless, 
                transparent, and accessible to everyone, powered by technology and human expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-slate-300">Ready to start your property journey? Contact our team today.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                contact: "+91 98765 43210",
                description: "Speak with our property experts"
              },
              {
                icon: Mail,
                title: "Email Us",
                contact: "info@raarya.com",
                description: "Send us your queries"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                contact: "123 Property Street",
                description: "Real Estate District, City"
              }
            ].map((contact, idx) => (
              <motion.div
                key={contact.title}
                className="bg-gradient-to-br from-slate-900/80 to-purple-900/80 border border-gold-400/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <contact.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
                <p className="text-gold-400 font-semibold mb-2">{contact.contact}</p>
                <p className="text-slate-300 text-sm">{contact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-gold-400/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-amber-600 flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">RAARYA</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Your trusted partner in real estate for over 15 years. We help you find the perfect property with expert guidance and professional support.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/properties" className="hover:text-white">Properties</a></li>
                <li><a href="/services" className="hover:text-white">Services</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/career" className="hover:text-white">Career</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="font-semibold text-white mb-4">Property Types</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">Residential Plots</a></li>
                <li><a href="#" className="hover:text-white">Commercial Spaces</a></li>
                <li><a href="#" className="hover:text-white">Agricultural Land</a></li>
                <li><a href="#" className="hover:text-white">Industrial Plots</a></li>
                <li><a href="#" className="hover:text-white">Villas & Houses</a></li>
                <li><a href="#" className="hover:text-white">Apartments</a></li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="font-semibold text-white mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>📍 123 Property Street, Real Estate District, City - 500001</p>
                <p>📞 +91 98765 43210</p>
                <p>📞 +91 87654 32109</p>
                <p>✉️ info@raarya.com</p>
                <p>✉️ support@raarya.com</p>
              </div>
            </motion.div>
          </div>
          
          <div className="border-t border-gold-400/20 pt-8 mt-8 text-center text-sm text-slate-400">
            <p>© 2024 RAARYA. All rights reserved. Built with ❤️ for property seekers.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}