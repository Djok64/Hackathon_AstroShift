import React, { useState } from "react"
import Planet from "./planet.jsx"
import "./SystemeSolaire.scss"

function SystemeSolaire() {
  // États locaux pour les champs du formulaire
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [age, setAge] = useState("")
  const [provenance, setProvenance] = useState("")

  // Fonction de gestionnaire pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault()

    // Vous pouvez accéder aux valeurs des champs ici (nom, prenom, age, provenance)
    console.info("Nom:", nom)
    console.info("Prénom:", prenom)
    console.info("Âge:", age)
    console.info("Provenance:", provenance)

    // Réinitialiser les champs après la soumission si nécessaire
    setNom("")
    setPrenom("")
    setAge("")
    setProvenance("")
  }
  return (
    <div className="containerPlanet">
      <div className="planet">
        <Planet />
      </div>
      <div className="formulaireSystemeSolaireContainer">
        <form onSubmit={handleSubmit} className="formulaireSystemeSolaire">
          <h1>FORMULAIRE DE RECENSEMENT</h1>
          <div id="labelSystemeSolaire">
            <label htmlFor="nom">ENTREZ VOTRE NOM</label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>
          <div id="labelSystemeSolaire">
            <label htmlFor="prenom">ENTREZ VOTRE PRENOM</label>
            <input
              type="text"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
            />
          </div>
          <div id="labelSystemeSolaire">
            <label htmlFor="age">ENTREZ VOTRE AGE</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div id="labelSystemeSolaire">
            <label htmlFor="provenance">RENSEIGNEZ VOTRE ÂGE</label>
            <input
              type="text"
              id="provenance"
              value={provenance}
              onChange={(e) => setProvenance(e.target.value)}
              required
            />
          </div>
          <button type="submit">SOUMETTRE</button>
        </form>
      </div>
    </div>
  )
}

export default SystemeSolaire
