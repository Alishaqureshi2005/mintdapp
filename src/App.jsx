import { BrowserRouter } from "react-router-dom"
import  Navbar  from "./component/Navbar"
import Navigator from "./config/Navigator"

const App = () => {
  return (
    <BrowserRouter>
    <div className="uppercase font-['Bubblez']">
      <Navbar />
      <Navigator />
    </div>
    </BrowserRouter>
  )
}

export default App
