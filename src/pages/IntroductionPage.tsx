/********** react library **********/
import { Link } from "react-router-dom";
/********** Components **********/
import Introduction from "../components/chat app/introduction";
/********** Images **********/
import IntroductionBanner from "../assets/svg/introduction-banner.svg";

const IntroductionPage = () => {
  return (
    <>
      <Introduction ClassStyle="introduction">
        <div className="header">
          <h1>CHAT-APP</h1>
          <p>Stay connected, stay close.</p>
        </div>
        <div>
          <img src={IntroductionBanner} alt="banner" />
        </div>
        <div className='continue'>
          <Link to="/userselection">
            <button>continue</button>
          </Link>
        </div>
      </Introduction>
    </>
  );
};

export default IntroductionPage;
