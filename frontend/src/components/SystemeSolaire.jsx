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

  console.info("Prénom:", firstnameForm)
  console.info("Nom:", lastnameForm)
  console.info("Âge:", ageForm)
  console.info("Provenance:", homeCountryForm)

  return (
    <div className="containerPlanet">
      <div className="planet">
        <Planet />
      </div>
      <div className="formulaireSystemeSolaireContainer">
        <form onSubmit={handleCreateUser} id="formulaireSystemeSolaire">
          <h1>FORMULAIRE DE RECENSEMENT</h1>
          <div id="labelSystemeSolaire">
            <label htmlFor="nom">ENTREZ VOTRE NOM</label>
            <input
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
              type="text"
              id="provenance"
              value={homeCountryForm}
              onChange={(e) => setHomeCountryForm(e.target.value)}
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
