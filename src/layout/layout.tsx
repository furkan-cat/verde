import { Outlet, OutletProps } from 'react-router-dom';

import Navigation from '@components/navigation/navigation';

const Layout: React.FC<OutletProps> = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
