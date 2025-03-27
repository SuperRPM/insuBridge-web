import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              InsuBridge
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              홈
            </Link>
            <Link to="/analysis" className="text-gray-700 hover:text-blue-600">
              보험분석
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              서비스소개
            </Link>
            {/* <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              문의하기
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 