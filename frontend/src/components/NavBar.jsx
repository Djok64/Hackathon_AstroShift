import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.svg"

function NavBar() {
  return (
    <main className="NavBarGlobal">
      <div id="LogoNavBar">
        <img src={Logo} />
      </div>
      <div id="NavBarMenu">
        <Link to="/">
          <p>Accueil</p>
        </Link>
        <Link to="/">
          <p>Système solaire</p>
        </Link>
        <Link to="/">
          <p>Planètes</p>
        </Link>
        <Link to="/">
          <p>Panier</p>
        </Link>
      </div>
    </main>
  )
}

export default NavBar
