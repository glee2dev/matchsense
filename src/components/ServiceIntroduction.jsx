import React from 'react';
import { motion } from 'framer-motion';

function ServiceIntroduction() {
  return (
    <motion.section
      className="container mx-auto px-4 sm:px-6 text-center py-8 sm:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">📌 AI 관상 매칭이란?</h2>
      <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
        AI는 얼굴을 인공지능으로 분석해 성격, 감정, 궁합을 예측하는 서비스입니다.
        사람들은 오랫동안 얼굴을 보고 성격이나 운명을 추측해왔습니다. 하지만 이제 AI가 이를 더 정확하게 분석할 수 있습니다!
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">🌟 AI가 관상을 어떻게 분석할까요?</h3>
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-8 max-w-2xl mx-auto mb-6 sm:mb-8">
        <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">서비스 원리 (3단계 과정)</h4>
        <ul className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 space-y-4">
          <li className="mb-3 sm:mb-4">
            <span className="font-bold">1️⃣ 얼굴 업로드</span>
            <p className="mt-1">
              사용자가 본인의 사진 또는 커플 사진을 업로드합니다.
              <br />
              <span className="font-semibold">"우리 따로 분석할까?"</span>를 선택하면 두 개의 개별 사진을 업로드해야 합니다.
              <br />
              <span className="font-semibold">"같이 분석할까?"</span>를 선택하면 커플 사진 한 장을 업로드하면 됩니다.
            </p>
          </li>
          <li className="mb-3 sm:mb-4">
            <span className="font-bold">2️⃣ AI 관상 분석 (Gemini 2.0)</span>
            <p className="mt-1">
              AI는 얼굴의 비율, 눈썹, 턱선, 표정, 감정 데이터를 분석합니다.
              <br />
              분석된 얼굴 특징을 바탕으로 성격 유형 및 연애 성향을 예측합니다.
            </p>
          </li>
          <li className="mb-3 sm:mb-4">
            <span className="font-bold">3️⃣ 궁합 분석 (GPT-4)</span>
            <p className="mt-1">
              AI는 두 얼굴을 비교하여 궁합을 계산합니다.
              <br />
              얼굴형, 표정, 감정, 분위기 등의 유사도를 계산해 매칭 점수를 제공합니다.
            </p>
          </li>
        </ul>
        <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">AI가 어떤 데이터를 활용하나요?</h4>
        <p className="text-sm sm:text-base text-gray-600">
          💡 AI는 다음과 같은 요소를 분석하여 궁합을 예측합니다:
          <br />
          ✅ 얼굴형 (Face Shape)
          <br />
          ✅ 눈썹의 각도 (Eyebrow Angle)
          <br />
          ✅ 눈 크기 및 형태 (Eye Shape & Size)
          <br />
          ✅ 입술 모양 (Lip Shape)
          <br />
          ✅ 피부톤 & 조명 (Skin Tone & Lighting)
          <br />
          ✅ 표정 (Facial Expressions)
        </p>
      </div>
    </motion.section>
  );
}

export default ServiceIntroduction;
