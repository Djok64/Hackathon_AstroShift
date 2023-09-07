import { Link as ScrollLink } from "react-scroll"
import { useContext } from "react"
import myContext from "./useContext"
import Logo from "../assets/images/logo.svg"

function NavBar() {
  const { setBasketPopup } = useContext(myContext)

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
          <button type="button" name="lien vers Présentation">
            Présentation
          </button>
        </ScrollLink>
        <ScrollLink to="/solarSystem" smooth={true} duration={300}>
          <button type="button" name="lien vers le formulaire de recensement">
            Système solaire
          </button>
        </ScrollLink>
        <ScrollLink to="/selectPlanet" smooth={true} duration={300}>
          <button type="button" name="lien vers la sélection de la planète">
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
      </div>
    </main>
  )
}

export default NavBar
