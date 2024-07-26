/********** react library **********/
import { Link } from "react-router-dom";
/********** Components **********/
import Selection from "../components/chat app/Selection";
/********** Components **********/
import SelectionBanner from "../assets/svg/selection-banner.svg";
const SelectionPage = () => {
  return (
    <>
      <Selection ClassStyle="selection">
        '
        <div className="selection-banner">
          <img src={SelectionBanner} alt="banner" />
        </div>
        <div className="selection-text">
        <h1>Ready to chat?</h1>
        <p>Create a new room or join an existing one!</p>
        </div>
        <div className="selection-buttons">
          <Link to="/create">
            <button>Create Room</button>
          </Link>
          <Link to="/join">
            <button>Join Room</button>
          </Link>
        </div>
      </Selection>
    </>
  );
};

export default SelectionPage;
