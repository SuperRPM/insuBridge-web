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

const Analysis = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [privacyAgreed, setPrivacyAgreed] = useState(false)

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
    <div className="min-h-screen bg-gray-50 max-w-2xl mx-auto">
      <div className="w-full px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-gray-600">
          보험 분석 신청
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg text-gray-600 placeholder-gray-500 bg-blue-50"
            placeholder="이름을 입력해주세요"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg text-gray-600 placeholder-gray-500 bg-blue-50"
            placeholder="전화번호를 입력해주세요 (예: 010-1234-5678)"
            required
            maxLength={13}
          />
          
          <div className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              id="privacy"
              checked={privacyAgreed}
              onChange={(e) => setPrivacyAgreed(e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
              required
            />
            <label htmlFor="privacy" className="text-gray-600">
              개인정보 수집 및 이용에 동의합니다.
            </label>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-gray-600 hover:text-gray-700 underline"
            >
              [읽기]
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? '처리중...' : '분석 신청하기'}
          </button>
        </form>

        <PrivacyPolicyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  )
}

export default Analysis 