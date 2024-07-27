/********** react library **********/
import { Link } from "react-router-dom";
/********** SVG **********/
import IntroductionBanner from "../../assets/svg/introduction-banner.svg";

const introduction: React.FC = () => {
  return (
    <>
      <div className="introduction">
      <div className="header">
          <h1>CHAT-APP</h1>
          <p>Stay connected, stay close.</p>
        </div>
        <div className="introduction-banner">
          <img src={IntroductionBanner} alt="banner" />
        </div>
        <div className='continue'>
          <Link to="/userselection">
            <button>continue</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default introduction
