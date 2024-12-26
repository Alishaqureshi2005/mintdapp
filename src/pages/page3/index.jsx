import Count from "../../component/count"
import HeroMain from "../../component/heroMain"
const Page3 = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-4">
      
      <div className="w-full flex flex-col gap-8 lg:flex-row lg:gap-4 justify-center items-center">
        <div className="w-full text-center lg:text-left lg:w-2/5 flex flex-col">
        <div className="flex justify-center lg:justify-start flex-row lg:flex-col">       
          <h1 className="text-3xl lg:text-5xl text-blue-950">I&apos;M REX</h1>
          <h1 className="text-3xl lg:text-5xl text-blue-500">WE&apos;RE ALL</h1>
          <h1 className="text-3xl lg:text-5xl text-blue-500">REX</h1>
          </div>
          <div className="pt-4 lg:pt-8">
            <p className="text-xl lg:text-2xl">
              THE BIG BLUE DINO JUST GOT BIGGER,MINT A REX NFT
            </p>
            <p className="text-xl lg:text-2xl">
              ON SUI
            </p>
            <div className="pt-4 lg:pt-8">
              <p className="font-sans font-bold">Minted Until Now</p>
              <div className="flex justify-center lg:justify-start pt-3">
                <p className="text-blue-500 text-4xl lg:text-5xl font-bold">0</p>
                <p className="text-4xl lg:text-5xl font-bold">/2500</p>
              </div>
            </div>
            <div className="pt-4 flex gap-4  justify-center lg:justify-start">
              <Count/>
              <button className="border border-blue-600 rounded-full w-44 py-2 bg-blue-600 text-white">
                CONNECT TO MINT
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5 h-[300px] lg:h-full">
          <HeroMain/>
        </div>
      </div>
    </div>
    </>
  )
}
export default Page3
