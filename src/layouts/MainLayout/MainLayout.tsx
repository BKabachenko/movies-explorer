import { Outlet } from 'react-router';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const MainLayout = () => {
  return (
    <div className='bg-gray-200'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
