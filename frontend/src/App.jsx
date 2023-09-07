import { useState } from "react"

import myContext from "./components/useContext"

import Home from "./pages/Home"
import NavBar from "./components/NavBar"

function App() {
  const [basketPopup, setBasketPopup] = useState(false)

  return (
    <myContext.Provider
      value={{
        basketPopup,
        setBasketPopup,
      }}
    >
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </myContext.Provider>
  )
}

export default App
