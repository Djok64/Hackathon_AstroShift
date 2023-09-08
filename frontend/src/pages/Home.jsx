import { Element } from "react-scroll"
import { useContext } from "react"
import myContext from "../components/useContext"
import Steps from "../components/Steps"
import Basket from "../components/Basket"
import SystemeSolaire from "../components/SystemeSolaire"
import SelectPlanet from "../components/SelectPlanet"
import Header from "../components/Header"

function Home() {
  const { basketPopup } = useContext(myContext)
  // const [selectedProduct, setSelectedProduct] = useState("")

  // const displayPopup = (object) => {
  //   setSelectedProduct(object)
  //   setBasketPopup(true)
  // }

  console.info(basketPopup)

  return (
    <>
      <Element name="/accueil">
        <Header />
      </Element>
      <Element name="/presentation">
        <Steps />
      </Element>
      <Element name="/solarSystem">
        <SystemeSolaire />
      </Element>
      <div className="newEra">
        <h1 tabIndex="0">"Le début d'une nouvelle ère..."</h1>
      </div>
      <Element name="/selectPlanet">
        <SelectPlanet />
      </Element>
      {basketPopup && (
        <div className="divPopup">
          <Basket />
        </div>
      )}
    </>
  )
}

export default Home
