/********** react library **********/
import { Link } from "react-router-dom";
/********** SVG **********/
import SelectionBanner from "../../assets/svg/selection-banner.svg";

const Selection: React.FC = () => {
  return (
    <>
      <div className="selection">
      <div className="selection-banner">
          <img src={SelectionBanner} alt="banner" />
        </div>
        <div className="selection-text">
        <h1>Ready to chat?</h1>
        <p>Create a new room or join an existing one!</p>
        </div>
        <div className="selection-buttons">
        <Link to="/join">
            <button>Join Room</button>
          </Link>
          <Link to="/create">
            <button>Create Room</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Selection
