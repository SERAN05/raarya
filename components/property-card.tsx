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
import { PropertyDetailsModal } from './property-details-modal';

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
  };

  const handleContactAgent = () => {
    alert(`Contacting ${property.agent.name}...\n\nPhone: ${property.agent.phone}\nEmail: ${property.agent.email}\n\nA representative will contact you shortly!`);
  };

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
      <PropertyDetailsModal
        isOpen={showDetails}
        onClose={() => {
          console.log('Modal close triggered');
          setShowDetails(false);
        }}
        property={property}
      />
    </>
  );
}