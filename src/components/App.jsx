import React from 'react';
import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import HomePage from 'pages/HomePage/HomePage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
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
    <Skeleton variant="wave" height={200} style={{ marginTop: 30 }} />
  ) : (
    <>
      <AppBar />
      <Suspense fallback={<Skeleton variant="wave" height={100} />}>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            exact
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            exact
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
