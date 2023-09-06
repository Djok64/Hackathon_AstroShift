import { Element } from "react-scroll"
import Steps from "../components/Steps"
import SystemeSolaire from "../components/SystemeSolaire"

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
    </>
  )
}

export default Home
