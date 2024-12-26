import { useState } from 'react'

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="border rounded-lg">
        <button
          className="w-full px-6 py-4 text-left flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium">{question}</span>
          <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            ▼
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