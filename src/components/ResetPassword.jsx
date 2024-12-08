import { useState } from 'react';
import { FaAngleLeft } from "react-icons/fa6";


const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='lg:grid lg:grid-cols-2 light:bg-gray-200 dark:bg-gray-800 w-full h-screen overflow-hidden'>
      <div className="relative flex flex-col light:text-gray-800 dark:text-white space-y-3 px-10 md:px-16 lg:px-10 xl:px-32 py-10 pt-16">
        <h1 className='text-xl font-bold text-left'>Create a new password to help keep your account safe and secure</h1>

        <a href="/reset-password">
            <FaAngleLeft className="absolute left-9 top-6 p-2 light:bg-gray-800 dark:bg-gray-700 rounded-full text-4xl light:text-gray-100 dark:text-white font-bold"/>
        </a>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-3 lg:space-y-4 mt-16'>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className='light:text-gray-800 dark:text-white' htmlFor="password">Password</label>
            <input
              className="w-full font-light border border-solid p-4 rounded-lg light:bg-gray-200 dark:bg-gray-800 border-gray-500 outline-none focus:border-300-gray transition-all duration-300 ease-in-out light:text-gray-500 dark:text-white"
              type="password"
              name="password"
              id="password"
              placeholder='New password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className='light:text-gray-800 dark:text-white' htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="w-full font-light border border-solid p-4 rounded-lg light:bg-gray-200 dark:bg-gray-800 border-gray-500 outline-none focus:border-300-gray transition-all duration-300 ease-in-out light:text-gray-500 dark:text-white"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder='Confirm password'
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
          </fieldset>

          <a href="/login">
            <button className='mt-2 w-full bg-primary text-white py-3 rounded-lg' type="submit">
              Reset Password
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;