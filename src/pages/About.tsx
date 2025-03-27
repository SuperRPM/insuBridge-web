const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">
          InsuBridge 서비스 소개
        </h1>

        <div className="space-y-12">
          {/* 서비스 소개 섹션 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">서비스 소개</h2>
            <p className="text-gray-600 leading-relaxed">
              InsuBridge는 보험 전문가와 고객을 연결하여 최적의 보험 보장을 찾아드리는 서비스입니다.
              현재 가입하신 보험의 보장 내용을 분석하고, 더 나은 보장과 더 낮은 보험료를 제안해드립니다.
            </p>
          </section>

          {/* 주요 특징 섹션 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">주요 특징</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">무료 분석</h3>
                <p className="text-gray-600">
                  보험 전문가가 현재 가입하신 보험을 무료로 분석해드립니다.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">1:1 상담</h3>
                <p className="text-gray-600">
                  전문가와 직접 상담하여 맞춤형 보험 솔루션을 제안받으세요.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">보장 최적화</h3>
                <p className="text-gray-600">
                  현재 보장을 분석하여 더 나은 보장과 더 낮은 보험료를 찾아드립니다.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">전문성</h3>
                <p className="text-gray-600">
                  보험 전문가들이 정확한 분석과 솔루션을 제시합니다.
                </p>
              </div>
            </div>
          </section>

          {/* 분석 프로세스 섹션 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">분석 프로세스</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">보험 분석 신청</h3>
                  <p className="text-gray-600">현재 가입하신 보험 정보를 입력해주세요.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">전문가 분석</h3>
                  <p className="text-gray-600">보험 전문가가 보장 내용을 분석합니다.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">맞춤형 제안</h3>
                  <p className="text-gray-600">분석 결과를 바탕으로 최적의 보험을 제안해드립니다.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About 