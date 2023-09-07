import axios from "axios"
import PopupItem from "../components/PopupItem"
import { useState, useEffect } from "react"
import LogoCroix from "../assets/images/croix.png"

export default function ProductCard() {
  const [productInfos, setProductInfos] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("")

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/survivalItems`)
      .then((res) => {
        setProductInfos(res.data).catch((err) => console.info(err))
      })
  }, [])

  const displayPopup = (product) => {
    setSelectedProduct(product)
    setShowPopup(true)
  }

  const closePopup = () => {
    setShowPopup(false)
    setSelectedProduct(null)
  }

  return (
    <>
      <div className="cardsContainer">
        {productInfos.map((product) => (
          <div
            className="divCardMain"
            tabIndex="0"
            key={product.id}
            onClick={() => displayPopup(product)}
          >
            <div className="divProductImage">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${product.imgUrl}`}
                alt="image product"
              />
            </div>
            <div className="divProductDescription">
              <h2>{product.nom}</h2>
            </div>
            <div className="divButtonBasket">
              <button type="button" id="panier">
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
          <div className="divPopup">
            <div className="croix" onClick={closePopup}>
              <img src={LogoCroix} alt="Close" />
            </div>
            <PopupItem
              name={selectedProduct.nom}
              description={selectedProduct.description}
              materiaux={selectedProduct.material}
              durability={selectedProduct.durability}
              poids={selectedProduct.weight}
              image={selectedProduct.imgUrl}
            />
          </div>
        )}
      </div>
    </>
  )
}
