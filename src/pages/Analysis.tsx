import { useState } from 'react'

const Analysis = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: API 연동
    console.log('Form submitted:', formData)
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-blue-600">
          보험 분석 신청
        </h1>
        
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
          <button
            type="submit"
            className="w-full bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
          >
            분석 신청하기
          </button>
        </form>
      </div>
    </div>
  )
}

export default Analysis 