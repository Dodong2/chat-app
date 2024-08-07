/********** react library **********/
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/********** PWA **********/
import './validations/ServiceWorkerValidation'
/********** CSS **********/
import './assets/css/App.css'
import './assets/css/color.css'
import './assets/css/default.css'
import './assets/css/media.css'
/********** Components **********/




function App() {


  //Pages
  // const User = lazy(() => import('./pages/User'))
  const Home = lazy(() => import("./pages/Home"))
  const IntroductionPage = lazy(() => import("./pages/IntroductionPage"))
  const SelectionPage = lazy(() => import("./pages/SelectionPage"))
  const CreateRoomPage = lazy(() => import("./pages/CreateRoomPage"))
  const JoinRoomPage = lazy(() => import("./pages/JoinRoomPages"))
  const UserNamePage = lazy(() => import("./pages/UserNamepage"))
  const MessagingPage = lazy(() => import("./pages/MessagingPage"))

  

  return (
    <>
      <Router>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<IntroductionPage />} />
            <Route path="/userselection" element={<SelectionPage />} />
            <Route path="/create" element={<CreateRoomPage />} />
            <Route path="/join" element={<JoinRoomPage />} />
            <Route path="/username" element={<UserNamePage />} />
            <Route path="/chatpage" element={<MessagingPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
