import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Edit from './pages/edit';
import Community from './pages/community'
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
          <Route path="/post" element={<Edit />}/>
          <Route path="/ask-question" element={<Edit />}/>
          <Route path="/answer-question" element={<Edit />}/>
          <Route path="/community" element={<Community />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/email-verification" element={<EmailVerification/>}/>
        </Routes>
    </div>
  )
}

export default App;