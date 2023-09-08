import React, { useContext } from "react"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import { FontContext } from "./FontContext" // Importez le contexte

function App() {
  const { isDyslexicFont } = useContext(FontContext)

  return (
    <div className={`App ${isDyslexicFont ? "dyslexic-font" : "classicFont"}`}>
      <NavBar />
      <Home />
    </div>
  )
}

export default App
