import { Link } from 'react-router-dom'
import { useState } from 'react'
import { API_ENDPOINTS } from '../config/api'
import { fetchApi } from '../utils/api'
import PrivacyPolicyModal from '../components/PrivacyPolicyModal'

interface UserResponse {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  phone: string;
  hba1c: number;
  fasting_blood_sugar: number;
}

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    hba1c: '',
    fasting_blood_sugar: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [privacyAgreed, setPrivacyAgreed] = useState(false)
  const [activeForm, setActiveForm] = useState<'hero' | 'cta'>('hero')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.')
      return
    }
    
    setIsSubmitting(true)

    try {
      const response = await fetchApi<UserResponse>(API_ENDPOINTS.USERS, {
        method: 'POST',
        body: JSON.stringify(formData)
      })

      alert('상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.')
      setFormData({ name: '', phone: '', hba1c: '', fasting_blood_sugar: '' })
      setPrivacyAgreed(false)
    } catch (error) {
      alert(error instanceof Error ? error.message : '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatPhoneNumber = (value: string) => {
    // 숫자만 추출
    const numbers = value.replace(/[^\d]/g, '')
    
    // 길이에 따라 포맷팅
    if (numbers.length <= 3) {
      return numbers
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'phone' ? formatPhoneNumber(value) : value
    }))
  }

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12 md:py-16 lg:py-20 w-full">
        <div className="w-full px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">
            당뇨 진단 전, 미리 알았더라면 준비했을 보험.
          </h1>
          <p className="text-lg md:text-xl text-center mb-6 md:mb-8">
            저와 같은 2030을 위해 만든 맞춤 보험 매칭 서비스입니다.
          </p>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 bg-blue-50"
                placeholder="이름을 입력해주세요"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 bg-blue-50"
                placeholder="전화번호를 입력해주세요"
                required
                maxLength={13}
              />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="number"
                    name="hba1c"
                    value={formData.hba1c}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 bg-blue-50"
                    placeholder="당화혈색소(HbA1c)"
                    step="0.1"
                    min="0"
                    max="20"
                    required
                  />
                  <p className="text-xs text-white mt-1">※ 최근 3개월 내 검사 결과</p>
                </div>
                <div>
                  <input
                    type="number"
                    name="fasting_blood_sugar"
                    value={formData.fasting_blood_sugar}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 bg-blue-50"
                    placeholder="공복혈당(mg/dL)"
                    min="0"
                    max="500"
                    required
                  />
                  <p className="text-xs text-white mt-1">※ 최근 3개월 내 검사 결과</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  id="privacy-hero"
                  checked={privacyAgreed && activeForm === 'hero'}
                  onChange={(e) => {
                    setPrivacyAgreed(e.target.checked)
                    setActiveForm('hero')
                  }}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  required
                />
                <label htmlFor="privacy-hero" className="text-white">
                  개인정보 수집 및 이용에 동의합니다.
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(true)
                    setActiveForm('hero')
                  }}
                  className="text-white hover:text-gray-200 underline"
                >
                  [읽기]
                </button>
              </div>
              <div className="text-center text-sm text-gray-600 mb-4">
                <p className="mt-1 text-white">당뇨/당뇨 전단계 보험 가입은 시기적절한 상담이 매우 중요합니다.</p>
                <p className="font-semibold text-white">※ 24시간 내 상담이 어려운 분들은 신청을 보류해주세요</p>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? '처리중...' : '무료 상담 신청하기'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-12 md:py-16 bg-white w-full">
        <div className="w-full px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-600">
            제 이야기를 들려드리고 싶습니다
          </h2>
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
            <div className="space-y-6 text-gray-700">
              <p>
                저는 30대 개발자입니다. 야근과 불규칙한 생활로 
                <span className="text-red-600 font-semibold">당화혈색소 6.6, LDL 190</span>이라는 
                진단을 받았습니다.
              </p>
              
              <p>
                심근경색과 뇌졸중 위험에 놀라 식단과 운동을 시작했고, 
                지금은 <span className="text-green-600 font-semibold">당화혈색소 5.8, LDL 100</span>으로 
                안정적인 상태를 유지하고 있습니다.
              </p>

              <p>
                그런데 보험을 알아보는 과정에서, 
                <span className="text-red-600 font-semibold">"당뇨 진단을 받으면 가입이 어려운 보험이 있다"</span>는 
                사실을 처음 알게 됐습니다.
              </p>

              <p>
                만약 조금만 더 일찍 알았다면, 미리 준비할 수 있었을 텐데… 라는 후회가 남았습니다.
              </p>

              <p>
                그래서 저와 같은 20~30대를 위해, 당뇨 진행상황에 맞는 보험을 설계해줄 
                전문가를 연결해주는 서비스를 만들었습니다.
              </p>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">
                  저는 보험을 팔지 않습니다.
                </p>
                <p className="mt-2">
                  상담을 원하실 때만 당뇨 보험 전문가를 매칭해드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Others Get Insurance Section */}
      <section className="bg-gray-50 py-12 md:py-16 w-full">
        <div className="w-full px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-600">
            당뇨병은 더 이상 노인성 질환이 아닙니다
          </h2>
          <div className="text-center text-lg text-gray-700 mb-8">
            <p className="mb-4">
              30대 당뇨 전단계 37%<br />
              <span className="text-red-600 font-semibold">30대 당뇨 22만명 중 60%가 자신의 상태를 모르고 있습니다</span>
            </p>
            <p className="mb-4">
              2018년에서 2022년 사이<br />
              <span className="text-red-600 font-semibold">20대 당뇨 환자가 47% 증가</span>
            </p>
            <p className="text-lg">
              당뇨병은 관리가 가능한 질병이지만,<br />
              <span className="text-red-600 font-semibold">당뇨인지 모르고 관리의 골든타임을 놓치고 있습니다</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 당뇨병 진단 후의 두려움 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">당뇨병 진단 후의 두려움</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  당뇨병은 관리가 가능한 만성질환입니다
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  운동과 식이요법으로 충분히 관리 가능합니다
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  정기적인 검사와 관리로 합병증 예방이 가능합니다
                </li>
              </ul>
            </div>

            {/* 당뇨병 합병증 정보 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-red-200">
              <h3 className="text-xl font-semibold mb-4 text-red-600">당뇨병 합병증</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">!</span>
                  당뇨병성 망막증 (실명 위험)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">!</span>
                  신장 합병증 (투석 위험)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">!</span>
                  신경병증 (발 궤양 위험)
                </li>
              </ul>
            </div>

            {/* 보험 가입의 중요성 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
              <h3 className="text-xl font-semibold mb-4 text-green-600">보험 가입의 중요성</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  당뇨 진단시 뇌, 심혈관 보험 가입 제한
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  조기 가입으로 보험료 절약 가능
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  합병증 발생 전 보장 확보
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-gray-800">
          혈당케어브릿지의 전문 상담 프로세스
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
            <h4 className="font-semibold mb-2 text-blue-600">상담 신청</h4>
            <p className="text-gray-600">기본 정보와 함께 상담을 신청하세요</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
            <h4 className="font-semibold mb-2 text-blue-600">담당자 배정</h4>
            <p className="text-gray-600">24시간안에 상담을 진행하고 적합한 전문가를 찾습니다</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
            <h4 className="font-semibold mb-2 text-blue-600">전문가 매칭</h4>
            <p className="text-gray-600">해당 분야 전문가가 상담 가능한 경우 매칭됩니다</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
            <h4 className="font-semibold mb-2 text-blue-600">맞춤 상담</h4>
            <p className="text-gray-600">매칭된 전문가와 심층 상담을 진행합니다</p>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
          <p>※ 해당 분야에 대기중인 보험 상담자리가 없거나 전문분야가 아닐 경우 상담이 제외될 수 있습니다.</p>
          <p className="mt-2">전문가 매칭은 고객님의 니즈와 가장 적합한 전문가를 찾기 위한 과정이며, 상담 가능 여부는 개별적으로 안내드립니다.</p>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 text-center max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">왜 인슈브릿지를 선택해야 할까요?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 text-sm">소수 정예 전문가</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600 text-sm">월 상담 건수</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">고객 만족도</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">5년+</div>
              <div className="text-gray-600 text-sm">평균 경력</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12 md:py-16 w-full">
        <div className="w-full px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-blue-600">
            당뇨/당뇨 전단계 보험 가입 상담
          </h2>
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-500 text-gray-900"
                placeholder="이름을 입력해주세요"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-500 text-gray-900"
                placeholder="전화번호를 입력해주세요"
                required
                maxLength={13}
              />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="number"
                    name="hba1c"
                    value={formData.hba1c}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-500 text-gray-900"
                    placeholder="당화혈색소(HbA1c)"
                    step="0.1"
                    min="0"
                    max="20"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">※ 최근 3개월 내 검사 결과</p>
                </div>
                <div>
                  <input
                    type="number"
                    name="fasting_blood_sugar"
                    value={formData.fasting_blood_sugar}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-500 text-gray-900"
                    placeholder="공복혈당(mg/dL)"
                    min="0"
                    max="500"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">※ 최근 3개월 내 검사 결과</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  id="privacy-cta"
                  checked={privacyAgreed && activeForm === 'cta'}
                  onChange={(e) => {
                    setPrivacyAgreed(e.target.checked)
                    setActiveForm('cta')
                  }}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  required
                />
                <label htmlFor="privacy-cta" className="text-gray-600">
                  개인정보 수집 및 이용에 동의합니다.
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(true)
                    setActiveForm('cta')
                  }}
                  className="text-gray-600 hover:text-gray-700 underline"
                >
                  [읽기]
                </button>
              </div>
              <div className="text-center text-sm text-gray-600 mb-4">
                <p className="font-semibold">※ 24시간 내 상담이 어려운 분들은 신청을 보류해주세요</p>
                <p className="mt-1">당뇨/당뇨 전단계 보험 가입은 시기적절한 상담이 매우 중요합니다</p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? '처리중...' : '무료 상담 신청하기'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <PrivacyPolicyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Home 