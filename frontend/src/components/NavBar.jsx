import { Link as ScrollLink } from "react-scroll"
import Logo from "../assets/images/logo.svg"

function NavBar() {
  return (
    <main className="NavBarGlobal">
      <div id="LogoNavBar">
        <img src={Logo} alt="Logo du site AstroShift" />
      </div>
      <div id="NavBarMenu">
        <ScrollLink to="/" smooth={true} duration={300}>
          <button
            type="button"
            aria-label="lien vers l'accueil"
            onClick={() => {
              const solarSystemElement = document.getElementById("/")
              if (solarSystemElement) {
                solarSystemElement.scrollIntoView({
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
              const solarSystemElement = document.getElementById("steps")
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
            Présentation
          </button>
        </ScrollLink>
        <ScrollLink to="/solarSystem" smooth={true} duration={300}>
          <button
            type="button"
            aria-label="lien vers le formulaire de recensement"
            onClick={() => {
              const solarSystemElement = document.getElementById("solarSystem")
              if (solarSystemElement) {
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
            onClick={() => {
              const solarSystemElement = document.getElementById("selectPlanet")
              if (solarSystemElement) {
                solarSystemElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            }}
          >
            Planètes
          </button>
        </ScrollLink>
        <ScrollLink to="/" smooth={true} duration={300}>
          <button type="button" aria-label="lien vers le panier">
            Panier
          </button>
        </ScrollLink>
      </div>
    </main>
  )
}

export default NavBar
