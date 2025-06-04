import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="h-[844px] w-[390px]">
      {/* 모든 페이지 공통 사이즈 및 배경 등 */}
      <Outlet />
    </div>
  );
};

export default RootLayout;
