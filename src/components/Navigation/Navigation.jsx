import { NavLink } from 'react-router-dom';
// import authSelectors from 'redux/auth/auth-selectors';
// import { useSelector } from 'react-redux';

export default function Navigation() {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {' '}
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}
