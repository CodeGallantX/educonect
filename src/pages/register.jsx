import { Helmet } from 'react-helmet-async';
import SignUpForm from '../components/SignUpForm';
import SignUpFormMobile from '../components/SignUpFormMobile';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up - EduConnect</title>
        <meta name="description" content="Create an account to join our platform and unlock new opportunities!" />
        <meta name="keywords" content="Sign Up, Registration, EduConnect, Join Platform, Create Account" />
        <meta name="author" content="EduConnect" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="hidden sm:block">
        <SignUpForm />
      </div>
      <div className="block sm:hidden">
        <SignUpFormMobile />
      </div>
    </>
  );
};

export default SignUpPage;