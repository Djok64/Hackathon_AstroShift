import { Element } from "react-scroll"
import { useContext } from "react"
import myContext from "../components/useContext"
import Steps from "../components/Steps"
import Basket from "../components/Basket"
import SystemeSolaire from "../components/SystemeSolaire"
import SelectPlanet from "../components/SelectPlanet"
import Header from "../components/header"
// import LogoCroix from "./assets/images/croix.png"

function Home() {
  const { basketPopup } = useContext(myContext)
  // const [selectedProduct, setSelectedProduct] = useState("")

  // const displayPopup = (object) => {
  //   setSelectedProduct(object)
  //   setBasketPopup(true)
  // }

  // const closePopup = () => {
  //   setBasketPopup(false)
  //   setSelectedProduct(null)
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
        <SelectPlanet />
      </Element>
      {basketPopup ? (
        <div className="divPopup">
          {/* <div className="croix" onClick={closePopup}>
            <img src={LogoCroix} alt="Close" />
          </div> */}
          <Basket />
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default Home
