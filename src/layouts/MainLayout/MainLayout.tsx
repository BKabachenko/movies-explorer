import { Outlet } from 'react-router';

import Header from '../../components/Header/Header';

const MainLayout = () => {
  return (
    <div className='bg-gray-200'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
