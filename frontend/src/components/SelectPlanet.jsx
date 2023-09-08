import axios from "axios"
import { useState, useEffect, useRef } from "react"
import ProductCard from "./ProductCard"

export default function SelectPlanet() {
  const [objects, setObjects] = useState([])
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    axios
      .get(`http://localhost:4242/objectsByPlanet/${selectedPlanet}`)
      .then((response) => {
        setObjects(response.data)
      })
  }, [selectedPlanet])
  console.info("ICI", objects)
  console.info(selectedPlanet)

  const handleKeyPressEnter = (event) => {
    if (event.key === "Enter") {
      buttonRef.current.click()
    }
  }

  return (
    <>
      <div
        className="selectPlanetDiv"
        aria-label=""
        id="selectPlanet"
        tabIndex="0"
      >
        <div className="planetDiv">
          <div className="divTextPlanet">
            <p>Terra Nova</p>
          </div>
          <div className="divCentrage">
            <div className="divPlanet">
              <div className="barre"></div>
              <div
                id="terraNova"
                aria-label="Une représentation de la planète Terra Nova"
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedPlanet(1)
                  const terraNova = document.getElementById("productCard")
                  if (terraNova) {
                    setTimeout(() => {
                      terraNova.focus()
                    }, 100)
                    terraNova.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                }}
                tabIndex="0"
                ref={buttonRef}
                onKeyDown={handleKeyPressEnter}
              ></div>
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
              <div
                id="Pyrotopia"
                aria-label="Une représentation de la planète Pyrotopia"
                tabIndex="0"
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedPlanet(1)
                  const Pyrotopia = document.getElementById("productCard")
                  if (Pyrotopia) {
                    setTimeout(() => {
                      Pyrotopia.focus()
                    }, 100)
                    Pyrotopia.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                }}
                ref={buttonRef}
                onKeyDown={handleKeyPressEnter}
              ></div>
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
              <div
                id="Glaciara"
                aria-label="Une représentation de la planète Glaciara"
                tabIndex="0"
                ref={buttonRef}
                onKeyDown={handleKeyPressEnter}
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedPlanet(1)
                  const Glaciara = document.getElementById("productCard")
                  if (Glaciara) {
                    setTimeout(() => {
                      Glaciara.focus()
                    }, 100)
                    Glaciara.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                }}
              ></div>
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
              <div
                id="Terraria"
                aria-label="Une représentation de la planète Terraria"
                tabIndex="0"
                ref={buttonRef}
                onKeyDown={handleKeyPressEnter}
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedPlanet(1)
                  const Terraria = document.getElementById("productCard")
                  if (Terraria) {
                    setTimeout(() => {
                      Terraria.focus()
                    }, 100)
                    Terraria.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="productCard"
        aria-label="présentation des produits disponible pour cette planète"
        tabIndex="0"
      >
        <ProductCard selectedPlanet={selectedPlanet} objects={objects} />
      </div>
    </>
  )
}
