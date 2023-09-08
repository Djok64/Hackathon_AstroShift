import axios from "axios"
import { useState, useEffect, useRef } from "react"
import ProductCard from "./ProductCard"

export default function SelectPlanet() {
  const [objects, setObjects] = useState([])
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const buttonRef1 = useRef(null)
  const buttonRef2 = useRef(null)
  const buttonRef3 = useRef(null)
  const buttonRef4 = useRef(null)

  useEffect(() => {
    axios
      .get(`http://localhost:4242/objectsByPlanet/${selectedPlanet}`)
      .then((response) => {
        setObjects(response.data)
      })
  }, [selectedPlanet])

  const handleKeyPressEnter1 = (event) => {
    if (event.key === "Enter") {
      buttonRef1.current.click()
    }
  }
  const handleKeyPressEnter2 = (event) => {
    if (event.key === "Enter") {
      buttonRef2.current.click()
    }
  }
  const handleKeyPressEnter3 = (event) => {
    if (event.key === "Enter") {
      buttonRef3.current.click()
    }
  }
  const handleKeyPressEnter4 = (event) => {
    if (event.key === "Enter") {
      buttonRef4.current.click()
    }
  }

  return (
    <>
      <div
        className="selectPlanetDiv"
        aria-label="Les quatre planêtes disponible pour votre nouvelle vie"
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
                aria-label="Une représentation de la planète Terra Nova, une planète similaire en tout point avec la planète Terre"
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
                ref={buttonRef1}
                onKeyDown={handleKeyPressEnter1}
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
                aria-label="Une représentation de la planète Pyrotopia, une planète très chaude, la survie y est possible dans les infracstructe établie sous la surface"
                tabIndex="0"
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedPlanet(2)
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
                ref={buttonRef2}
                onKeyDown={handleKeyPressEnter2}
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
                aria-label="Une représentation de la planète Glaciara, une planète à l'atmosphère très froide, mais possède de nombre source géothermique, la survie y est donc plus aisé"
                tabIndex="0"
                ref={buttonRef3}
                onKeyDown={handleKeyPressEnter3}
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedPlanet(3)
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
                aria-label="Une représentation de la planète Terraria, planète de type aride, en surface, mais possède de nombreuses sources d'eau potable sous cette dernière"
                tabIndex="0"
                ref={buttonRef4}
                onKeyDown={handleKeyPressEnter4}
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedPlanet(4)
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
      <div className="valideBasket">
        <button type="button" tabIndex="0">
          Valider votre panier
        </button>
      </div>
    </>
  )
}
