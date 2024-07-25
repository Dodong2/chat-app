import { useState } from "react";
/********** Components **********/
import MainContainer from "../components/common/MainContainer";
import VibrationButton from "../components/common/sample vibrate button/VibrationButton";
import SampleHeader from "../components/common/sample vibrate button/SampleHeader";
import SampleFooter from "../components/common/sample vibrate button/SampleFooter";
/********** Function **********/
import { handleVibrate } from "../utils/VibrationFunction";
import { VibrationNotWork } from "../validations/VibrationValidation";

const Home = () => {
  const [vibrationError, setVibrationError] = useState(false);

  return (
    <>
      <MainContainer>
        <SampleHeader />
        <VibrationButton
          label="click to vibrate"
          onClick={handleVibrate}
          VibrateError={setVibrationError}
          ClassName="sample-btn"
        ></VibrationButton>
        {vibrationError && <VibrationNotWork/>}
        <SampleFooter/>
        <h1>hahahaha</h1>
      </MainContainer>
    </>
  );
};

export default Home;
