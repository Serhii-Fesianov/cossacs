import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { AuthPage } from "./components/pages/AuthPage/AuthPage";
import { RegisterPage } from "./components/pages/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route path="cossacs" element={<MainPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
