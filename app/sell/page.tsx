'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { TrendingUp, MapPin, CheckCircle, FileText, Home, Upload } from 'lucide-react';
import { AnimatedBackground } from '@/components/animated-background';
import { motion } from 'framer-motion';

export default function SellPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    location: '',
    area: '',
    expectedPrice: '',
    description: ''
  });
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

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
              Sell Your <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Property</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              List your property with us and reach thousands of potential buyers. Get the best value for your property.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-slate-700/50 p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Free Property Valuation</h3>
              <p className="text-slate-300 text-sm">Get accurate market price estimate</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-slate-700/50 p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Wide Buyer Network</h3>
              <p className="text-slate-300 text-sm">Access to verified buyers across Tamil Nadu</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-slate-700/50 p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Legal Assistance</h3>
              <p className="text-slate-300 text-sm">Complete documentation support</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-slate-700/50 p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Zero Hidden Costs</h3>
              <p className="text-slate-300 text-sm">Transparent pricing structure</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Details Form */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-xl border-gold-400/20 p-8 shadow-2xl">
              <motion.h2 
                className="text-2xl font-bold text-white mb-6 text-center"
                animate={{ 
                  color: ["#ffffff", "#fbbf24", "#ffffff"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Property Details
              </motion.h2>
              
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-4 mb-6">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= 1 ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-400'
                  }`}>
                    1
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= 2 ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-400'
                  }`}>
                    2
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= 3 ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-400'
                  }`}>
                    3
                  </div>
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Property Type</label>
                      <Select value={formData.propertyType} onValueChange={(value) => setFormData({...formData, propertyType: value})}>
                        <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:border-gold-400">
                          <SelectValue placeholder="Select Property Type" />
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
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Location</label>
                      <Input
                        placeholder="City, Area, Locality"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Area (Sq Ft)</label>
                      <Input
                        placeholder="Total area in sq ft"
                        value={formData.area}
                        onChange={(e) => setFormData({...formData, area: e.target.value})}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Expected Price (₹)</label>
                      <Input
                        placeholder="Enter expected price"
                        value={formData.expectedPrice}
                        onChange={(e) => setFormData({...formData, expectedPrice: e.target.value})}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Property Description</label>
                    <Textarea
                      placeholder="Describe your property, features, amenities, etc."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400 min-h-32"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Property Images</label>
                    <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-gold-400 transition-colors">
                      <Upload className="w-8 h-8 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-400 mb-2">Click to upload or drag and drop</p>
                      <p className="text-slate-500 text-sm">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                  <Button 
                    onClick={handleNextStep}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-orange-500/25 transition-all duration-300"
                  >
                    Next Step
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="text-center space-y-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-4">Property Verification</h3>
                    <p className="text-slate-300 mb-8">Our team will verify your property details and documents</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-3 text-emerald-400">
                        <CheckCircle className="w-5 h-5" />
                        <span>Property details verified</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-emerald-400">
                        <CheckCircle className="w-5 h-5" />
                        <span>Market analysis completed</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-emerald-400">
                        <CheckCircle className="w-5 h-5" />
                        <span>Documentation reviewed</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={handleNextStep}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-orange-500/25 transition-all duration-300"
                  >
                    Continue
                  </Button>
                </div>
              )}

              {step === 3 && (
                <div className="text-center space-y-6">
                  <div className="text-white">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Listing Submitted Successfully!</h3>
                    <p className="text-slate-300 mb-8">
                      Your property has been submitted for review. Our team will contact you within 24 hours to discuss the next steps.
                    </p>
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                      <p className="text-sm text-slate-400 mb-2">Reference ID</p>
                      <p className="text-emerald-400 font-mono text-lg">RAARYA-{Date.now().toString().slice(-6)}</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/'}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-emerald-500/25 transition-all duration-300"
                  >
                    Back to Home
                  </Button>
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-xl border-gold-400/20 p-8 shadow-2xl">
              <motion.h2 
                className="text-2xl font-bold text-white mb-6 text-center"
                animate={{ 
                  color: ["#ffffff", "#fbbf24", "#ffffff"]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                Contact Information
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Full Name</label>
                  <Input
                    placeholder="Your full name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Phone Number</label>
                  <Input
                    placeholder="Your phone number"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Email Address</label>
                  <Input
                    placeholder="Your email address"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm border-slate-700/50 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with RAARYA</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Get the latest property listings, market insights, and exclusive deals delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email address"
                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 flex-1"
              />
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                Subscribe
              </Button>
            </div>
          </Card>
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
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">RAARYA</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Your trusted partner in selling properties. We help you get the best value for your property with our expert guidance and wide reach.
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