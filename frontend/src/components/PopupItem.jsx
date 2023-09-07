import PoidsLogo from "../../src/assets/images/poids.png"
import MateriauxLogo from "../../src/assets/images/materiaux.png"
import DurablityLogo from "../../src/assets/images/durability.png"

export default function PopupItem(props) {
  return (
    <div className="mainDisplayItem">
      <div className="imageItem">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${props.image}`}
          alt="imageItem"
        />
      </div>
      <div className="otherDiv" id="cardItem" tabIndex="0">
        <div className="descriptionItem">
          <h2 tabIndex="0">{props.name}</h2>
          <p tabIndex="0">{props.description}</p>
        </div>
        <div className="specsItem">
          <div className="divPoids">
            <img src={PoidsLogo} alt="" />
            <p tabIndex="0">{props.poids} Kg</p>
          </div>
          <div className="divMateriaux">
            <img src={MateriauxLogo} alt="" />
            <p tabIndex="0">{props.materiaux}</p>
          </div>
          <div className="divDurability">
            <img src={DurablityLogo} alt="" />
            <p tabIndex="0">{props.durability}</p>
          </div>
          <div className="divPoids">
            <img src={PoidsLogo} alt="" />
            <p tabIndex="0">{props.price} Crédits</p>
          </div>
        </div>
        <div className="buttonBuy">
          <button className="button">
            <svg
              viewBox="0 0 16 16"
              className="bi bi-cart-check"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
            </svg>
            <p className="text">Buy Now</p>
          </button>
        </div>
      </div>
    </div>
  )
}
