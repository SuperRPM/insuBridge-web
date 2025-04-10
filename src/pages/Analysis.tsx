import { useState } from 'react'
import { Link } from 'react-router-dom'

const Analysis = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          당뇨/당뇨 전단계 정보
        </h1>

        {/* 당뇨병 기본 정보 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">당뇨병이란?</h2>
          <p className="text-gray-700 mb-4">
            당뇨병은 혈액 속의 포도당(혈당)이 정상보다 높은 상태가 지속되는 만성질환입니다.
            인슐린의 분비가 부족하거나 인슐린의 기능이 저하되어 발생합니다.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">1형 당뇨병</h3>
              <p className="text-gray-600">
                인슐린을 생산하는 췌장의 베타세포가 파괴되어 발생하는 자가면역질환
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">2형 당뇨병</h3>
              <p className="text-gray-600">
                인슐린 저항성과 인슐린 분비 장애가 복합적으로 작용하여 발생
              </p>
            </div>
          </div>
        </section>

        {/* 당뇨 전단계 정보 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">당뇨 전단계란?</h2>
          <p className="text-gray-700 mb-4">
            당뇨 전단계는 정상과 당뇨병 사이의 상태로, 혈당이 정상보다 높지만 당뇨병 진단 기준에는
            미치지 않는 상태를 말합니다. 이 단계에서 적절한 관리가 이루어지면 당뇨병 발병을 예방하거나
            지연시킬 수 있습니다.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-700 mb-2">당뇨 전단계 진단 기준</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>공복혈당: 100-125 mg/dL</li>
              <li>당화혈색소(HbA1c): 5.7-6.4%</li>
              <li>경구당부하검사: 140-199 mg/dL</li>
            </ul>
          </div>
        </section>

        {/* 관리 방법 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">당뇨/당뇨 전단계 관리 방법</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">식이요법</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>균형잡힌 식사</li>
                <li>저탄수화물 식단</li>
                <li>정기적인 식사 시간</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">운동</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>유산소 운동</li>
                <li>근력 운동</li>
                <li>일상 활동 증가</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">정기 검사</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>혈당 측정</li>
                <li>당화혈색소 검사</li>
                <li>합병증 검사</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            상담 신청하기
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Analysis 