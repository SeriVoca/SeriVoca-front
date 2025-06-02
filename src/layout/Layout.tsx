interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="h-[844px] w-[390px]">{children}</div>;
};

export default Layout;
