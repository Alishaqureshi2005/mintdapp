import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    
        <footer className="W-full h-300 flex-col flex items-center justify-center bg-black text-white gap-8 py-4">
        <div className="text-3xl text-blue-400 "><h1>MINT DAPP</h1></div>
        <div className="flex text-xl items-center gap-4">
            <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center"><FaFacebookF /></div>
            <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center"><FaYoutube /></div>
            <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center"><AiFillInstagram /></div>
            <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center"><BiLogoTiktok/></div>
            <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center"><FaXTwitter/></div>

        </div>
    
        <div className="text-l ">
            <ul className="flex gap-2">
                <li>HOME</li>
                <li>NEWs</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>CONNECTUS</li>
                <li>TO</li>
                <li>MINT</li>

            </ul>
            </div>
      </footer>

  )
}

export default Footer