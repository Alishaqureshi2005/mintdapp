import { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className='border-b border-blue-400'>
        <button
          className="w-full px-6 py-4 text-left flex justify-between items-center "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium">{question}</span>
          <span className={`transform transition-transform bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center ${isOpen ? 'rotate-180' : ''}`}>
            <FaAngleDown/>
          </span>
        </button>
        <div 
          className={`px-6 overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-40 py-4' : 'max-h-0'
          }`}
        >
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>

    )
  }
  export default FaqItem