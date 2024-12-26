import Count from "../../component/count"
import FaqItem from "../../component/faq"
import Footer from "../../component/Footer"
import HeroMain from "../../component/heroMain"
import Card1 from "../../assets/media/card1.jpg"
import Card2 from "../../assets/media/card2.jpg"
import Card3 from "../../assets/media/card3.jpg"  
import Card4 from "../../assets/media/card4.jpg"
import Card5 from "../../assets/media/card5.jpg"
import Icon1 from "../../assets/media/icon1.png"
import Icon2 from "../../assets/media/icon2.png"
import Icon3 from "../../assets/media/icon3.png"

const Home = () => {
  const rexNFTs = [
    {
      id: 1,
      image: Card1,
      title: "NFT #45214"
    },
    {
      id: 2,
      image: Card2,
      title: "NFT"
    },
    {
      id: 3,
      image: Card3,
      title: "Rex #3"
    },
    {
      id: 4,
      image: Card4,
      title: "Rex #4"
    },
    {
      id: 5,
      image: Card5,
      title: "Rex #5"
    }
  ];
  return (
    <>
    {/* Start of Hero Section */}
    <main className="w-full min-h-screen bg-blue-500 flex justify-center items-center">
    <div className="h-full w-full flex p-4 flex-col lg:flex-row gap-4 justify-center items-center px-4 lg:pt-20">
      <div className="flex w-full lg:w-2/5 flex-col text-center lg:text-left">
        <div className="flex justify-center lg:justify-start flex-row lg:flex-col">
          <h1 className="text-3xl lg:text-5xl text-white">I&apos;M REX</h1>
          <h1 className="text-3xl lg:text-5xl text-white">WE&apos;RE ALL</h1>
          <h1 className="text-3xl lg:text-5xl text-white">REX</h1>
        </div>
        <div className="pt-2 lg:pt-4">
          <p className="text-xl lg:text-2xl">
            THE BIG BLUE DINO JUST GOT BIGGER,MINT 
          </p>
          <p className="text-xl lg:text-2xl">
            A REX NFT
          </p>
          <p className="text-xl lg:text-2xl">
            ON SUI
          </p>
          <div className="pt-2 lg:pt-4">
            <p className="font-sans font-bold">Minted Until Now</p>
            <div className="flex justify-center lg:justify-start pt-3">
              <p className="text-white text-4xl lg:text-5xl font-bold">0</p>
              <p className="text-4xl lg:text-5xl font-bold">/2500</p>
            </div>
          </div>
          <div className="pt-4 flex gap-4 justify-center lg:justify-start">
            <Count/>
            <button className="border border-white rounded-full w-44 py-2 bg-white text-blue-500">CONNECT TO MINT?</button>
          </div>
        </div>
      </div>
     <div className="w-full lg:w-2/5 h-[400px]">
    <HeroMain/>
      </div>
      </div>
    </main>
    {/* End of Hero Section */}

    {/* Start of About Section */}
    <div className="container mx-auto px-4">
        <h1 className="font-sans font-light text-center pt-3 text-2xl md:text-3xl lg:text-4xl">About Us</h1>
        <div>
          <h1 className="text-center text-blue-500 text-3xl md:text-4xl lg:text-5xl pt-5">WHAT ARE REX NFTS?</h1>
          <p className="text-center pt-6 px-4 md:px-8 lg:px-16 text-sm md:text-base lg:text-lg">
            A COLLECTION OF 2500 SUIREX NFTS HAVE BEEN SENT TO TH SUI BBLOCKCHAIN. EACH NFT HAS
            UNIQUE TRAITS THAT GIVE IT LIFE AND CHARACTERSTICS.MORE NEWS TO COME,STAY,TUNED
          </p>
          <div>
          {/* Start of Features Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 pt-8 md:pt-12 px-4">
            <div className="flex flex-col items-center w-full md:w-1/3 p-4 md:p-6 bg-white rounded-lg mb-4 md:mb-0">
              <div className="w-10 h-10 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                 <img src={Icon1} alt="" />
              </div>
              <h1 className="text-lg md:text-xl font-bold mb-2">Blockchain Representation</h1>
              <p className="text-center text-gray-600 text-sm md:text-base">Possessing a REX subdomain on the chain helps to identify you as a member of one of the largest communities on the Sub blockchain</p>
            </div>

            <div className="flex flex-col items-center w-full md:w-1/3 p-4 md:p-6 bg-white rounded-lg mb-4 md:mb-0">
              <div className="w-10 h-10 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <img src={Icon2} alt="" />
                
              </div>
              <h1 className="text-lg md:text-xl font-bold mb-2">Weekly Reward</h1>
              <p className="text-center text-gray-600 text-sm md:text-base">Through your NFT you will be able to join our contests and take advantage of weekly prizes: Air Drop, etc. </p>
            </div>

            <div className="flex flex-col items-center w-full md:w-1/3 p-4 md:p-6 bg-white rounded-lg">
              <div className="w-10 h-10 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <img src={Icon3} alt="" />
              </div>
              <h1 className="text-lg md:text-xl font-bold mb-2">Become Part Something</h1>
              <p className="text-center text-gray-600 text-sm md:text-base">Each REX NFT is one-of-a-kind and will evolve into distinct character through future collaboration and planned development.</p>
            </div>
          </div>
          {/* End of Features Section */}
          
          </div>
          {/* Start of Discovery Section */}
          <h1 className="text-center pt-7">DISCOVER REX</h1>
          <h1 className="text-center text-blue-500 text-3xl pt-3">SEE ALREADY MINTED NFTS</h1>
          <p className="text-center pt-5">IN THIS SECTION YOU CAN SNEAK PEEKS OF ALREADY MINTED REX NFTS</p>

          <div className="slider">
            <div className="slide-track">
              {[...rexNFTs, ...rexNFTs].map((nft, index) => (
                <div key={`${nft.id}-${index}`} className="slide">
                  <img 
                    src={nft.image}
                    alt={nft.title}
                  />
                  <div className="slide-caption">
                    <h3>{nft.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
          {/* End of Discovery Section */}
          
          {/* Start of Roadmap Section */}
          <div className="text-center pt-6">
              <h1 className="font-sans">ROAD MAP</h1>
            <h1 className="pt-5 text-blue-500 text-3xl">RELEASE PLAN</h1>
          </div>
          <div className="relative flex justify-center my-8 md:my-16 px-4 md:px-0">
            {/* Vertical line */}
            <div className="absolute top-10 h-[350px]  w-0.5 left-4 md:left-[21%] lg:left-[34%] bg-gray-300 -z-10"></div>
            
            {/* Timeline items */}
            <div className="relative space-y-32">
              {/* First milestone */}
              <div className="flex items-center">
                <div className="absolute -left-6 w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="ml-8 md:ml-16">
                  <h3 className="text-lg md:text-xl font-bold">Phase 1: Launch</h3>
                  <p className="text-sm md:text-base text-gray-600">Initial release of Rex NFTs on Sui blockchain</p>
                </div>
              </div>

              {/* Second milestone */}
              <div className="flex items-center">
                <div className="absolute -left-6 w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-8 md:ml-16">
                  <h3 className="text-lg md:text-xl font-bold">Phase 2: Community</h3>
                  <p className="text-sm md:text-base text-gray-600">Building and expanding the Rex community</p>
                </div>
              </div>

              {/* Third milestone */}
              <div className="flex items-center">
                <div className="absolute -left-6 w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-8 md:ml-16">
                  <h3 className="text-lg md:text-xl font-bold">Phase 3: Expansion</h3>
                  <p className="text-sm md:text-base text-gray-600">New features and benefits for Rex holders</p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Roadmap Section */}
          </div>
      {/* Start of FAQ Section */}
      <div className="w-full max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-center text-4xl font-bold mb-12 text-blue-500">Frequently Asked Questions</h1>
        <div className="space-y-4">
          <FaqItem 
            question="What are NFTs?" 
            answer="Rex NFT is a unique collection of 2500 digital assets on the Sui blockchain, each with distinct traits and characteristics that make them special."
            borderColor="border-blue-500"
            textColor="text-blue-500"
          />
          <FaqItem 
            question="When will be the Minting Day?" 
            answer="You can mint a Rex NFT by connecting your wallet and clicking the mint button. The price and minting details will be displayed on the minting page."
            borderColor="border-blue-500"
            textColor="text-blue-500"
          />
          <FaqItem 
            question="What blockchain is Rex NFT on?" 
            answer="Rex NFT is built on the Sui blockchain, offering fast and secure transactions for our NFT holders."
            borderColor="border-blue-500"
            textColor="text-blue-500"
          />
          <FaqItem 
            question="What are the benefits of holding a Rex NFT?" 
            answer="Rex NFT holders get exclusive access to community events, future airdrops, and special features as we continue to develop our roadmap."
            borderColor="border-blue-500"
            textColor="text-blue-500"
          />
        </div>
      </div>
      {/* End of FAQ Section */}
      <Footer/>
    </>
  )
}



export default Home
