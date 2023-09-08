import { Link as ScrollLink } from "react-scroll"
import myContext from "./useContext"
import Logo from "../assets/images/logo.svg"
import React, { useContext } from "react"
// import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const { setBasketPopup, isDyslexicFont, toggleFont } = useContext(myContext)

  return (
    <main
      className={`NavBarGlobal ${
        isDyslexicFont ? "dyslexic-font" : "classicFont"
      }`}
    >
      <div id="LogoNavBar">
        <img src={Logo} alt="Logo du site AstroShift" />
      </div>
      <div id="NavBarMenu">
        <ScrollLink to="/" smooth={true} duration={300}>
          <button
            type="button"
            aria-label="lien vers l'accueil"
            onClick={(e) => {
              e.preventDefault()
              const headers = document.getElementById("/")
              if (headers) {
                setTimeout(() => {
                  headers.focus()
                }, 100)
                headers.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            }}
          >
            Accueil
          </button>
        </ScrollLink>
        <ScrollLink to="/presentation" smooth={true} duration={300}>
          <button
            type="button"
            aria-label="lien vers Présentation"
            onClick={(e) => {
              e.preventDefault()
              const presenting = document.getElementById("steps")
              if (presenting) {
                setTimeout(() => {
                  presenting.focus()
                }, 100)
                presenting.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            }}
          >
            Présentation
          </button>
        </ScrollLink>
        <ScrollLink to="/solarSystem" smooth={true} duration={300}>
          <button
            type="button"
            aria-label="lien vers le formulaire de recensement"
            onClick={(e) => {
              e.preventDefault()
              const solarSystemElement = document.getElementById("solarSystem")
              if (solarSystemElement) {
                setTimeout(() => {
                  solarSystemElement.focus()
                }, 100)
                solarSystemElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            }}
          >
            Système solaire
          </button>
        </ScrollLink>
        <ScrollLink to="/selectPlanet" smooth={true} duration={300}>
          <button
            type="button"
            aria-label="lien vers la sélection de la planète"
            onClick={(e) => {
              e.preventDefault()
              const newPlanet = document.getElementById("selectPlanet")
              if (newPlanet) {
                setTimeout(() => {
                  newPlanet.focus()
                }, 100)
                newPlanet.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            }}
          >
            Planètes
          </button>
        </ScrollLink>
        <button
          type="button"
          name="lien vers le panier"
          onClick={() => setBasketPopup(true)}
        >
          Panier
        </button>
        <button type="button" onClick={toggleFont}>
          Changer la police pour dyslexique
        </button>
      </div>
    </main>
  )
}

export default NavBar
