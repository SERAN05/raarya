'use client';

import { useState } from 'react';
import { PropertyCard } from '@/components/property-card';
import { sampleProperties } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Search, Filter, MapPin, Home, Building, Tractor, Factory } from 'lucide-react';
import { AnimatedBackground } from '@/components/animated-background';
import { motion } from 'framer-motion';

export default function RentPage() {
  const [searchLocation, setSearchLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [minRent, setMinRent] = useState('');
  const [maxRent, setMaxRent] = useState('');
  const [minArea, setMinArea] = useState('');
  const [sortBy, setSortBy] = useState('');

  const forRentProperties = sampleProperties.filter(p => p.status === 'For Rent');

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
              Rent <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Properties</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Find the perfect rental property that fits your lifestyle and budget.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-xl border-gold-400/20 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
                <motion.h2 
                  className="text-lg font-semibold text-white flex items-center"
                  animate={{ 
                    color: ["#ffffff", "#fbbf24", "#ffffff"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Filter className="w-5 h-5 mr-2" />
                  Advanced Filters
                </motion.h2>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
                </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Min Rent (₹)</label>
                <Input
                  placeholder="Min"
                  value={minRent}
                  onChange={(e) => setMinRent(e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
                />
              </div>
              <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Max Rent (₹)</label>
                <Input
                  placeholder="Max"
                  value={maxRent}
                  onChange={(e) => setMaxRent(e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
                />
              </div>
              <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Area (Sq Ft)</label>
                  <Input
                    placeholder="Min Area"
                    value={minArea}
                    onChange={(e) => setMinArea(e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
                  />
              </div>
            </div>
          </Card>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-white">
              {forRentProperties.length} Properties Found
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 text-sm">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white w-48 focus:border-gold-400">
                  <SelectValue placeholder="Rent: Low to High" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rent-low">Rent: Low to High</SelectItem>
                  <SelectItem value="rent-high">Rent: High to Low</SelectItem>
                  <SelectItem value="area-large">Area: Largest First</SelectItem>
                  <SelectItem value="date-new">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Featured Properties */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Available for Rent</h3>
            <p className="text-slate-300 mb-8">
              Discover our handpicked selection of premium rental properties across various categories.
            </p>
            
            {forRentProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {forRentProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <Card className="bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-xl border-gold-400/20 p-12 text-center shadow-2xl">
                <div className="text-slate-400 text-lg mb-4">No Properties Found</div>
                <p className="text-slate-500">Try adjusting your filters to see more results.</p>
              </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-xl border-gold-400/20 p-8 text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with RAARYA</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Get the latest rental listings, market insights, and exclusive deals delivered to your inbox
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
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">RAARYA</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Your trusted partner in finding the perfect rental property. We specialize in residential, commercial, agricultural, and industrial real estate solutions.
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