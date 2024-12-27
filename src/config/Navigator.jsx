import { Route, Routes } from "react-router-dom"
import { Wallet, Home, Minit } from "../pages"

const Navigator = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minit" element={<Minit />} />
        <Route path="/wallet" element={<Wallet />} />
    </Routes>
  )
  }

export default Navigator
