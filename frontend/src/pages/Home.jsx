import { Element } from "react-scroll"
import Steps from "../components/Steps"
import SystemeSolaire from "../components/SystemeSolaire"
import SelectPlanet from "../components/SelectPlanet"
import Header from "../components/header"

function Home() {
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
    </>
  )
}

export default Home
