'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatedBackground } from '@/components/animated-background';
import { ConsultationPopup } from '@/components/consultation-popup';
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
  MapPin,
  MessageSquare,
  FileText,
  Calculator,
  Search,
  Building,
  Tractor,
  Factory,
  DollarSign,
  Percent,
  Calendar
} from 'lucide-react';

export default function ServicesPage() {
  const [consultationPopup, setConsultationPopup] = useState<{
    isOpen: boolean;
    type: 'expert' | 'legal';
  }>({
    isOpen: false,
    type: 'expert'
  });

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState('5000000');
  const [interestRate, setInterestRate] = useState('8.5');
  const [tenure, setTenure] = useState('20');
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const services = [
    {
      icon: Home,
      title: "Residential Properties",
      description: "Find your dream home with our extensive collection of residential properties including apartments, villas, and houses.",
      features: ["Verified listings", "Virtual tours", "Expert guidance", "Legal assistance"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building,
      title: "Commercial Properties",
      description: "Discover prime commercial spaces for your business needs with strategic locations and modern amenities.",
      features: ["Prime locations", "Business analysis", "ROI projections", "Lease management"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Tractor,
      title: "Agricultural Land",
      description: "Invest in agricultural land with our expert guidance on soil quality, irrigation, and farming potential.",
      features: ["Soil analysis", "Water availability", "Crop planning", "Government schemes"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Factory,
      title: "Industrial Properties",
      description: "Secure industrial plots and warehouses with proper infrastructure and connectivity for your manufacturing needs.",
      features: ["Infrastructure ready", "Connectivity analysis", "Zoning compliance", "Utility access"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const additionalServices = [
    {
      icon: Search,
      title: "Property Search",
      description: "Advanced search filters to find properties that match your exact requirements.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: FileText,
      title: "Legal Services",
      description: "Complete legal assistance for property transactions and documentation.",
      color: "from-teal-500 to-cyan-500",
      hasConsultation: true,
      consultationType: 'legal' as const
    },
    {
      icon: Calculator,
      title: "Valuation Services",
      description: "Professional property valuation to ensure you get the right price.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Property Insurance",
      description: "Comprehensive insurance solutions to protect your property investment.",
      color: "from-emerald-500 to-green-500"
    }
  ];

  const handleOpenConsultation = (type: 'expert' | 'legal') => {
    setConsultationPopup({
      isOpen: true,
      type
    });
  };

  const handleCloseConsultation = () => {
    setConsultationPopup({
      isOpen: false,
      type: 'expert'
    });
  };

  // EMI Calculator Functions
  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(tenure) * 12;
    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r <= 0 || n <= 0) {
      alert('Please enter valid positive numbers for all fields.');
      return;
    }
    const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmountValue = emiValue * n;
    const totalInterestValue = totalAmountValue - P;
    setEmi(emiValue);
    setTotalAmount(totalAmountValue);
    setTotalInterest(totalInterestValue);
  };

  const resetEMI = () => {
    setLoanAmount('5000000');
    setInterestRate('8.5');
    setTenure('20');
    setEmi(0);
    setTotalAmount(0);
    setTotalInterest(0);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(amount);
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
              Our <span className="bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Comprehensive real estate services to meet all your property needs with expert guidance and professional support.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl font-bold text-white mb-4"
              animate={{ 
                textShadow: [
                  "0 0 15px rgba(251, 191, 36, 0.3)",
                  "0 0 30px rgba(251, 191, 36, 0.6)",
                  "0 0 15px rgba(251, 191, 36, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              EMI <span className="bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">Calculator</span>
            </motion.h2>
            <p className="text-slate-300 text-lg">Calculate your home loan EMI with our advanced calculator</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-slate-900/90 to-purple-900/90 backdrop-blur-xl border-gold-400/20 p-8 shadow-2xl relative overflow-hidden">
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
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner background to cover the gradient border */}
                <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-slate-900/90 to-purple-900/90" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4 shadow-lg"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(251, 191, 36, 0.3)",
                          "0 0 40px rgba(251, 191, 36, 0.6)",
                          "0 0 20px rgba(251, 191, 36, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Calculator className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Loan Calculator</h3>
                      <p className="text-slate-300 text-sm">Get accurate EMI calculations</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block flex items-center">
                        <DollarSign className="w-4 h-4 mr-2 text-gold-400" />
                        Loan Amount (₹)
                      </label>
                      <Input
                        type="number"
                        placeholder="e.g., 5000000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400 focus:ring-gold-400/20"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block flex items-center">
                        <Percent className="w-4 h-4 mr-2 text-gold-400" />
                        Interest Rate (% per annum)
                      </label>
                      <Input
                        type="number"
                        step="0.1"
                        placeholder="e.g., 8.5"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400 focus:ring-gold-400/20"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gold-400" />
                        Loan Tenure (Years)
                      </label>
                      <Input
                        type="number"
                        placeholder="e.g., 20"
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value)}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-gold-400 focus:ring-gold-400/20"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex gap-2"
                    >
                      <Button 
                        onClick={calculateEMI}
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 border border-emerald-300/50"
                      >
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate EMI
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetEMI}
                        className="w-full border-gold-400/50 text-gold-400 hover:bg-gold-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Reset
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Results Display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-slate-900/90 to-purple-900/90 backdrop-blur-xl border-gold-400/20 p-8 shadow-2xl relative overflow-hidden h-full">
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
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner background to cover the gradient border */}
                <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-slate-900/90 to-purple-900/90" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-gold-400 to-amber-500 rounded-full flex items-center justify-center mr-4 shadow-lg"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(251, 191, 36, 0.3)",
                          "0 0 40px rgba(251, 191, 36, 0.6)",
                          "0 0 20px rgba(251, 191, 36, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TrendingUp className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">EMI Breakdown</h3>
                      <p className="text-slate-300 text-sm">Your loan calculation results</p>
                    </div>
                  </div>

                  {emi > 0 ? (
                    <div className="flex-1 space-y-6">
                      {/* Monthly EMI */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-xl p-6 text-center"
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">Monthly EMI</h4>
                        <div className="text-3xl font-bold text-emerald-400 mb-2">
                          {formatCurrency(emi)}
                        </div>
                        <p className="text-slate-300 text-sm">Per month</p>
                      </motion.div>

                      {/* Total Amount */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6"
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">Total Amount Payable</h4>
                        <div className="text-2xl font-bold text-blue-400 mb-2">
                          {formatCurrency(totalAmount)}
                        </div>
                        <p className="text-slate-300 text-sm">
                          Principal: {formatCurrency(parseFloat(loanAmount))} + Interest: {formatCurrency(totalInterest)}
                        </p>
                      </motion.div>

                      {/* Total Interest */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6"
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">Total Interest</h4>
                        <div className="text-2xl font-bold text-purple-400 mb-2">
                          {formatCurrency(totalInterest)}
                        </div>
                        <p className="text-slate-300 text-sm">
                          Interest percentage: {((totalInterest / parseFloat(loanAmount)) * 100).toFixed(1)}%
                        </p>
                      </motion.div>

                      {/* Loan Details */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 border border-slate-600/30 rounded-xl p-6"
                      >
                        <h4 className="text-lg font-semibold text-white mb-4">Loan Details</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-slate-400">Principal Amount</p>
                            <p className="text-white font-semibold">{formatCurrency(parseFloat(loanAmount))}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Interest Rate</p>
                            <p className="text-white font-semibold">{interestRate}% p.a.</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Loan Tenure</p>
                            <p className="text-white font-semibold">{tenure} years</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Total Payments</p>
                            <p className="text-white font-semibold">{formatNumber(parseFloat(tenure) * 12)} months</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <motion.div 
                          className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-4"
                          animate={{ 
                            boxShadow: [
                              "0 0 20px rgba(251, 191, 36, 0.1)",
                              "0 0 40px rgba(251, 191, 36, 0.2)",
                              "0 0 20px rgba(251, 191, 36, 0.1)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Calculator className="w-10 h-10 text-slate-400" />
                        </motion.div>
                        <h4 className="text-xl font-semibold text-slate-400 mb-2">Calculate Your EMI</h4>
                        <p className="text-slate-500 text-sm">Enter loan details and click calculate to see results</p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Property Categories
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-xl border-gold-400/20 p-8 shadow-2xl h-full">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(251, 191, 36, 0.3)",
                        "0 0 40px rgba(251, 191, 36, 0.6)",
                        "0 0 20px rgba(251, 191, 36, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-300">
                        <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={() => handleOpenConsultation('expert')}
                      className="w-full bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-500 hover:to-amber-600 text-slate-900 font-semibold shadow-lg hover:shadow-gold-400/25 transition-all duration-300"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Get Expert Consultation
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Additional Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="bg-gradient-to-r from-slate-900/80 to-purple-900/80 backdrop-blur-xl border-gold-400/20 p-6 text-center shadow-xl">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    animate={{ 
                      boxShadow: [
                        "0 0 15px rgba(251, 191, 36, 0.3)",
                        "0 0 30px rgba(251, 191, 36, 0.6)",
                        "0 0 15px rgba(251, 191, 36, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                  
                  {service.hasConsultation && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        onClick={() => handleOpenConsultation(service.consultationType)}
                        size="sm"
                        className="w-full bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-500 hover:to-amber-600 text-slate-900 font-semibold shadow-lg hover:shadow-gold-400/25 transition-all duration-300"
                      >
                        <MessageSquare className="w-3 h-3 mr-1" />
                        Consult Now
                      </Button>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Consultation CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-xl border-gold-400/20 p-8 text-center shadow-2xl">
              <motion.h2 
                className="text-3xl font-bold text-white mb-4"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(251, 191, 36, 0.3)",
                    "0 0 20px rgba(251, 191, 36, 0.6)",
                    "0 0 10px rgba(251, 191, 36, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Need Expert Guidance?
              </motion.h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Get personalized consultation from our experienced real estate experts. We'll help you make informed decisions about your property investments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => handleOpenConsultation('expert')}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Expert Consultation
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => handleOpenConsultation('legal')}
                    variant="outline"
                    className="border-gold-400/50 text-gold-400 hover:bg-gold-400 hover:text-slate-900 backdrop-blur-sm transition-all duration-300"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Legal Services
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose RAARYA?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We provide comprehensive real estate solutions with years of experience and a commitment to excellence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Experienced professionals with deep knowledge of the real estate market.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description: "All properties are verified and quality-checked before listing.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Shield,
                title: "Secure Transactions",
                description: "Safe and secure property transactions with legal protection.",
                color: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(251, 191, 36, 0.3)",
                      "0 0 40px rgba(251, 191, 36, 0.6)",
                      "0 0 20px rgba(251, 191, 36, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-gold-400/20 my-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gold-400 mb-4 tracking-wider drop-shadow-lg">Get in Touch</h2>
            <p className="text-slate-200">Ready to start your property journey? Contact our experts today.</p>
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
                Your trusted partner in real estate services. We provide comprehensive solutions for all your property needs with expert guidance and professional support.
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

      {/* Consultation Popup */}
      <ConsultationPopup
        isOpen={consultationPopup.isOpen}
        onClose={handleCloseConsultation}
        serviceType={consultationPopup.type}
      />
    </div>
  );
}