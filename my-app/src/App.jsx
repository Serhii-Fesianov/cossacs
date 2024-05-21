import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route path="cossacs" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
