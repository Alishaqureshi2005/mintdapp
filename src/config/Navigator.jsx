import { Route, Routes } from "react-router-dom"
import { Wallet, Home, Page3 } from "../pages"

const Navigator = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/wallet" element={<Wallet />} />
    </Routes>
  )
  }

export default Navigator
