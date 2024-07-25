/********** react library **********/
import { Link } from "react-router-dom";
/********** Components **********/
import Selection from "../components/chat app/Selection"
const SelectionPage = () => {
  return (
    <>
      <Selection>
        <h1>Selection page dito maimili user</h1>
        <Link to="/create">
            <button>Create Room</button>
        </Link><br/><br/>
        <Link to="/join">
            <button>Join Room</button>
        </Link>

      </Selection>
    </>
  )
}

export default SelectionPage
