import React from 'react';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import HomePage from 'pages/HomePage/HomePage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import AppBar from './AppBar';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return isFetchingCurrentUser ? (
    <h1>Показываем React Skeleton</h1>
  ) : (
    <>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* <PublicRoute exact path="/">
          <HomePage />
        </PublicRoute>
        <PublicRoute exact path="/register" restricted>
          <RegisterPage />
        </PublicRoute>
        <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
          <LoginPage />
        </PublicRoute>
        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsPage />
        </PrivateRoute> */}
        </Routes>
      </Suspense>
    </>
  );
};
