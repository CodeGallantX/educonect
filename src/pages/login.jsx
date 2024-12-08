import { Helmet } from 'react-helmet-async';
import LoginForm from '../components/LoginForm';
import LoginFormMobile from '../components/LoginFormMobile';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login - EduConnect</title>
        <meta name="description" content="Login to your EduConnect account to access your learning journey and explore new opportunities!" />
        <meta name="keywords" content="Login, EduConnect, User Login, Account Access, Learning Platform" />
        <meta name="author" content="EduConnect" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="hidden sm:block">
        <LoginForm />
      </div>
      <div className="block sm:hidden">
        <LoginFormMobile />
      </div>
    </>
  );
};

export default LoginPage;
