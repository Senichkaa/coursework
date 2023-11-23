import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout.jsx';
import { RegisterForm } from './Forms/RegisterForm/RegisterForm.jsx';
import { LoginForm } from './Forms/LoginForm/LoginForm.jsx';
import { RestrictedRoute } from './Routes/RestrictedRoute.jsx';

const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const CatalogPage = lazy(() => import('../pages/CatalogPage.jsx'));
const ConfigurePage = lazy(() => import('../pages/ConfigurePage.jsx'));
const CartPage = lazy(() => import('../pages/CartPage.jsx'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/configure" element={<ConfigurePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegisterForm} redirectTo="/catalog" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginForm} redirectTo="/catalog" />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
