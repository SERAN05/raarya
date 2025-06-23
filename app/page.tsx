'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PropertyCard } from '@/components/property-card';
import { SplashScreen } from '@/components/splash-screen';
import { AnimatedBackground } from '@/components/animated-background';
import { sampleProperties } from '@/lib/data';
import { Search, TrendingUp, Users, Award, Star, ArrowRight, Home, Building, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const [searchLocation, setSearchLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');
  const router = useRouter();

  const featuredProperties = sampleProperties.slice(0, 6);

  // Check if splash should be shown
  useEffect(() => {
    const hasShownSplash = sessionStorage.getItem('raarya-splash-shown');
    if (hasShownSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('raarya-splash-shown', 'true');
  };

  const handleSearch = () => {
    alert(`Searching for properties...\nLocation: ${searchLocation || 'Any'}\nType: ${propertyType || 'Any'}\nBudget: ${budget || 'Any'}\n\nRedirecting to search results...`);
    router.push('/buy');
  };

  const handleBuyProperty = () => {
    router.push('/buy');
  };

  const handleSellProperty = () => {
    router.push('/sell');
  };

  const handleRentProperty = () => {
    router.push('/rent');
  };

  // Show splash screen if needed
  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(251, 191, 36, 0.3)",
                  "0 0 40px rgba(251, 191, 36, 0.6)",
                  "0 0 20px rgba(251, 191, 36, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Find Your
              <br />
              <span className="bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Dream Property
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Discover the perfect property for living, farming, or business. Your journey to property ownership starts here with cutting-edge technology and expert guidance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={handleBuyProperty}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Buy Property
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleSellProperty}
                  className="border-gold-400/50 text-gold-400 hover:bg-gold-400 hover:text-slate-900 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
                >
                  <Building className="w-5 h-5 mr-2" />
                  Sell Property
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleRentProperty}
                  className="border-gold-400/50 text-gold-400 hover:bg-gold-400 hover:text-slate-900 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Rent Property
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Property Search */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-xl border-gold-400/20 p-6 max-w-4xl mx-auto shadow-2xl">
              <motion.h2 
                className="text-2xl font-bold text-white mb-6 text-center"
                animate={{ 
                  color: ["#ffffff", "#fbbf24", "#ffffff"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Find Your Perfect Property
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Location</label>
                  <Input
                    placeholder="City, Area, Locality"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Property Type</label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:border-gold-400">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="agricultural">Agricultural</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Budget</label>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:border-gold-400">
                      <SelectValue placeholder="Any Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1000000">Under ₹10L</SelectItem>
                      <SelectItem value="1000000-5000000">₹10L - ₹50L</SelectItem>
                      <SelectItem value="5000000-10000000">₹50L - ₹1Cr</SelectItem>
                      <SelectItem value="10000000+">₹1Cr+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <motion.div 
                    className="w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={handleSearch}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Search Now
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose RAARYA?
          </motion.h2>
          <motion.p 
            className="text-center text-slate-300 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We're committed to making your property journey smooth and successful.
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, count: "10,000+", label: "Properties Listed", desc: "Best property listings across India", color: "from-blue-500 to-cyan-500" },
              { icon: Users, count: "50,000+", label: "Happy Customers", desc: "Customers choose us for reliability", color: "from-green-500 to-emerald-500" },
              { icon: Award, count: "15+", label: "Years Experience", desc: "Years of experience in real estate", color: "from-purple-500 to-pink-500" },
              { icon: Star, count: "100+", label: "Expert Agents", desc: "Expert agents ready for assistance", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(251, 191, 36, 0.3)",
                      "0 0 40px rgba(251, 191, 36, 0.6)",
                      "0 0 20px rgba(251, 191, 36, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-white mb-2"
                  animate={{ 
                    color: ["#ffffff", "#fbbf24", "#ffffff"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.count}
                </motion.div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Properties</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties across various categories.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => router.push('/buy')}
                className="border-gold-400/50 text-gold-400 hover:bg-gold-400 hover:text-slate-900 px-8 py-3 backdrop-blur-sm transition-all duration-300"
              >
                View All Properties
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-gold-400/20 my-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gold-400 mb-4 tracking-wider drop-shadow-lg">What Our Clients Say</h2>
            <p className="text-slate-200">Trusted by thousands of satisfied customers</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Mumbai",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                quote: "Excellent service for selling my property. The valuations are accurate and they found buyers quickly. Very professional team.",
                stars: 5
              },
              {
                name: "Rajesh Kumar",
                location: "Chennai",
                avatar: "https://randomuser.me/api/portraits/men/45.jpg",
                quote: "RAARYA made my first home purchase smooth and stress-free. Highly recommended for first-time buyers!",
                stars: 5
              },
              {
                name: "Aditi Verma",
                location: "Delhi",
                avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                quote: "The team is knowledgeable and always available to answer my questions. I felt supported throughout the process.",
                stars: 4
              },
              {
                name: "Suresh Babu",
                location: "Hyderabad",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                quote: "Great experience! They helped me find the perfect commercial space for my business.",
                stars: 5
              },
              {
                name: "Meena Iyer",
                location: "Bangalore",
                avatar: "https://randomuser.me/api/portraits/women/12.jpg",
                quote: "Professional, transparent, and quick. I sold my land at a great price.",
                stars: 5
              },
              {
                name: "Vikram Singh",
                location: "Pune",
                avatar: "https://randomuser.me/api/portraits/men/77.jpg",
                quote: "Their expert advice and local knowledge made all the difference. Will use again!",
                stars: 4
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                className="bg-gradient-to-br from-slate-900/80 to-purple-900/80 border border-gold-400/20 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
              >
                <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full border-4 border-gold-400 shadow-lg mb-4 object-cover" />
                <div className="flex justify-center mb-2">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-white mb-4 italic">"{testimonial.quote}"</blockquote>
                <div className="font-semibold text-gold-400 text-lg">{testimonial.name}</div>
                <div className="text-slate-300 text-sm">{testimonial.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-xl border-gold-400/20 p-8 text-center shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with RAARYA</h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Get the latest property listings, market insights, and exclusive deals delivered to your inbox
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email address"
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 flex-1 focus:border-gold-400"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                    Subscribe
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
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
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-amber-500 flex items-center justify-center">
                  <Home className="w-5 h-5 text-slate-900" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-gold-400 to-amber-300 bg-clip-text text-transparent">RAARYA</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Your trusted partner in finding the perfect property. We specialize in residential, commercial, agricultural, and industrial real estate solutions.
              </p>
            </motion.div>
            
            {[
              {
                title: "Quick Links",
                links: [
                  { name: "About Us", href: "/about" },
                  { name: "Properties", href: "/buy" },
                  { name: "Services", href: "/services" },
                  { name: "Blog", href: "#" },
                  { name: "Career", href: "#" },
                  { name: "Contact", href: "#" }
                ]
              },
              {
                title: "Property Types",
                links: [
                  { name: "Residential Plots", href: "#" },
                  { name: "Commercial Spaces", href: "#" },
                  { name: "Agricultural Land", href: "#" },
                  { name: "Industrial Plots", href: "#" },
                  { name: "Villas & Houses", href: "#" },
                  { name: "Apartments", href: "#" }
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="hover:text-gold-400 transition-colors duration-300">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
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
          
          <motion.div 
            className="border-t border-slate-700/50 pt-8 mt-8 text-center text-sm text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p>© 2024 RAARYA. All rights reserved. Built with ❤️ for property seekers.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="hover:text-gold-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-gold-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}