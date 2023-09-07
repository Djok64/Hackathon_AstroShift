import React from "react"
import ReactDOM from "react-dom/client"
import { FontProvider } from "./FontContext" // Importez le contexte

import "./main.scss"

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <FontProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FontProvider>
)
