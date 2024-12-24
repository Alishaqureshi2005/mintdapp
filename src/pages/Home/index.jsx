const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-1/2 px-16  flex flex-col justify-center gap-4">
        <h1 className="text-4xl font-bold text-blue-500">Welcome</h1>
        <p className="text-xl">Choose your provider to connect</p>
        <div className="flex flex-col gap-4 w-4/5">
          <button className="border text-left border-black  px-4 py-2 rounded-full">
              GUARDA
          </button>
          <button className="border text-left border-black  px-4 py-2 rounded-full">
            COINBASE WALLET
          </button>
          <button className="border text-left border-black  px-4 py-2 rounded-full">
            METAMASK
          </button>
          <button className="border text-left border-black  px-4 py-2 rounded-full">
            LEDGER
          </button>
        </div>
        <p className="text-sm">
          DON&apos;T HAVE A WALLET? <span className="underline">CREATE WALLET</span>
        </p>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default Home;
