import { Element } from "react-scroll"
import Steps from "../components/Steps"

function Home() {
  return (
    <>
      <Element name="/">
        <p>je suis sur Home</p>
      </Element>
      <Element name="/presentation">
        <Steps />
      </Element>
    </>
  )
}

export default Home
