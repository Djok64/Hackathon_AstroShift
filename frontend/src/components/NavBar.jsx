import { Link as ScrollLink } from "react-scroll"
import Logo from "../assets/images/logo.svg"
import React, { useContext } from "react"
// import { Link as ScrollLink } from "react-scroll";
import { FontContext } from "../FontContext"

function NavBar() {
  const { isDyslexicFont, toggleFont } = useContext(FontContext)

  return (
    <main
      className={`NavBarGlobal ${
        isDyslexicFont ? "dyslexic-font" : "classicFont"
      }`}
    >
      <div id="LogoNavBar">
        <img src={Logo} alt="Logo" />
      </div>
      <div id="NavBarMenu">
        <ScrollLink to="/" smooth={true} duration={300}>
          <button type="button" name="lien vers l'accueil">
            Accueil
          </button>
        </ScrollLink>
        <ScrollLink to="/presentation" smooth={true} duration={300}>
          <button
            type="button"
            name="lien vers Présentation"
            onClick={() => document.getElementById("steps").focus()}
          >
            Présentation
          </button>
        </ScrollLink>
        <ScrollLink to="/solarSystem" smooth={true} duration={300}>
          <button
            type="button"
            name="lien vers le formulaire de recensement"
            onClick={() => document.getElementById("solarSystem").focus()}
          >
            Système solaire
          </button>
        </ScrollLink>
        <ScrollLink to="/selectPlanet" smooth={true} duration={300}>
          <button type="button" name="lien vers la sélection de la planète">
            Planètes
          </button>
        </ScrollLink>
        <ScrollLink to="/" smooth={true} duration={300}>
          <button type="button" name="lien vers le panier">
            Panier
          </button>
        </ScrollLink>
        <button type="button" onClick={toggleFont}>
          Changer la police pour dyslexique
        </button>
      </div>
    </main>
  )
}

export default NavBar
