import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import Media from 'react-media';
import { createSvgIcon } from '@mui/material/utils';
import s from './Navigation.module.css';

const activeLink = {
  color: '#4e52cd',
};

const HomeIcon = createSvgIcon(<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />, 'Home');

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeLink : undefined)}
        className={s.link}
      >
        <Media query="(max-width: 600px)">
          {matches =>
            matches ? (
              <HomeIcon />
            ) : (
              <span>
                <HomeIcon fontSize="small" /> <span>Home</span>
              </span>
            )
          }
        </Media>
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={({ isActive }) => (isActive ? activeLink : undefined)}
          className={s.link}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
