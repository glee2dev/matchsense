import React, { useState } from 'react';
import { motion } from 'framer-motion';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "AI 분석은 무료인가요?",
      answer: "기본적인 얼굴 분석과 궁합 점수 제공은 무료입니다! 추가적인 심화 분석은 업그레이드 버전에서 제공될 예정입니다.",
    },
    {
      question: "사진이 저장되나요?",
      answer: "아니요! AI가 분석을 마친 후, 업로드된 사진은 즉시 삭제됩니다. 우리는 개인 정보 보호를 최우선으로 합니다!",
    },
    {
      question: "AI는 어떤 기준으로 얼굴을 분석하나요?",
      answer: "AI는 얼굴 특징(눈, 입, 턱선, 표정 등)을 분석하고 머신러닝을 통해 성격 및 궁합을 예측합니다. 하지만 분석은 참고용일 뿐, 절대적인 기준은 아닙니다!",
    },
    {
      question: "AI가 틀릴 수도 있나요?",
      answer: "AI 분석은 통계적 예측이므로 100% 정확하지 않을 수 있습니다. 하지만 분석 결과를 보면 '어쩌면 맞을지도?' 하는 흥미로운 점이 있을 거예요!",
    },
    {
      question: "향후 업데이트 계획이 있나요?",
      answer: "네! 커플뿐만 아니라 친구 궁합, 직장 동료 궁합, 가족 궁합 분석 기능을 추가할 예정입니다. 또한, 미래의 얼굴 변화 예측 AI도 개발 중입니다!",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="container mx-auto px-4 sm:px-6 text-center py-8 sm:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">❓ 자주 묻는 질문 (FAQ)</h2>
      <div className="max-w-2xl mx-auto">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg mb-3 sm:mb-4 overflow-hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <motion.button
              className="w-full text-left p-3 sm:p-4 flex justify-between items-center text-sm sm:text-base"
              onClick={() => toggleAccordion(index)}
              whileHover={{ backgroundColor: "#f0f0f0" }}
            >
              <span className="font-semibold text-gray-700">{item.question}</span>
              <motion.span
                className="text-gray-500 ml-2"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {openIndex === index ? '▲' : '▼'}
              </motion.span>
            </motion.button>
            <motion.div
              className="p-3 sm:p-4 text-sm sm:text-base text-gray-600"
              style={{ display: openIndex === index ? 'block' : 'none' }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: openIndex === index ? 1 : 0, height: openIndex === index ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.answer}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default FAQ;
