import React, { useState } from "react"

import myContext from "./components/useContext"

import Home from "./pages/Home"
import NavBar from "./components/NavBar"

function App() {
  const [basketPopup, setBasketPopup] = useState(false)
  const [isDyslexicFont, setIsDyslexicFont] = useState(false)
  const [cart, setCart] = useState([])

  console.info(cart)

  const addToCart = (product) => {
    // Copiez le panier actuel
    const updatedCart = [...cart]
    // Ajoutez le produit au panier
    updatedCart.push(product)
    // Mettez à jour l'état du panier
    setCart(updatedCart)
  }

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
        addToCart,
        cart,
        setCart,
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
