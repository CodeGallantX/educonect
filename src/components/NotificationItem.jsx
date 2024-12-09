import { FaBell, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const NotificationItem = ({ notification }) => {
    return (
      <div
        className={`flex items-center p-4 mb-2 rounded-lg ${notification.type === 'success' ? 'bg-green-100' : ''}
          ${notification.type === 'info' ? 'bg-blue-100' : ''} 
          ${notification.type === 'warning' ? 'bg-yellow-100' : ''} 
          ${notification.type === 'error' ? 'bg-red-100' : ''}`}>
        <div className="mr-4">
          {notification.type === 'success' && <FaCheckCircle className="text-green-500 text-xl" />}
          {notification.type === 'info' && <FaBell className="text-blue-500 text-xl" />}
          {notification.type === 'warning' && <FaTimesCircle className="text-yellow-500 text-xl" />}
          {notification.type === 'error' && <FaTimesCircle className="text-red-500 text-xl" />}
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-800">{notification.message}</p>
        </div>
      </div>
    );
  };

export default NotificationItem