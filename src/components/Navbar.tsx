import { useNavigate } from 'react-router-dom';
import { useNavbar } from './NavbarContext';

const NavBar = () => {
  const { config } = useNavbar();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-14 items-center justify-between bg-gray-200 px-4">
      <div onClick={handleBack} className="cursor-pointer text-2xl">
        {config.showBack && <button>{'<'}</button>}
      </div>
      <div className="text-lg font-bold">{config.showTitle ? 'SERI VOCA' : ''}</div>
      <div className="cursor-pointer text-2xl">{config.showSettings && <button>⚙️</button>}</div>
    </div>
  );
};

export default NavBar;
