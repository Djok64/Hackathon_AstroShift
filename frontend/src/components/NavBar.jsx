import { Link as ScrollLink } from "react-scroll"
import Logo from "../assets/images/logo.svg"

function NavBar() {
  return (
    <main className="NavBarGlobal">
      <div id="LogoNavBar">
        <img src={Logo} />
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
      </div>
    </main>
  )
}

export default NavBar
