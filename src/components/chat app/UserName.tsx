import UserNameBanner from "../../assets/svg/username-banner.svg";

const UserName = () => {
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
            <input type="text" placeholder="Name" required />
            <button type="submit">Enter</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserName;
