import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Login from './pages/login'
import Register from './pages/register'
import ForgotPassword from './pages/forgot-password';
import ResetPassword from './pages/reset-password';
import EmailVerification from './pages/email-verification';


const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/email-verification" element={<EmailVerification/>}/>
        </Routes>
    </div>
  )
}

export default App;