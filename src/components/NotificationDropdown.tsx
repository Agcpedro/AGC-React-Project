import React from 'react';

interface NotificationDropdownProps {
  notifications: string[];
  isOpen: boolean;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ notifications, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-10 mt-8 w-64 bg-white shadow-lg rounded-lg p-4 z-30">
      {/* Triângulo no topo do dropdown estilo caixa de fala */}
      <div className="absolute top-[-10px] right-5 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
      
      <h3 className="text-gray-800 font-semibold mb-2">Notificações</h3>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index} className="text-gray-600 text-sm border-b border-gray-300 py-2">
              {notification}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">Sem notificações no momento.</p>
      )}
    </div>
  );
};

export default NotificationDropdown;
