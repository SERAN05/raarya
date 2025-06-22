'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Building, DollarSign, Key, Settings, Users, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoginModal } from '@/components/login-modal';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'Buy', url: '/buy', icon: Building },
  { name: 'Sell', url: '/sell', icon: DollarSign },
  { name: 'Rent', url: '/rent', icon: Key },
  { name: 'Services', url: '/services', icon: Settings },
  { name: 'About', url: '/about', icon: Users }
];

export function Navigation() {
  const pathname = usePathname();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-xl border-b border-gold-400/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="relative w-10 h-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-amber-300 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/WhatsApp Image 2025-06-20 at 17.08.26_46316f18.jpg"
                    alt="RAARYA Logo"
                    width={32}
                    height={32}
                    className="rounded-md"
                    unoptimized
                  />
                </div>
              </motion.div>
              <motion.span 
                className="text-xl font-bold bg-gradient-to-r from-gold-400 to-amber-300 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                RAARYA
              </motion.span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname === item.url;
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.url}
                      className={cn(
                        "relative flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group",
                        isActive 
                          ? "text-gold-400" 
                          : "text-slate-300 hover:text-white"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-amber-300/20 rounded-lg border border-gold-400/30"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-gold-400/10 to-amber-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Login Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                onClick={() => setIsLoginOpen(true)}
                className="bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-500 hover:to-amber-600 text-slate-900 font-semibold shadow-lg hover:shadow-gold-400/25 transition-all duration-300"
                size="sm"
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}