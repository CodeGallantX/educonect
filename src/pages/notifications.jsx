// import { useState } from 'react';
import notifications from '../data/notifications.json';
import NotificationItem from '../components/NotificationItem';
import HeaderMobile from '../components/HeaderMobile';

const NotificationPage = () => {
  return (
    <div className="bg-gray-800 min-h-screen p-4">
      <HeaderMobile />
      <div className="max-w-lg mx-auto p-6">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
