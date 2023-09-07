import { Element } from "react-scroll"
import Steps from "../components/Steps"
import SystemeSolaire from "../components/SystemeSolaire"
import SelectPlanet from "../components/SelectPlanet"
import Headers from "../components/headers"

function Home() {
  return (
    <>
      <Element name="/">
        <Headers />
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
