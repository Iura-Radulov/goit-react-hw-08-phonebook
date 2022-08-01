import React from 'react';
import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import HomePage from 'pages/HomePage/HomePage';

import AppBar from './AppBar';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

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
          <Route path="/contacts" element={isLoggedIn ? <ContactsPage /> : <HomePage />} />
          <Route path="/register" element={isLoggedIn ? <HomePage /> : <RegisterPage />} />
          <Route path="/login" element={isLoggedIn ? <HomePage /> : <LoginPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
