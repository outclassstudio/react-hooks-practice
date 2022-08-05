import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UseCallback from "./pages/UseCallbackPractice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/usecallback" element={<UseCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
