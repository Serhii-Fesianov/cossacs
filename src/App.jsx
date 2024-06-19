import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { AuthPage } from "./components/pages/AuthPage/AuthPage";
import { RegisterPage } from "./components/pages/RegisterPage/RegisterPage";
import { WelcomePage } from "./components/pages/WelcomePage/WelcomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="cossacs" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
