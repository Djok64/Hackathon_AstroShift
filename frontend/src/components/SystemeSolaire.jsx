import axios from "axios"
import React, { useState } from "react"
import Planet from "./planet.jsx"
import "./SystemeSolaire.scss"

function SystemeSolaire() {
  const [firstnameForm, setFirstnameForm] = useState("")
  const [lastnameForm, setLastnameForm] = useState("")
  const [ageForm, setAgeForm] = useState("")
  const [homeCountryForm, setHomeCountryForm] = useState("")

  const handleCreateUser = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:4242/users", {
        firstname: firstnameForm,
        lastname: lastnameForm,
        age: ageForm,
        home_country: homeCountryForm,
      })
      .then((res) => {
        if (res.status === 201) {
          console.info("Utilisateur créé avec succès !")
          // document.getElementById("formulaireSystemeSolaire").reset()
          setFirstnameForm("")
          setLastnameForm("")
          setAgeForm("")
          setHomeCountryForm("")
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la création de l'utilisateur :", error)
      })
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
        <form onSubmit={handleCreateUser} id="formulaireSystemeSolaire">
          <h1>FORMULAIRE DE RECENSEMENT</h1>
          <div id="labelSystemeSolaire">
            <label htmlFor="nom">ENTREZ VOTRE NOM</label>
            <input
              name="champ pour renseigner nom de famille"
              type="text"
              id="nom"
              value={lastnameForm}
              onChange={(e) => setLastnameForm(e.target.value)}
              required
            />
          </div>
          <div id="labelSystemeSolaire">
            <label htmlFor="prenom">ENTREZ VOTRE PRENOM</label>
            <input
              name="champ pour renseigner votre prénom"
              type="text"
              id="prenom"
              value={firstnameForm}
              onChange={(e) => setFirstnameForm(e.target.value)}
              required
            />
          </div>
          <div id="labelSystemeSolaire">
            <label htmlFor="age">ENTREZ VOTRE AGE</label>
            <input
              id="age"
              value={ageForm}
              onChange={(e) => setAgeForm(e.target.value)}
              required
            />
          </div>
          <div id="labelSystemeSolaire">
            <label htmlFor="provenance">RENSEIGNEZ VOTRE PAYS D'ORIGINE</label>
            <input
              name="champ pour renseigner votre pays d'origine"
              type="text"
              id="provenance"
              value={homeCountryForm}
              onChange={(e) => setHomeCountryForm(e.target.value)}
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
