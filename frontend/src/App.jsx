import React, { useState } from "react"

import myContext from "./components/useContext"

import Home from "./pages/Home"
import NavBar from "./components/NavBar"

function App() {
  const [basketPopup, setBasketPopup] = useState(false)

  const [isDyslexicFont, setIsDyslexicFont] = useState(false)

  const toggleFont = () => {
    setIsDyslexicFont(!isDyslexicFont)
  }

  return (
    <myContext.Provider
      value={{
        basketPopup,
        setBasketPopup,
        isDyslexicFont,
        toggleFont,
      }}
    >
      <div
        className={`App ${isDyslexicFont ? "dyslexic-font" : "classicFont"}`}
      >
        <NavBar />
        <Home />
      </div>
    </myContext.Provider>
  )
}

export default App
