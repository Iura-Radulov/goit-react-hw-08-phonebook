import React from 'react';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

import Navigation from './Navigation/Navigation';
// import LoginPage from 'pages/LoginPage/LoginPage';
// import RegisterPage from 'pages/RegisterPage/RegisterPage';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Suspense fallback={<p>Загружаем...</p>}>
          {/* <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute> */}

          <Route path="/contacts" element={<ContactsPage />} />
          {/* <PublicRoute exact path="/register" restricted>
            <RegisterPage />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsPage />
          </PrivateRoute> */}
        </Suspense>
      </Routes>
    </>
  );
};
