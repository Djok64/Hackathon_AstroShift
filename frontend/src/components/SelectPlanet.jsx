import axios from "axios"
import { useState, useEffect } from "react"

export default function SelectPlanet() {
  const [objects, setObjects] = useState([])
  const [selectedPlanet, setSelectedPlanet] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:4242/objectsByPlanet/${selectedPlanet}`)
      .then((response) => {
        setObjects(response.data)
      })
  }, [selectedPlanet]) // Maintenant, le useEffect sera déclenché à chaque fois que selectedPlanet change.
  console.info("ICI", objects)
  console.info(selectedPlanet)

  return (
    <>
      <div className="selectPlanetDiv">
        <div className="planetDiv">
          <div className="divTextPlanet">
            <p>Terra Nova</p>
          </div>
          <div className="divCentrage">
            <div className="divPlanet">
              <div className="barre"></div>
              <div id="terraNova" onClick={() => setSelectedPlanet(1)}></div>
            </div>
          </div>
        </div>
        <div className="planetDiv">
          <div className="divTextPlanet">
            <p>Pyrotopia</p>
          </div>
          <div className="divCentrage">
            <div className="divPlanet2">
              <div className="barre2"></div>
              <div id="Pyrotopia" onClick={() => setSelectedPlanet(2)}></div>
            </div>
          </div>
        </div>
        <div className="planetDiv">
          <div className="divTextPlanet">
            <p>Glaciara</p>
          </div>
          <div className="divCentrage">
            <div className="divPlanet3">
              <div className="barre3"></div>
              <div id="Glaciara" onClick={() => setSelectedPlanet(3)}></div>
            </div>
          </div>
        </div>
        <div className="planetDiv">
          <div className="divTextPlanet">
            <p>Terraria</p>
          </div>
          <div className="divCentrage">
            <div className="divPlanet4">
              <div className="barre4"></div>
              <div id="Terraria" onClick={() => setSelectedPlanet(4)}></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {selectedPlanet &&
          objects.map((object) => (
            <div className="boxImageNTitle" key={object.id}>
              <img
                className="boxImageNTitle"
                key={object.id}
                src={`${import.meta.env.VITE_BACKEND_URL}/${object.objectNom}`}
                alt={object.nom}
              />
              <p>{object.nom}</p>
            </div>
          ))}
      </div>
    </>
  )
}
