
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Singup from './Components/Singup';
import Login from './Components/Login';
import ForgotPasswordPage from './Components/forgotpassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Singup" element={<Singup />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
