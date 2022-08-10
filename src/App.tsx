import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UseCallbackPractice from "./pages/UseCallbackPractice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/usecallback" element={<UseCallbackPractice />} />
      </Routes>
    </Router>
  );
}

export default App;
