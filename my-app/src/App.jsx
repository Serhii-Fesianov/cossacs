import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./components/pages/MainPage/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cossacs" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
