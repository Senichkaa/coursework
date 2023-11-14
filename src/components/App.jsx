import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage.jsx'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
