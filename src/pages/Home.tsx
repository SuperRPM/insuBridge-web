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
}

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
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
      setFormData({ name: '', phone: '' })
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
            보험의 본질은 구독서비스!
          </h1>
          <p className="text-lg md:text-xl text-center mb-6 md:mb-8">
            2만원짜리 구독 서비스도 꼼꼼히 비교하고 선택하시는데,<br />
            보험은 그대로 두고 계신가요?
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
                placeholder="전화번호를 입력해주세요 (예: 010-1234-5678)"
                required
                maxLength={13}
              />
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
              <button
                type="submit"
                className="w-full bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? '처리중...' : '무료신청 보험료 분석'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Analysis Process Section */}
      <section className="py-12 md:py-16 bg-white w-full">
        <div className="w-full px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-600">
            보험 전문가에게 보장대비 금액을 비교하고 선택하세요.
            
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 w-full">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-600">일반적인 소비 패턴</h3>
              <div className="space-y-2">
                <p className="text-gray-600">구독 서비스 월 비용:</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>넷플릭스: 17,000원</li>
                  <li>디즈니플러스: 9,900원</li>
                  <li>유튜브 프리미엄: 14,900원</li>
                  <li>기타 구독 서비스: 20,000원</li>
                  <li>보험료: 557,000원</li>
                  <p className="text-xl md:text-2xl font-bold text-black mt-4">총 월 구독료: 618,800원</p>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-600">insuBridge 재설계 후 패턴</h3>
              <div className="space-y-2">
                <p className="text-blue-600">개선된 구독 서비스 월 비용:</p>
                <ul className="list-disc list-inside text-blue-600">
                  <li>넷플릭스: 17,000원</li>
                  <li>디즈니플러스: 9,900원</li>
                  <li>유튜브 프리미엄: 14,900원</li>
                  <li>기타 구독 서비스: 20,000원</li>
                  <li>보험료: 371,000원</li>
                  <p className="text-xl md:text-2xl font-bold text-black mt-4">총 월 구독료: 432,800원</p>
                </ul>
                <p className="text-blue-600 font-bold mt-4">
                  월 136,000원 절약! <br />
                  연 1,632,000원 절약!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12 md:py-16 w-full">
        <div className="w-full px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-blue-600">
            가입된 보험에 대해 진짜 전문가와 1:1로 궁금한 점을 상담하세요
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
                placeholder="전화번호를 입력해주세요 (예: 010-1234-5678)"
                required
                maxLength={13}
              />
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
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? '처리중...' : '보험 점검 신청하기'}
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