/********** react library **********/
import { Link } from "react-router-dom";
/********** Components **********/
import UserNameBanner from "../../assets/svg/username-banner.svg";
import useInputValidation from "../../hooks/useInputValidation";

const UserName = () => {
  const { inputValue, isButtonDisabled, handleInputChange } = useInputValidation()
  return (
    <>
      <div className="user-name">
        <div className="username-banner">
          <img src={UserNameBanner} alt="UserNameBanner" />
        </div>
        <div className="username-text">
          <h1>enter your name</h1>
        </div><br/>
        <div className="username-input">
          <form>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Name" required />
            <Link to="/chatpage"><button type="submit" disabled={isButtonDisabled}>Enter</button></Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserName;
