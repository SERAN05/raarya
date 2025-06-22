'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Phone, Mail, Calendar, Clock, User, MessageSquare, Building, Home, Tractor, Factory } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: 'expert' | 'legal';
}

export function ConsultationPopup({ isOpen, onClose, serviceType }: ConsultationPopupProps) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    consultationType: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your consultation request! Our expert will contact you within 24 hours.');
    onClose();
  };

  const serviceInfo = {
    expert: {
      title: 'Expert Property Consultation',
      subtitle: 'Get professional advice from our experienced real estate experts',
      icon: User,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Property valuation and analysis',
        'Market trend insights',
        'Investment recommendations',
        'Negotiation strategies'
      ]
    },
    legal: {
      title: 'Legal Services Consultation',
      subtitle: 'Professional legal guidance for all your property transactions',
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Document verification',
        'Legal compliance check',
        'Contract review',
        'Dispute resolution'
      ]
    }
  };

  const currentService = serviceInfo[serviceType];

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup Card */}
          <motion.div
            className="relative w-full max-w-2xl rounded-2xl border-2 border-gold-400/60 shadow-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Glowing Border Animation */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg, transparent, gold, transparent, gold, transparent)',
                backgroundSize: '400% 400%'
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner background to cover the gradient border */}
            <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700/80 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="relative z-10 p-8 pb-6">
              <div className="flex items-center mb-6">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${currentService.color} rounded-full flex items-center justify-center mr-4 shadow-lg`}
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(251, 191, 36, 0.3)",
                      "0 0 40px rgba(251, 191, 36, 0.6)",
                      "0 0 20px rgba(251, 191, 36, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <currentService.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <motion.h2 
                    className="text-2xl font-bold text-white mb-1"
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(251, 191, 36, 0.3)",
                        "0 0 20px rgba(251, 191, 36, 0.6)",
                        "0 0 10px rgba(251, 191, 36, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {currentService.title}
                  </motion.h2>
                  <p className="text-slate-300 text-sm">{currentService.subtitle}</p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {currentService.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center text-slate-300 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="relative z-10 px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Full Name</label>
                    <Input
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Phone Number</label>
                    <Input
                      required
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Email Address</label>
                  <Input
                    required
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Property Type</label>
                    <Select value={formData.propertyType} onValueChange={(value) => setFormData({...formData, propertyType: value})}>
                      <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:border-gold-400">
                        <SelectValue placeholder="Select property type" />
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
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Consultation Type</label>
                    <Select value={formData.consultationType} onValueChange={(value) => setFormData({...formData, consultationType: value})}>
                      <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:border-gold-400">
                        <SelectValue placeholder="Select consultation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buying">Buying</SelectItem>
                        <SelectItem value="selling">Selling</SelectItem>
                        <SelectItem value="renting">Renting</SelectItem>
                        <SelectItem value="investment">Investment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Preferred Date</label>
                    <Input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                      className="bg-slate-800/50 border-slate-600 text-white focus:border-gold-400"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Preferred Time</label>
                    <Select value={formData.preferredTime} onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                      <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:border-gold-400">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 3 PM)</SelectItem>
                        <SelectItem value="evening">Evening (3 PM - 6 PM)</SelectItem>
                        <SelectItem value="night">Night (6 PM - 9 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Additional Message</label>
                  <Textarea
                    placeholder="Tell us about your specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400 min-h-24"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-4"
                >
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-500 hover:to-amber-600 text-slate-900 font-semibold shadow-xl hover:shadow-gold-400/40 transition-all duration-300 border border-gold-300/50"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Request Consultation
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
} 