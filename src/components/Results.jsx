import React from 'react';
import { motion } from 'framer-motion';

function Results({ matchingResult, isVisible }) {
  if (!isVisible) return null;

  return (
    <motion.section
      className="container mx-auto px-4 sm:px-6 py-6 sm:py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
          AI 관상 분석 결과 💫
        </h2>
        
        {matchingResult && (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">
                매칭률 {matchingResult.percentage}%
              </div>
              <div className="text-lg sm:text-xl text-gray-600">
                {matchingResult.mainComment}
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-4 sm:py-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">상세 분석</h3>
              <div className="space-y-3 sm:space-y-4">
                {matchingResult.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {detail}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <motion.button
                className="bg-blue-500 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
              >
                다시 분석하기
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default Results;
