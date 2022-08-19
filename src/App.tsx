import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ObservablePractice from "./pages/ObservablePractice";
import UseCallbackPractice from "./pages/UseCallbackPractice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/usecallback" element={<UseCallbackPractice />} />
        <Route path="/observable" element={<ObservablePractice />} />
      </Routes>
    </Router>
  );
}

export default App;
