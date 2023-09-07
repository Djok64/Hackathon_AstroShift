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
          <p>Accueil</p>
        </ScrollLink>
        <ScrollLink to="/presentation" smooth={true} duration={300}>
          <p>Présentation</p>
        </ScrollLink>
        <ScrollLink to="/solarSystem" smooth={true} duration={300}>
          <p>Système solaire</p>
        </ScrollLink>
        <ScrollLink to="/selectPlanet" smooth={true} duration={300}>
          <p>Planètes</p>
        </ScrollLink>
        <ScrollLink to="/" smooth={true} duration={300}>
          <p>Panier</p>
        </ScrollLink>
      </div>
    </main>
  )
}

export default NavBar
