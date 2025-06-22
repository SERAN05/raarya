'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Property } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, MapPin, Bed, Bath, Square, Calendar, Phone, Mail } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { createPortal } from 'react-dom';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape
  useEffect(() => {
    if (!showDetails) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setShowDetails(false);
    }
    function handleClick(e: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setShowDetails(false);
      }
    }
    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [showDetails]);

  const handleViewDetails = () => {
    setShowDetails(true);
    // Simulate property details view
    alert(`Property Details:\n\nTitle: ${property.title}\nPrice: ${formatPrice(property.price)}\nLocation: ${property.location.city}, ${property.location.state}\nAgent: ${property.agent.name}\nPhone: ${property.agent.phone}\nEmail: ${property.agent.email}\n\nDescription: ${property.description}\n\nFeatures: ${property.features.join(', ')}`);
  };

  const handleContactAgent = () => {
    alert(`Contacting ${property.agent.name}...\n\nPhone: ${property.agent.phone}\nEmail: ${property.agent.email}\n\nA representative will contact you shortly!`);
  };

  // Render the popup in a portal to avoid overlap issues
  const popup = showDetails ? createPortal(
    <motion.div
      ref={cardRef}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1.12, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ perspective: 2000, transformStyle: 'preserve-3d' }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-md opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
      {/* Popup Card */}
      <motion.div
        className="relative w-full max-w-md rounded-2xl border-2 border-gold-400/60 shadow-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 flex flex-col items-center overflow-hidden"
        style={{
          transform: `rotateY(0deg)`,
          backfaceVisibility: 'hidden',
          transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
          boxShadow: '0 0 30px rgba(251, 191, 36, 0.4), 0 0 60px rgba(251, 191, 36, 0.2), inset 0 0 30px rgba(251, 191, 36, 0.05)'
        }}
        tabIndex={-1}
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
        
        {/* Animated Glow Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: [
              '0 0 15px rgba(251, 191, 36, 0.5), 0 0 30px rgba(251, 191, 36, 0.3)',
              '0 0 30px rgba(251, 191, 36, 0.7), 0 0 60px rgba(251, 191, 36, 0.4)',
              '0 0 15px rgba(251, 191, 36, 0.5), 0 0 30px rgba(251, 191, 36, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Inner Glow Effect */}
        <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-gold-400/10 via-transparent to-gold-400/5 pointer-events-none" />
        
        {/* Top Decorative Line */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent rounded-full"
          animate={{
            scaleX: [0.8, 1.2, 0.8],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Corner Decorations */}
        <div className="absolute top-3 left-3 w-2 h-2 border-l-2 border-t-2 border-gold-400 rounded-tl-lg" />
        <div className="absolute top-3 right-3 w-2 h-2 border-r-2 border-t-2 border-gold-400 rounded-tr-lg" />
        <div className="absolute bottom-3 left-3 w-2 h-2 border-l-2 border-b-2 border-gold-400 rounded-bl-lg" />
        <div className="absolute bottom-3 right-3 w-2 h-2 border-r-2 border-b-2 border-gold-400 rounded-br-lg" />
        
        <Image
          src={property.images[0]}
          alt={property.title}
          width={400}
          height={250}
          className="w-full h-40 object-cover rounded-xl border-2 border-gold-400/50 mb-3 shadow-xl relative z-10"
          unoptimized
        />
        
        {/* Image Glow Effect */}
        <motion.div
          className="absolute top-6 left-6 right-6 h-40 rounded-xl pointer-events-none"
          animate={{
            boxShadow: [
              '0 0 15px rgba(251, 191, 36, 0.4)',
              '0 0 30px rgba(251, 191, 36, 0.6)',
              '0 0 15px rgba(251, 191, 36, 0.4)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <h3 className="text-xl font-bold text-gold-400 mb-2 text-center drop-shadow-lg relative z-10">
          <motion.span
            animate={{
              textShadow: [
                '0 0 8px rgba(251, 191, 36, 0.5)',
                '0 0 16px rgba(251, 191, 36, 0.8)',
                '0 0 8px rgba(251, 191, 36, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {property.title}
          </motion.span>
        </h3>
        
        <div className="flex items-center text-slate-300 text-xs mb-2">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0 text-gold-400 drop-shadow-[0_0_8px_gold]" />
          <span>{property.location.city}, {property.location.state}</span>
        </div>
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="flex items-center"><Bed className="w-4 h-4 mr-1 text-gold-400 drop-shadow-[0_0_8px_gold]" />{property.specs.beds}</div>
          <div className="flex items-center"><Bath className="w-4 h-4 mr-1 text-gold-400 drop-shadow-[0_0_8px_gold]" />{property.specs.baths}</div>
          <div className="flex items-center"><Square className="w-4 h-4 mr-1 text-gold-400 drop-shadow-[0_0_8px_gold]" />{property.specs.sqft.toLocaleString()}</div>
        </div>
        <div className="text-slate-200 text-center mb-3 italic relative z-10 bg-slate-800/30 backdrop-blur-sm rounded-lg p-2 border border-gold-400/20 text-sm">
          {property.description}
        </div>
        <div className="flex flex-wrap gap-1 justify-center mb-3">
          {property.features.map((f, i) => (
            <motion.span 
              key={i} 
              className="px-2 py-1 rounded-full bg-gradient-to-r from-gold-400 to-amber-400 text-slate-900 text-xs font-semibold shadow-lg border border-gold-300/50"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {f}
            </motion.span>
          ))}
        </div>
        <div className="w-full flex flex-col items-center gap-1 mb-3 bg-slate-800/20 backdrop-blur-sm rounded-lg p-3 border border-gold-400/20">
          <div className="flex items-center gap-2 text-slate-300 text-xs"><Phone className="w-3 h-3 text-gold-400 drop-shadow-[0_0_8px_gold]" /> {property.agent.phone}</div>
          <div className="flex items-center gap-2 text-slate-300 text-xs"><Mail className="w-3 h-3 text-gold-400 drop-shadow-[0_0_8px_gold]" /> {property.agent.email}</div>
          <div className="flex items-center gap-2 text-slate-300 text-xs"><span className="font-semibold text-gold-400">Agent:</span> {property.agent.name}</div>
        </div>
        
        {/* Bottom Decorative Line */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent rounded-full"
          animate={{
            scaleX: [0.8, 1.2, 0.8],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
        
        <Button
          size="sm"
          className="bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-500 hover:to-amber-600 text-slate-900 font-semibold shadow-xl hover:shadow-gold-400/40 transition-all duration-300 w-full relative z-10 border border-gold-300/50"
          onClick={() => setShowDetails(false)}
        >
          Close
        </Button>
      </motion.div>
    </motion.div>,
    typeof window !== 'undefined' ? document.body : null
  ) : null;

  return (
    <>
      {/* Card and Flip Popup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="group"
      >
        <motion.div
          className="relative"
          style={{ perspective: 2000, transformStyle: 'preserve-3d' }}
        >
          {/* Card Front */}
          <motion.div
            style={{
              transform: `rotateY(${showDetails ? 180 : 0}deg)`,
              backfaceVisibility: 'hidden',
              position: 'relative',
              zIndex: showDetails ? 0 : 2,
              transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
            className={showDetails ? 'pointer-events-none' : ''}
          >
            <Card className="overflow-hidden bg-gradient-to-br from-slate-900/90 to-purple-900/90 backdrop-blur-sm border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-gold-400/10">
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    unoptimized
                  />
                </motion.div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-3 left-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Badge 
                      variant={property.status === 'For Sale' ? 'default' : 'secondary'}
                      className="bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg"
                    >
                      {property.status}
                    </Badge>
                  </motion.div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-300"
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''} drop-shadow-[0_0_8px_gold]`} />
                </motion.button>
                
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <motion.span 
                    className="text-white font-bold text-lg bg-gradient-to-r from-gold-400 to-amber-300 bg-clip-text text-transparent"
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(251, 191, 36, 0.3)",
                        "0 0 20px rgba(251, 191, 36, 0.6)",
                        "0 0 10px rgba(251, 191, 36, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {formatPrice(property.price)}
                  </motion.span>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <motion.h3 
                  className="font-semibold text-white text-lg leading-tight group-hover:text-gold-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {property.title}
                </motion.h3>
                
                <div className="flex items-center text-slate-300 text-sm">
                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0 text-gold-400 drop-shadow-[0_0_8px_gold]" />
                  <span className="truncate">
                    {property.location.city}, {property.location.state}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-300">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Bed className="w-4 h-4 mr-1 text-gold-400 drop-shadow-[0_0_8px_gold]" />
                      <span>{property.specs.beds}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Bath className="w-4 h-4 mr-1 text-gold-400 drop-shadow-[0_0_8px_gold]" />
                      <span>{property.specs.baths}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Square className="w-4 h-4 mr-1 text-gold-400 drop-shadow-[0_0_8px_gold]" />
                      <span>{property.specs.sqft.toLocaleString()}</span>
                    </motion.div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center text-xs text-slate-400">
                    <Calendar className="w-3 h-3 mr-1 drop-shadow-[0_0_8px_gold]" />
                    <span>Listed {property.listed.toLocaleDateString()}</span>
                  </div>
                  <div className="flex space-x-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={handleContactAgent}
                        className="border-gold-400/50 text-gold-400 hover:bg-gold-400 hover:text-slate-900 transition-all duration-300"
                      >
                        <Phone className="w-3 h-3 mr-1 drop-shadow-[0_0_8px_gold]" />
                        Contact
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="sm" 
                        onClick={handleViewDetails}
                        className="bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-500 hover:to-amber-600 text-slate-900 font-semibold shadow-lg hover:shadow-gold-400/25 transition-all duration-300"
                      >
                        View Details
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
      {popup}
    </>
  );
}