import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';

const App = () => {
  const [formData, setFormData] = useState({
    email: '',
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
    <div className='light:bg-gray-200 dark:bg-gray-800  w-full h-screen overflow-hidden'>
      <div className="flex flex-col space-y-3 px-10 md:px-16 lg:px-10 xl:px-32 py-10 pt-20">
        <div className="mb-6 space-y-3">
        <h1 className='text-xl font-bold text-left light:text-gray-800 dark:text-white'>Enter the email associated with your account and we&apos;ll send you a reset code.</h1>
        <a href="/reset-password">
            <FaAngleLeft className="absolute left-9 top-6 p-2 light:bg-gray-800 dark:bg-gray-700 rounded-full text-4xl light:text-gray-100 dark:text-white font-bold"/>
        </a>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-3 lg:space-y-4'>

          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className='text-white' htmlFor="email">Email Address</label>
            <input
              className="w-full border border-solid p-4 rounded-lg light:text-gray-500 dark:text-white border-gray-500 light:bg-gray-200 dark:bg-gray-800 outline-none light:focus:border-gray-700 dark:focus:border-gray-300 transition-all duration-300 ease-in-out"
              type="email"
              name="email"
              id="email"
              placeholder='Enter your email address'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </fieldset>
          
          <a href="/reset-password">
            <button className='mt-2 w-full bg-primary text-white py-3 rounded-lg' type="submit">
              Verify
            </button>
          </a>
        </form>

      </div>
    </div>
  );
};

export default App;