import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            진짜 전문가에게 받는 보험 보장분석!
          </h1>
          <p className="text-xl mb-8">
            전문가에게 직접 궁금한건 무엇이든 물어보세요
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
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
            2만원짜리 구독 서비스도 꼼꼼히 비교하고 선택하시는데,<br />
            보험은 그대로 두고 계신가요?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">일반적인 소비 패턴</h3>
              <div className="space-y-2">
                <p className="text-gray-600">구독 서비스 월 비용:</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>넷플릭스: 17,000원</li>
                  <li>디즈니플러스: 9,900원</li>
                  <li>유튜브 프리미엄: 14,900원</li>
                  <li>기타 구독 서비스: 20,000원</li>
                  <li>보험료: 557,000원</li>
                  <p className="text-2xl font-bold text-black mt-4">총 월 구독료: 618,800원</p>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">insuBridge 재설계 후 패턴</h3>
              <div className="space-y-2">
                <p className="text-blue-600">개선된 구독 서비스 월 비용:</p>
                <ul className="list-disc list-inside text-blue-600">
                  <li>넷플릭스: 17,000원</li>
                  <li>디즈니플러스: 9,900원</li>
                  <li>유튜브 프리미엄: 14,900원</li>
                  <li>기타 구독 서비스: 20,000원</li>
                  <li>보험료: 321,000원</li>
                  <p className="text-2xl font-bold text-black mt-4">총 월 구독료: 382,800원</p>
                </ul>
                <p className="text-blue-600 font-bold mt-4">
                  보험 분석 후 절감 금액으로 OTT 구독 서비스 비용을 충당할 수 있어요
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            가입된 보험에 대해 진짜 전문가와 1:1로 궁금한 점을 상담하세요
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