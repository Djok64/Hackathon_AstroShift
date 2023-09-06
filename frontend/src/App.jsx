import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import SelectPlanet from "./components/SelectPlanet"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <SelectPlanet />
      </Router>
    </div>
  )
}

export default App
