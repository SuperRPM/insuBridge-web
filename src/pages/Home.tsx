import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            세상의 모든 보험 보장분석이 무료!
          </h1>
          <p className="text-xl mb-8">
            전문가와 1:1로 궁금한 점을 상담하세요
          </p>
          <Link
            to="/analysis"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            무료신청 보험료 분석
          </Link>
        </div>
      </section>

      {/* Analysis Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            보험클리닉 보장분석은 이렇게 진행됩니다!
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">보장분석 전</h3>
              <div className="space-y-2">
                <p className="text-gray-600">월 보험료: 568,586원</p>
                <p className="text-gray-600">보장내용:</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>사망: 16,000만원</li>
                  <li>재해(상해): 58,000만원</li>
                  <li>일반암: 6,000만원</li>
                  <li>고액암: 9,000만원</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">보장분석 후</h3>
              <div className="space-y-2">
                <p className="text-blue-600">월 보험료: 305,667원</p>
                <p className="text-blue-600">보장내용:</p>
                <ul className="list-disc list-inside text-blue-600">
                  <li>사망: 2,000만원</li>
                  <li>재해(상해): 11,000만원</li>
                  <li>일반암: 6,300만원</li>
                  <li>고액암: 8,300만원</li>
                </ul>
                <p className="text-blue-600 font-bold mt-4">
                  262,919원 절감!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            가입된 보험에 대해 전문가와 1:1로 궁금한 점을 상담하세요
          </h2>
          <Link
            to="/analysis"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            보험 점검 신청하기
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home 