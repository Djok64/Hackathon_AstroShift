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
    <div
      className="containerPlanet"
      id="solarSystem"
      tabIndex="0"
      name="Une image de notre ancien système solaire sur la gauche, et un formulaire de recensement sur la droite"
    >
      <div
        className="planet"
        tabIndex="0"
        name="Notre ancien système solaire en image animé"
      >
        <Planet />
      </div>
      <div className="formulaireSystemeSolaireContainer">
        <form onSubmit={handleSubmit} className="formulaireSystemeSolaire">
          <h1 tabIndex="0">FORMULAIRE DE RECENSEMENT</h1>
          <div id="labelSystemeSolaire">
            <label htmlFor="nom">ENTREZ VOTRE NOM</label>
            <input
              name="champ pour renseigner nom de famille"
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
              name="champ pour renseigner votre prénom"
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
              name="champ pour renseigner votre âge en chiffre"
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div id="labelSystemeSolaire">
            <label htmlFor="provenance">RENSEIGNEZ VOTRE PAYS D'ORIGINE</label>
            <input
              name="champ pour renseigner votre pays d'origine"
              type="text"
              id="provenance"
              value={provenance}
              onChange={(e) => setProvenance(e.target.value)}
              required
            />
          </div>
          <button type="submit" name="bouton pour soumettre le formulaire">
            SOUMETTRE
          </button>
        </form>
      </div>
    </div>
  )
}

export default SystemeSolaire
