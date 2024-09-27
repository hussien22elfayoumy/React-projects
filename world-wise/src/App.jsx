import { lazy, Suspense } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoutes from './pages/ProtectedRoutes';

// import Homepage from './pages/Homepage';
// import Product from './pages/Product';
// import Pricing from './pages/Pricing';
// import Login from './pages/Login';
// import PageNotFound from './pages/PageNotFound';
// import AppLayout from './pages/AppLayout';

import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import SpinnerFullPage from './components/SpinnerFullPage';

/*  NOTE:- LAZY LOADING TO DECREASE BUNDLE SIZE [dynamic import]
 before:- 
dist/assets/index-23039bd4.css   30.49 kB │ gzip:   5.06 kB
dist/assets/index-78ad68f9.js   507.56 kB │ gzip: 148.25 kB
 */

const Homepage = lazy(() => import('./pages/Homepage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Login = lazy(() => import('./pages/Login'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

/* After:- 
dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB
dist/assets/PageNotFound-d0e76edd.js      0.15 kB │ gzip:   0.15 kB
dist/assets/Logo-441821b2.js              0.24 kB │ gzip:   0.20 kB
dist/assets/PageNav-234748e5.js           0.49 kB │ gzip:   0.27 kB
dist/assets/Pricing-ce935f81.js           0.65 kB │ gzip:   0.42 kB
dist/assets/Homepage-6701e132.js          0.67 kB │ gzip:   0.41 kB
dist/assets/Product-50d3c204.js           0.86 kB │ gzip:   0.49 kB
dist/assets/Login-fc00b977.js             1.01 kB │ gzip:   0.54 kB
dist/assets/AppLayout-2cd069e9.js       156.96 kB │ gzip:  46.23 kB
dist/assets/index-d5146fdb.js           349.03 kB │ gzip: 101.55 kB
*/

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path='product' element={<Product />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='login' element={<Login />} />

              <Route
                path='app'
                element={
                  <ProtectedRoutes>
                    <AppLayout />
                  </ProtectedRoutes>
                }
              >
                <Route index element={<Navigate replace to='cities' />} />
                <Route path='cities' element={<CityList />} />
                <Route path='cities/:id' element={<City />} />
                <Route path='countries' element={<CountryList />} />
                <Route path='form' element={<Form />} />
              </Route>

              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
