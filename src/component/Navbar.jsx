import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="pt-4 z-50 w-full grid place-items-center fixed top-0 md:p-4">
      <div className={`${location.pathname === '/' ? 'bg-blue-200' : 'bg-white'} flex flex-row p-2 md:p-4 justify-between items-center w-full rounded-full shadow-lg`}>
        <Link to="/" className="text-lg md:text-3xl font-bold logo">MINT DAPP</Link>
        <div className="flex flex-row text-xs md:text-xl gap-2 md:gap-4">
          {location.pathname !== '/' && (
            <button className="bg-blue-500 uppercase text-white px-2 md:px-4 py-1 md:py-2 rounded-full whitespace-nowrap">Free Download</button>
          )}
          <Link to="/wallet" className={`border border-blue-400 font-light uppercase ${location.pathname === '/' ? 'bg-white' : ''} text-[#4DA2FF] px-2 md:px-4 py-1 md:py-2 rounded-full whitespace-nowrap`}>Connect Wallet</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
