import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/home';
import Edit from './pages/edit';
import Community from './pages/community';
import Profile from './pages/profile';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgot-password';
import ResetPassword from './pages/reset-password';
import EmailVerification from './pages/email-verification';
import Onboarding from './pages/onboarding';
import Notifications from './pages/notifications';

const App = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      if (isMobile) {
        navigate("/onboarding", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
    }
  }, [isMobile, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={isMobile ? "/onboarding" : "/login"} replace />} />

        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Edit />} />
        <Route path="/ask-question" element={<Edit />} />
        <Route path="/answer-question" element={<Edit />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
      </Routes>
    </div>
  );
};

export default App;