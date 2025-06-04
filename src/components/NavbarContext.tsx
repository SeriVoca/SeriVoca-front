import { createContext, useContext } from 'react';

interface NavbarContextType {
  config: { showBack: boolean; showTitle: boolean; showSettings: boolean };
  setConfig: (config: { showBack: boolean; showTitle: boolean; showSettings: boolean }) => void;
}

export const NavbarContext = createContext<NavbarContextType>({
  config: { showBack: false, showTitle: true, showSettings: false },
  setConfig: () => {},
});

export const useNavbar = () => useContext(NavbarContext);
