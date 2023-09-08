import { Element } from "react-scroll"
import { useContext } from "react"
import myContext from "../components/useContext"
import Steps from "../components/Steps"
import Basket from "../components/Basket"
import SystemeSolaire from "../components/SystemeSolaire"
import SelectPlanet from "../components/SelectPlanet"
import Header from "../components/header"

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
      <Element name="/">
        <Header />
      </Element>
      <Element name="/presentation">
        <Steps />
      </Element>
      <Element name="/solarSystem">
        <SystemeSolaire />
      </Element>
      <Element name="/selectPlanet">
        <div className="selectPlanet">
          <SelectPlanet />
        </div>
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
