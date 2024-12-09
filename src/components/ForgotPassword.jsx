import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear error message on input change
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation

    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Mock API logic for email submission
    alert(`A reset code has been sent to: ${formData.email}`);
    console.log('Form Data Submitted:', formData);

    // Navigate to the next page or reset password page
    navigate('/reset-password');
  };

  return (
    <div className='light:bg-gray-200 dark:bg-gray-800 w-full h-screen overflow-hidden'>
      <div className="flex flex-col space-y-3 px-10 md:px-16 lg:px-10 xl:px-32 py-10 pt-20">
        <div className="mb-6 space-y-3 relative">
          <h1 className='text-xl font-bold text-left light:text-gray-800 dark:text-white'>
            Enter the email associated with your account and we&apos;ll send you a reset code.
          </h1>
          <button onClick={() => navigate('/')} className="absolute left-0 top-4 p-2 light:bg-gray-800 dark:bg-gray-700 rounded-full p-4 text-4xl light:text-gray-100 dark:text-white font-bold">
            <FaAngleLeft />
          </button>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-3 lg:space-y-4'>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className='text-white' htmlFor="email">
              Email Address
            </label>
            <input
              className={`w-full border border-solid p-4 rounded-lg light:text-gray-500 dark:text-white border-gray-500 light:bg-gray-200 dark:bg-gray-800 outline-none ${
                error ? 'light:focus:border-red-500 dark:focus:border-red-500' : 'light:focus:border-gray-700 dark:focus:border-gray-300'
              } transition-all duration-300 ease-in-out`}
              type="email"
              name="email"
              id="email"
              placeholder='Enter your email address'
              value={formData.email}
              onChange={handleChange}
              required
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </fieldset>

          <button className='mt-2 w-full bg-primary text-white py-3 rounded-lg' type="submit">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
