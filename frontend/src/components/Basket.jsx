import { useContext } from "react"
import myContext from "./useContext"

export default function Basket() {
  // On utilise le hook `useContext` pour accéder à notre contexte et déstructurer
  // la propriété `setBasketPopup` pour pouvoir l'utiliser.
  const { setBasketPopup } = useContext(myContext)

  // On crée une fonction `handleOverlayClick` qui sera appelée chaque fois qu'on
  // clique sur l'overlay. On vérifie si l'élément cliqué est l'overlay lui-même
  // et, si c'est le cas, on ferme la pop-up.
  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setBasketPopup(false)
    }
  }
  // On retourne notre composant JSX. L'overlay est la couche grise qui s'affiche
  // derrière la pop-up et occupe toute la fenêtre.
  return (
    <div id="overlay" onClick={handleOverlayClick}>
      <div id="BasketGlobal">
        <p>je suis dans le panier</p>
        <button onClick={() => setBasketPopup(false)}>le test ultime</button>
      </div>
    </div>
  )
}
