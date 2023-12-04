import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import MainView from './View/MainView/MainView';
import LandingView from './View/LandingView/LandingView';
import Footer from "./components/Footer/Footer";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import PlaceDetailContaier from './components/PlaceDetailContainer/PlaceDetailContainer';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path="/home" element={<MainView />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/place/:id" element={<PlaceDetailContaier />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
