import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { NavbarContext } from '../components/NavbarContext';

const LayoutWithNavbar = () => {
  const [config, setConfig] = useState({
    showBack: false,
    showTitle: true,
    showSettings: false,
  });

  return (
    <NavbarContext.Provider value={{ config, setConfig }}>
      <div className="flex h-full flex-col">
        <Navbar />
        <Outlet />
      </div>
    </NavbarContext.Provider>
  );
};

export default LayoutWithNavbar;
