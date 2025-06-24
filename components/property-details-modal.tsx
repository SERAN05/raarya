import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Bed, Bath, Square, Calendar, Phone, Mail, User } from 'lucide-react';
import Image from 'next/image';
import { Property } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';

interface PropertyDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: Property;
}

export function PropertyDetailsModal({ isOpen, onClose, property }: PropertyDetailsModalProps) {
  const [mounted, setMounted] = useState(false);
  const [showInterested, setShowInterested] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);
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
          {/* Modal Card */}
          <motion.div
            className="relative w-full max-w-2xl rounded-2xl border-2 border-gold-400/60 shadow-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Glowing Border Animation */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ background: 'conic-gradient(from 0deg, transparent, gold, transparent, gold, transparent)', backgroundSize: '400% 400%' }}
              animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner background to cover the gradient border */}
            <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pointer-events-none" />
            {/* Content */}
            <div className="relative z-10 p-8 pb-6">
              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="flex-shrink-0">
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    width={220}
                    height={150}
                    className="rounded-xl border-2 border-gold-400/50 shadow-xl w-56 h-36 object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <motion.h2
                    className="text-2xl font-bold text-gold-400 mb-1 drop-shadow-lg"
                    animate={{ textShadow: [
                      '0 0 10px rgba(251, 191, 36, 0.3)',
                      '0 0 20px rgba(251, 191, 36, 0.6)',
                      '0 0 10px rgba(251, 191, 36, 0.3)'
                    ] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {property.title}
                  </motion.h2>
                  <div className="flex items-center text-slate-300 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1 text-gold-400" />
                    <span>{property.location.city}, {property.location.state}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center"><Bed className="w-4 h-4 mr-1 text-gold-400" />{property.specs.beds} Beds</div>
                    <div className="flex items-center"><Bath className="w-4 h-4 mr-1 text-gold-400" />{property.specs.baths} Baths</div>
                    <div className="flex items-center"><Square className="w-4 h-4 mr-1 text-gold-400" />{property.specs.sqft.toLocaleString()} Sqft</div>
                  </div>
                  <div className="flex items-center text-slate-400 text-xs mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>Listed {property.listed instanceof Date ? property.listed.toLocaleDateString() : new Date(property.listed).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded-full bg-gradient-to-r from-gold-400 to-amber-400 text-slate-900 text-xs font-semibold border border-gold-300/50 shadow">{property.status}</span>
                    <span className="px-2 py-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white text-xs font-semibold border border-blue-300/50 shadow">{property.type}</span>
                  </div>
                  <div className="text-lg font-bold text-emerald-400 mb-1">{formatPrice(property.price)}</div>
                  <div className="flex justify-end mb-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={onClose}
                      className="border-gold-400/60 text-gold-400 hover:bg-gold-400 hover:text-slate-900 transition-all duration-300 px-4 py-1 rounded-full shadow"
                    >
                      Close
                    </Button>
                  </div>
                  <Button
                    className="mt-4 w-full bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-500 hover:to-amber-600 text-slate-900 font-bold shadow-lg hover:shadow-gold-400/25 transition-all duration-300"
                    onClick={() => setShowInterested(true)}
                  >
                    INTERESTED!!
                  </Button>
                </div>
              </div>
              <div className="mb-4 text-slate-200 italic bg-slate-800/30 backdrop-blur-sm rounded-lg p-3 border border-gold-400/20 text-sm">
                {property.description}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {property.features.map((f, i) => (
                  <span key={i} className="px-2 py-1 rounded-full bg-gradient-to-r from-gold-400 to-amber-400 text-slate-900 text-xs font-semibold border border-gold-300/50 shadow">{f}</span>
                ))}
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 bg-slate-800/20 rounded-lg p-3 border border-gold-400/20 flex flex-col gap-2">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 text-white font-semibold shadow hover:from-emerald-600 hover:to-green-500 transition-all text-sm w-fit mb-1"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    {property.agent.phone}
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold shadow hover:from-blue-600 hover:to-blue-500 transition-all text-sm w-fit mb-1"
                  >
                    <Mail className="w-4 h-4 text-gold-400" />
                    {property.agent.email}
                  </a>
                  <div className="flex items-center gap-2 mt-2">
                    <User className="w-4 h-4 text-gold-400" />
                    <span className="font-bold text-gold-400 text-lg drop-shadow">Agent:</span>
                    <span className="font-bold text-amber-300 text-lg drop-shadow">{property.agent.name}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={property.agent.photo}
                    alt={property.agent.name}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-gold-400 shadow"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {/* Interested Popup */}
          <AnimatePresence>
            {showInterested && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowInterested(false)} />
                <motion.div
                  className="relative w-full max-w-2xl rounded-2xl border-2 border-gold-400/80 shadow-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 flex flex-col items-center overflow-y-auto max-h-[90vh]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    type="button"
                    aria-label="Close details"
                    onClick={() => setShowInterested(false)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700/80 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <h2 className="text-3xl font-bold text-gold-400 mb-6 text-center drop-shadow-lg">Land/Property Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">
                    <div className="space-y-3">
                      <div><span className="font-semibold text-gold-400">Plot Area:</span> <span className="text-emerald-400 font-semibold">{property.specs.sqft}</span> sqft</div>
                      <div><span className="font-semibold text-gold-400">Price:</span> <span className="text-emerald-400 font-semibold">{formatPrice(property.price)}</span></div>
                      <div><span className="font-semibold text-gold-400">Beds:</span> <span className="text-amber-400 font-semibold">{property.specs.beds}</span></div>
                      <div><span className="font-semibold text-gold-400">Baths:</span> <span className="text-amber-400 font-semibold">{property.specs.baths}</span></div>
                      <div><span className="font-semibold text-gold-400">Year Built:</span> <span className="text-emerald-400 font-semibold">{property.specs.yearBuilt || 'N/A'}</span></div>
                    </div>
                    <div className="space-y-3">
                      <div><span className="font-semibold text-gold-400">Address:</span> <span className="text-white font-semibold">{property.location.address}</span></div>
                      <div><span className="font-semibold text-gold-400">City:</span> <span className="text-white font-semibold">{property.location.city}</span></div>
                      <div><span className="font-semibold text-gold-400">State:</span> <span className="text-white font-semibold">{property.location.state}</span></div>
                      <div><span className="font-semibold text-gold-400">Zip:</span> <span className="text-emerald-400 font-semibold">{property.location.zip}</span></div>
                      <div><span className="font-semibold text-gold-400">Type:</span> <span className="text-blue-400 font-semibold">{property.type}</span></div>
                    </div>
                  </div>
                  <div className="bg-slate-800/60 rounded-lg p-4 border border-gold-400/30 text-slate-200 text-sm w-full mb-4">
                    {property.description}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-500 hover:to-amber-600 text-slate-900 font-bold shadow-lg hover:shadow-gold-400/25 transition-all duration-300"
                    onClick={() => setShowInterested(false)}
                  >
                    Close
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
} 