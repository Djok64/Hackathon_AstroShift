import { useContext } from "react"
import myContext from "./useContext"
// import LogoCroix from "../assets/images/croix.png"

export default function Basket() {
  const { setBasketPopup } = useContext(myContext)
  // const [selectedProduct, setSelectedProduct] = useState("")

  // const [productInfos, setProductInfos] = useState(null)

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/survivalItems`)
  //     .then((res) => {
  //       setProductInfos(res.data).catch((err) => console.info(err))
  //     })
  // }, [])

  // const displayPopup = (object) => {
  //   setSelectedProduct(object)
  //   setBasketPopup(true)
  // }

  // const closePopup = () => {
  //   setSelectedProduct(null)
  //   setBasketPopup(false)
  // }

  return (
    <>
      <div id="BasketGlobal">
        <p>je suis dans panier</p>
        <button onClick={() => setBasketPopup(false)}>le test ultime</button>
      </div>
    </>
  )
}
