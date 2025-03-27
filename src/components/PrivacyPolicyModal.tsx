import React from 'react'

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-600">개인정보 수집 및 이용 동의</h2>
        </div>
        
        <div className="overflow-y-auto max-h-[60vh] space-y-4">
          <p className="text-sm text-gray-600">
            회사는 보험 상담 및 보험 서비스 제공 등의 업무처리를 위하여 귀하의 개인정보를 수집·이용 하고자 하는 경우에는 「개인정보보호법」제 15 조 및 제 22 조에 따라 본인의 동의를 얻어야 하며, 수집한 개인정보를 제 3 자에 제공할 경우 「개인정보보호법」 제 17 조 및 제 22 조에 따라 귀하의 사전 동의를 얻어야 합니다.
          </p>

          <div className="space-y-2">
            <h3 className="font-semibold text-gray-600">1. 수집자</h3>
            <p className="text-sm text-gray-600">- 인슈브릿지 (개인사업자 예정)</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-gray-600">2. 수집·이용 항목</h3>
            <p className="text-sm text-gray-600">- 이름, 휴대전화번호</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-gray-600">3. 수집·이용 목적</h3>
            <p className="text-sm text-gray-600">
              - 보험상담, 보험 리모델링 및 가입 권유를 위한 안내 및 서비스 (이름, 휴대전화번호)<br />
              {/* - 상담자 인근 설계사 또는 위탁 계약 체결자 연계 [지역명(시/군)]<br /> */}
              - 맞춤 서비스 제공, 서비스 개선 용도 활용 [쿠키에 의한 자동수집 정보(이용자의 브라우저 종류 및 OS, 방문 기록IP, 접속시간)]
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-gray-600">4. 보유·이용기간</h3>
            <p className="text-sm text-gray-600">- 동의일로부터 1년</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-600">
              귀하는 개인정보 제공에 대한 동의를 거부할 권리가 있습니다. 단, 동의 거부 시 보험계약 상담 서비스를 받으실 수 없습니다.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              ※ 동의 철회를 위한 안내<br />
              본 동의를 하시더라도 당사 고객센터를 통해 동의를 철회하거나 가입 권유 목적의 연락에 대한 중단을 요청하실 수 있습니다.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              자세한 정보는 당사 홈페이지(www.insubridge.co.kr) 개인정보처리방침을 참조해주시기 바랍니다.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyModal 