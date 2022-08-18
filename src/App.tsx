import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ObservableMain from "./components/observable/ObservableMain";
import MainPage from "./pages/MainPage";
import UseCallbackPractice from "./pages/UseCallbackPractice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/usecallback" element={<UseCallbackPractice />} />
        <Route path="/observable" element={<ObservableMain />} />
      </Routes>
    </Router>
  );
}

export default App;
