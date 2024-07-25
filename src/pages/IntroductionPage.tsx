/********** react library **********/
import { Link } from "react-router-dom";
/********** Components **********/
import Introduction from '../components/chat app/introduction'

const IntroductionPage = () => {
  return (
    <>
      <Introduction>
        <h1>Welcome to Chat-App</h1>
        <Link to="/userselection">
        <button>continue</button>
        </Link>
      </Introduction>
    </>
  )
}

export default IntroductionPage
