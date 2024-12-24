
const Navbar = () => {
  return (
    <nav className="p-4 w-full grid place-items-center absolute top-0">
      <div className="flex p-4 flex-w justify-between items-center w-11/12 rounded-full shadow-lg">
        <div className="text-2xl font-bold">MINT DAPP</div>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Free Download</button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full">Connect Wallet</button>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar
