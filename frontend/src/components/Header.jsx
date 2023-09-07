import { Link } from "react-scroll"

function Header() {
  return (
    <div className="headersContainers">
      <div className="headersAstro">
        <h1>Bienvenue sur Astroshift</h1>
        <p>
          Afin que le voyage se déroule dans les meilleures conditions
          possibles, veuillez prendre connaissance des 3 étapes ci-dessous en
          cliquant sur le bouton. C’est le début de votre nouvelle vie...
        </p>
      </div>
      <Link to="/presentation" smooth={true} duration={300}>
        <button type="button">EN SAVOIR PLUS</button>
      </Link>
    </div>
  )
}

export default Header
