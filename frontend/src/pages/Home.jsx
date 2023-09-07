import { Element } from "react-scroll"
import Steps from "../components/Steps"
import SystemeSolaire from "../components/SystemeSolaire"
import SelectPlanet from "../components/SelectPlanet"
import ProductCard from "../components/ProductCard"

function Home() {
  return (
    <>
      <Element name="/">
        <p>je suis sur Home</p>
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
      <div className="productCardDiv">
        <ProductCard />
      </div>
    </>
  )
}

export default Home
