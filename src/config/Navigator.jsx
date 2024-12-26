import { Route, Routes } from "react-router-dom"
import { Home, Page2, Page3 } from "../pages"

const Navigator = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
    </Routes>
  )
}

export default Navigator
