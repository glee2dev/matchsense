import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Loading from './Loading';
import { uploadImageToSupabase } from '../utils/imageUpload';

function HeroSection({ onAnalysisComplete }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [uploadMode, setUploadMode] = useState(null); // 'separate' or 'couple'
  const [firstImageUploaded, setFirstImageUploaded] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [firstImageUrl, setFirstImageUrl] = useState(null);

  const funLoadingMessages = [
    "AI가 관상을 정밀 분석 중... 🔍🤖",
    "운명의 상대를 찾는 중... 💖🔮",
    "얼굴만 보면 다 안다?! AI가 판단 중... 😆✨"
  ];

  const getRandomLoadingMessage = () => {
    const randomIndex = Math.floor(Math.random() * funLoadingMessages.length);
    return funLoadingMessages[randomIndex];
  };

  const handleButtonClick = (mode) => {
    // If we're in separate mode and first image is uploaded, don't reset
    if (mode === 'separate' && firstImageUploaded) {
      return;
    }
    
    setUploadMode(mode);
    setUploadStatus(mode === 'separate' ? '각자의 사진을 올려주세요!' : '커플 사진을 올려주세요!');
    // Reset states only if starting fresh
    if (!firstImageUploaded) {
      setFirstImageUrl(null);
      setFirstImageUploaded(false);
    }
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsLoading(true);
    setLoadingMessage(getRandomLoadingMessage());

    try {
      if (uploadMode === 'separate') {
        if (!firstImageUploaded) {
          // Handle first image upload
          const imageUrl = await uploadImageToSupabase(file, 'single');
          if (imageUrl) {
            setFirstImageUrl(imageUrl);
            setFirstImageUploaded(true);
            setUploadStatus('두 번째 사진을 올려주세요!');
          }
        } else {
          // Handle second image upload
          const imageUrl = await uploadImageToSupabase(file, 'single');
          if (imageUrl) {
            // Process both images
            const mockResult = {
              percentage: Math.floor(Math.random() * 30) + 70,
              mainComment: "당신들의 관계는 매우 특별해요!",
              details: [
                "서로를 이해하고 배려하는 마음이 돋보이는 관계입니다.",
                "약간의 차이점이 있지만, 그것이 오히려 관계를 더욱 흥미롭게 만들어줄 수 있어요.",
                "서로의 장점을 잘 살릴 수 있는 환상의 짝꿍이 될 수 있습니다!"
              ]
            };
            onAnalysisComplete(mockResult);
          }
        }
      } else {
        // Handle couple photo upload
        const imageUrl = await uploadImageToSupabase(file, 'couple');
        if (imageUrl) {
          const mockResult = {
            percentage: Math.floor(Math.random() * 30) + 70,
            mainComment: "당신들의 관계는 매우 특별해요!",
            details: [
              "서로를 이해하고 배려하는 마음이 돋보이는 관계입니다.",
              "약간의 차이점이 있지만, 그것이 오히려 관계를 더욱 흥미롭게 만들어줄 수 있어요.",
              "서로의 장점을 잘 살릴 수 있는 환상의 짝꿍이 될 수 있습니다!"
            ]
          };
          onAnalysisComplete(mockResult);
        }
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadStatus('업로드 실패. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
      // Reset file input
      event.target.value = '';
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 text-center">
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI야, 이 얼굴...가능해? 🤖💫
      </motion.h1>
      
      <motion.h2 
        className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        AI가 당신의 얼굴을 보면 뭐라고 할까요? 궁합을 확인해보세요!
      </motion.h2>

      {isLoading ? (
        <Loading message={loadingMessage} />
      ) : (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            style={{ display: 'none' }}
            id="fileInput"
          />
          
          <motion.button
            className="w-full sm:w-auto bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              handleButtonClick('separate');
              document.getElementById('fileInput').click();
            }}
          >
            🧑‍🚀 우리 따로 분석할까?
          </motion.button>

          <motion.button
            className="w-full sm:w-auto bg-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-pink-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              handleButtonClick('couple');
              document.getElementById('fileInput').click();
            }}
          >
            💑 같이 분석할까?
          </motion.button>
        </div>
      )}

      {uploadStatus && (
        <motion.p
          className="mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {uploadStatus}
        </motion.p>
      )}
    </div>
  );
}

export default HeroSection;
