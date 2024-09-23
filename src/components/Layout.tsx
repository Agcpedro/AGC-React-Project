import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <h2 className="text-xl font-bold mb-4">Navegação</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/usuario" className="hover:text-gray-400">Usuários</Link>
            </li>
            <li>
              <Link to="/lista" className="hover:text-gray-400">Lista</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default Layout;
