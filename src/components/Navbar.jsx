import React from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-xl sm:text-2xl font-bold text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            MatchSense
          </motion.div>
          <div className="flex space-x-4 sm:space-x-8 text-sm sm:text-base">
            <motion.a 
              href="#home"
              className="text-gray-600 hover:text-gray-900"
              whileHover={{ scale: 1.1 }}
            >
              홈
            </motion.a>
            <motion.a 
              href="#service"
              className="text-gray-600 hover:text-gray-900"
              whileHover={{ scale: 1.1 }}
            >
              서비스 소개
            </motion.a>
            <motion.a 
              href="#faq"
              className="text-gray-600 hover:text-gray-900"
              whileHover={{ scale: 1.1 }}
            >
              FAQ
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
