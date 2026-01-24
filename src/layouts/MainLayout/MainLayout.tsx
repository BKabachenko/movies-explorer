import { Outlet } from 'react-router';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const MainLayout = () => {
  return (
    <div className='grid min-h-dvh grid-rows-[auto_1fr_auto] bg-gray-200'>
      <Header />
      <main className='mx-auto mb-10 w-full max-w-5xl px-5 md:mb-20 lg:mb-30'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
