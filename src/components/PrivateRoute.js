import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export default function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div {...routeProps}>{isLoggedIn ? <div>{children}</div> : <Navigate to={redirectTo} />}</div>
  );
}
