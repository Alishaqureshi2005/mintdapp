import MainPic from "../../assets/media/main.jpg";
import Guarda from "../../assets/media/gudra.png";
import Coinbase from "../../assets/media/conbase.png";
import Metamask from "../../assets/media/metamask.png";
import Ledger from "../../assets/media/dger.png";
const Wallet = () => {
  return (
    <div className="w-full h-screen flex flex-col-reverse md:flex-row justify-center relative md:h-lvh md:justify-between">
      <div className="w-full p-4 md:w-2/5 px-4 md:px-16 mt-16 flex flex-col justify-center gap-4 z-10 bg-white/90">
        <h1 className="text-4xl font-bold text-blue-400">Welcome</h1>
        <p className="text-2xl">Choose your provider to connect HELLO</p>
        <div className="flex text-xl flex-col gap-4 w-full md:w-4/5">
          <button className="border text-left border-black px-8 py-4 rounded-full flex items-center gap-2">
            <img src={Guarda} alt="" className="w-6 h-6" />  GUARDA
          </button>
          <button className="border text-left border-black px-8 py-4 rounded-full flex items-center gap-2">
           <img src={Coinbase} alt="" className="w-6 h-6" />  COINBASE WALLET
          </button>
          <button className="border text-left border-black px-8 py-4 rounded-full flex items-center gap-2">
            <img src={Metamask} alt="" className="w-6 h-6" />  METAMASK
          </button>
          <button className="border text-left border-black px-8 py-4 rounded-full flex items-center gap-2">
            <img src={Ledger} alt="" className="w-6 h-6" />  LEDGER
          </button>
        </div>
        <p className="text-md">
          DON&apos;T HAVE A WALLET? <span className="underline">CREATE WALLET</span>
        </p>
      </div>
      <div className="absolute w-full h-screen md:relative md:w-1/2 md:h-[95vh]">
        <img src={MainPic} alt="logo" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Wallet;
