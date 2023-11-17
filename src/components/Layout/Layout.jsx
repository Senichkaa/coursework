import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Main } from './Layout.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
