
const Navbar = () => {
  return (
    <nav className="pt-4 z-50 w-full grid place-items-center fixed top-0 md:p-4">
      <div className="bg-white flex flex-row p-2 md:p-4 justify-between items-center w-full rounded-full shadow-lg">
        <div className="text-lg md:text-3xl font-bold logo">MINT DAPP</div>
        <div className="flex flex-row text-xs md:text-xl gap-2 md:gap-4">
          <button className="bg-blue-500 uppercase text-white px-2 md:px-4 py-1 md:py-2 rounded-full whitespace-nowrap">Free Download</button>
          <button className="border border-blue-500 uppercase text-blue-500 px-2 md:px-4 py-1 md:py-2 rounded-full whitespace-nowrap">Connect Wallet</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
