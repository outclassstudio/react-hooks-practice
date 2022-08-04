import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import { loginState } from "./recoil/state";

function App() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  return (
    <Router>
      <Routes>
        {isLogin ? (
          <Route path="/" element={<MainPage />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        {/* <Route path="/" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
