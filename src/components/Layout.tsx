import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MateriasContext } from '../context/MateriaContext';
import { FaHome, FaUser, FaList, FaBars, FaBell, FaUserCircle } from 'react-icons/fa';
import NotificationDropdown from './NotificationDropdown'; // Importando o componente

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { materias } = useContext(MateriasContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false); // Para controlar a exibição da aba de notificações

  // Lista de notificações (placeholder)
  const notifications = ["Nova mensagem", "Atualização de perfil", "Convite para evento"];
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Referência ao dropdown

  // Função para alternar a sidebar (minimizada ou não)
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Função para alternar a aba de notificações
  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? 'w-56' : 'w-16'} sticky bg-gray-800 text-white flex flex-col transition-all duration-300`}>
        

        <div className="p-4 bg-gray-900">
          <h2 className={`text-xl font-bold mb-4 text-center 'text-gray-400'}`}>
            a
          </h2>
        </div> 
        
        <nav className="flex-grow">
          <ul className="space-y-2">
            {/* Links retangulares com área clicável */}
            <li>
              <button
                onClick={() => sidebarOpen || toggleSidebar()}
                className="w-full flex items-center p-3 hover:bg-gray-700 transition-colors duration-300"
              >
                <FaHome className={`mr-2 text-lg ${sidebarOpen ? '' : 'm-auto text-2xl'}`} />
                {sidebarOpen && <Link to="/" className="w-full h-full hover:text-gray-400">Home</Link>}
              </button>
            </li>
            <li>
              <button
                onClick={() => sidebarOpen || toggleSidebar()}
                className="w-full flex items-center p-3 hover:bg-gray-700 transition-colors duration-300"
              >
                <FaUser className={`mr-2 text-lg ${sidebarOpen ? '' : 'm-auto text-2xl'}`} />
                {sidebarOpen && <Link to="/usuario" className="w-full h-full hover:text-gray-400">Usuários</Link>}
              </button>
            </li>
            <li>
              <button
                onClick={() => sidebarOpen || toggleSidebar()}
                className="w-full flex items-center p-3 hover:bg-gray-700 transition-colors duration-300"
              >
                <FaList className={`mr-2 text-lg ${sidebarOpen ? '' : 'm-auto text-2xl'}`} />
                {sidebarOpen && <Link to="/lista" className="w-full h-full hover:text-gray-400">Lista</Link>}
              </button>
            </li>
          </ul>
        </nav>

        {/* Lista de Matérias no rodapé da sidebar */}
        {sidebarOpen && (
          <div className="p-4 bg-gray-700">
            <h3 className="text-lg font-semibold mb-2">Matérias</h3>
            <ul>
              {materias.slice(0, 3).map((materia, index) => (
                <li key={index} className="text-sm mb-1">
                  {materia}
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="w-full bg-gray-300 text-black p-4 flex items-center justify-between fixed top-0 left-0 z-20">
          <div className="flex items-center">
            <FaBars className="text-2xl cursor-pointer mr-4" onClick={toggleSidebar} />
            <img
              src="https://via.placeholder.com/40" // Imagem placeholder
              alt="Placeholder"
              className="w-10 h-10 rounded-full mr-4"
            />
          </div>

          <div className="flex items-center relative">
            {/* Ícone de sino que abre o dropdown de notificações */}
            <FaBell className="text-2xl cursor-pointer mr-6" onClick={toggleNotifications} />

            {/* Componente de dropdown de notificações */}
            <div ref={dropdownRef}>
              <NotificationDropdown notifications={notifications} isOpen={notificationsOpen} />
            </div>

            <Link to="/usuario">
              <FaUserCircle className="text-3xl cursor-pointer" />
            </Link>
          </div>
        </header>

        <main className="flex-1 p-8 bg-gray-100 mt-16">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
