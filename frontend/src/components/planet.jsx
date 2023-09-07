import "./planet.scss"

function Planet() {
  return (
    <div className="planetContainerCanvas">
      <div id="canvas">
        <div id="sun"></div>
        <div id="mercury"></div>
        <div id="venus"></div>
        <div id="earth">
          <div id="moon"></div>
        </div>
        <div id="mars"></div>
        <div id="jupiter"></div>
        <div id="saturn">
          <div id="rings-saturn">
            <div id="ring-A"></div>
            <div id="ring-B"></div>
          </div>
        </div>
        <div id="uranus"></div>
        <div id="neptune"></div>
      </div>
      <div className="titleH1Planet">
        <h1>NOTRE ANCIEN SYSTEME SOLAIRE</h1>
      </div>
    </div>
  )
}

export default Planet
