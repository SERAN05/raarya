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
import { PropertyDetailsModal } from './property-details-modal';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

  let popup = null;

  if (typeof window !== 'undefined' && showDetails && document.body) {
    popup = createPortal(
      <motion.div
        ref={cardRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.12, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{ perspective: 2000, transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-md opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
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
          <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
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
          <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-gold-400/10 via-transparent to-gold-400/5 pointer-events-none" />
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent rounded-full"
            animate={{
              scaleX: [0.8, 1.2, 0.8],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
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
      document.body
    );
  }

  return (
    <>
      {/* Card UI */}
      <motion.div>...</motion.div>

      {/* Popup injected here */}
      {popup}

      <PropertyDetailsModal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        property={property}
      />
    </>
  );
}
