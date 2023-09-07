import React, { createContext, useState } from "react"
export const FontContext = createContext()

export function FontProvider({ children }) {
  const [isDyslexicFont, setIsDyslexicFont] = useState(false)

  const toggleFont = () => {
    setIsDyslexicFont(!isDyslexicFont)
  }

  return (
    <FontContext.Provider value={{ isDyslexicFont, toggleFont }}>
      {children}
    </FontContext.Provider>
  )
}
