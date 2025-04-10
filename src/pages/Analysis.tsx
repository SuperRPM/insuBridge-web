import { useState } from 'react'
import { Link } from 'react-router-dom'

const Analysis = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          당뇨/당뇨 전단계란?
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

        {/* 당뇨 전단계의 희망적인 소식 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">당뇨 전단계, 희망이 있습니다</h2>
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">인슐린 저항성은 회복 가능합니다</h3>
              <p className="text-gray-700">
                당뇨 전단계는 대부분 인슐린 저항성이 증가한 상태입니다. 하지만 걱정하지 마세요!
                최근 연구에 따르면, 적절한 식단 관리와 규칙적인 운동만으로도 인슐린 저항성을
                크게 개선할 수 있다는 것이 입증되었습니다.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-700 mb-2">주의해야 할 식습관</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>정제된 탄수화물 (흰쌀, 흰빵, 면, 떡 등)</li>
                <li>단당류 (설탕, 액상과당 등)</li>
                <li>액상과당 (과일주스, 탄산음료 등)</li>
                <li>대체당의 과다 섭취</li>
              </ul>
              <p className="text-gray-700 mt-2">
                이러한 식품들은 인슐린 저항성을 증가시킬 수 있으므로 주의가 필요합니다.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">올바른 정보를 선택하세요</h3>
              <p className="text-gray-700">
                많은 분들이 바나바잎, 코로솔산, 여주, 돼지감자 등의 민간요법에 의지하려 합니다.
                하지만 이러한 방법들은 과학적 근거가 부족하며, 과도한 섭취로 오히려 건강을 해칠 수 있습니다.
                실제로 많은 사람들이 단순히 식단 조절과 운동만으로도 당뇨 전단계를 성공적으로
                극복한 사례가 있습니다. 올바른 정보를 선택하고, 꾸준한 관리가 중요합니다.
              </p>
            </div>
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
                <li>복합탄수화물 식단</li>
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