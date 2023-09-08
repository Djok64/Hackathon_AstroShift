import axios from "axios"
import { useContext, useState, useEffect } from "react"
import myContext from "./useContext"

export default function Basket() {
  const { setBasketPopup, cart, setCart } = useContext(myContext)
  const [users, setUsers] = useState([])
  const [finalPrice, setFinalPrice] = useState(0)
  const [lastPrice, setLastPrice] = useState(0)
  const [validateOrder, setValidateOrder] = useState(false)

  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setBasketPopup(false)
      setValidateOrder(false)
    }
  }

  const handleCloseEscape = (event) => {
    if (event.key === "Escape") {
      setBasketPopup(false)
      setValidateOrder(false)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleCloseEscape)
    return () => {
      document.removeEventListener("keydown", handleCloseEscape)
    }
  }, [])

  useEffect(() => {
    axios.get("http://localhost:4242/users").then((res) => setUsers(res.data))
  }, [])

  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice = cart.reduce((acc, product) => acc + product.price, 0)
      setFinalPrice(totalPrice)
    }
    calculateTotalPrice()
  }, [cart])

  useEffect(() => {
    if (users.length > 0) {
      const creditsRestants = users[0].credits - finalPrice
      setLastPrice(creditsRestants)
    }
  }, [users, finalPrice])

  const handleConfirmOrder = (e) => {
    e.preventDefault()
    axios
      .put("http://localhost:4242/users/10", {
        credits: lastPrice,
      })
      .then((res) => {
        if (res.status === 204) {
          console.info("Commande créée avec succès !")
          setCart([])
          setValidateOrder(true)
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la création de la commande :", error)
      })
  }

  return (
    <div id="overlay" onClick={handleOverlayClick}>
      <div id="BasketGlobal">
        <h2>PANIER</h2>
        {cart.length > 0 ? (
          <>
            <ul>
              {users.length > 0 ? (
                <>
                  <div id="solde">
                    Votre solde de crédits est de : {users[0].credits}
                  </div>
                  {cart.map((product) => (
                    <li key={product.id}>
                      <div id="basketProductImage">
                        <img
                          src={`${import.meta.env.VITE_BACKEND_URL}/${
                            product.image
                          }`}
                        />
                      </div>
                      <div id="basketProductList">
                        <div className="nameProduct">
                          <h3>{product.name}</h3>{" "}
                        </div>
                        <div id="interlineBasket"></div>
                        <div className="priceProduct">
                          <p>{product.price} crédits </p>{" "}
                        </div>
                        <div id="interlineBasket"></div>
                        <div className="descriptionProduct">
                          <p>{product.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                  <div id="soldeRestant">
                    Après cette commande, votre solde de crédits sera de :{" "}
                    {lastPrice}
                  </div>
                  {lastPrice < 0 ? (
                    <p id="impossibleOrder">
                      Commande impossible, vous dépassez votre total de crédits
                    </p>
                  ) : (
                    <div className="buttonBasket">
                      <button onClick={handleConfirmOrder}>
                        Passer la commande
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div>Chargement des données en cours...</div>
              )}
            </ul>
          </>
        ) : (
          <p>Votre panier est vide</p>
        )}
        {validateOrder && (
          <p id="orderIsValidate">Commande créée avec succès !</p>
        )}
      </div>
    </div>
  )
}
