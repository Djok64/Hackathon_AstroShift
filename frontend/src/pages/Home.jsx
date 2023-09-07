import { Element } from "react-scroll"
import Steps from "../components/Steps"
import SystemeSolaire from "../components/SystemeSolaire"
import SelectPlanet from "../components/SelectPlanet"

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
    </>
  )
}

export default Home
