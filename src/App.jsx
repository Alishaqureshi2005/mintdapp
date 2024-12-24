import { BrowserRouter } from "react-router-dom"
import  Navbar  from "./component/Navbar"
import Navigator from "./config/Navigator"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Navigator />
    </BrowserRouter>
  )
}

export default App
