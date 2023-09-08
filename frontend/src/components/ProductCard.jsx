import PopupItem from "../components/PopupItem"
import { useState, useEffect } from "react"
// import myContext from "./useContext"
import LogoCroix from "../assets/images/croix.png"

export default function ProductCard({ selectedPlanet, objects }) {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("")

  const handleCloseEscape = (event) => {
    if (event.key === "Escape") {
      setShowPopup(false)
      const terraNova = document.getElementById("productCard")
      terraNova.focus()
    }
  }
  const handleCardClick = (object) => {
    setSelectedProduct(object)
    setShowPopup(true)

    requestAnimationFrame(() => {
      const cardItem = document.getElementById("cardItem")
      if (cardItem) {
        cardItem.focus()
      }
    })
  }

  useEffect(() => {
    document.addEventListener("keydown", handleCloseEscape)
    return () => {
      document.removeEventListener("keydown", handleCloseEscape)
    }
  }, [])

  return (
    <>
      <div
        className="cardsContainer"
        id="productCard"
        aria-label="présentation des produits disponible pour cette planète"
        tabIndex="0"
      >
        {selectedPlanet &&
          objects.map((object) => (
            <div
              className="divCardMain"
              key={object.id}
              onClick={() => handleCardClick(object)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleCardClick(object)
                }
              }}
              tabIndex="0"
            >
              <div className="divProductImage">
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/${object.imgUrl}`}
                  alt="image product"
                />
              </div>
              <div className="divProductDescription">
                <h2>{object.nom}</h2>
              </div>
              <div className="divButtonBasket">
                <button
                  type="button"
                  id="panier"
                  tabIndex="-1"
                  // onClick={() => {
                  //   addToCart(selectedProduct)
                  // }}
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-cart-check"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                  >
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                  </svg>
                  <p className="text">Panier</p>
                </button>
              </div>
            </div>
          ))}
        {showPopup && (
          <div className="divPopup" tabIndex="0" aria-label="Fermer la fenêtre">
            <div
              className="croix"
              onClick={() => {
                setSelectedProduct(null)
                setShowPopup(false)
              }}
            >
              <button className="fermer" type="button">
                <img src={LogoCroix} alt="Une croix pour fermer la fenêtre" />
                FERMER
              </button>
            </div>
            <PopupItem
              name={selectedProduct.nom}
              description={selectedProduct.description}
              materiaux={selectedProduct.material}
              durability={selectedProduct.durability}
              poids={selectedProduct.weight}
              image={selectedProduct.imgUrl}
              price={selectedProduct.price}
            />
          </div>
        )}
      </div>
    </>
  )
}
