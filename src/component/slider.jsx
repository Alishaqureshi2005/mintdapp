import MainPic from "../assets/media/rex.jpg"
import { useState, useEffect } from "react";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const mainImages = [
    MainPic,
    'https://picsum.photos/800/600?random=1',
    'https://picsum.photos/800/600?random=2'
  ];

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes zoomIn {
        from { transform: scale(0.95); }
        to { transform: scale(1); }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  const handleImageClick = (index) => {
    console.log('Clicked image:', index); // Debug log
    setActiveImage(index);
  };

  return (
    <div className="w-full h-full flex relative z-1">
      <div className="w-full h-full">
        <img 
          src={mainImages[activeImage]} 
          alt="" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute bottom-0 flex flex-col md:flex-row left-0 w-full h-auto md:h-1/4 bg-white/30 backdrop-blur-sm rounded-b-lg z-10 p-4">
        <div className="flex w-full md:w-1/2 justify-center items-center mb-4 md:mb-0">
          <h1 className="text-white text-2xl md:text-4xl font-bold">MINT DAPP</h1>
        </div>
        <div className="flex w-full md:w-1/2 justify-center items-center gap-2 md:gap-4">
          {mainImages.map((image, index) => (
            <button 
              key={index} 
              type="button"
              onClick={() => handleImageClick(index)}
              className="w-12 h-12 md:w-16 md:h-16 cursor-pointer overflow-hidden rounded-lg focus:outline-none"
            >
              <img 
                src={image}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-cover transition-all duration-300 ${
                  activeImage === index ? 'opacity-100 scale-110' : 'opacity-50 scale-100'
                } hover:opacity-75`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider
