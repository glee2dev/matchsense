import React from 'react';
import { motion } from 'framer-motion';

function Loading({ message }) {
  return (
    <div className="flex flex-col items-center mt-8">
      <p className="text-gray-700 mb-4">{message}</p>
      <motion.div
        className="w-12 h-12 border-4 border-dashed border-blue-500 rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </div>
  );
}

export default Loading;
