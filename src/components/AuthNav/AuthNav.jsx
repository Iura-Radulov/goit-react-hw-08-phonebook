import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles from './AuthNav.module.css';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 600,
    fontSize: '22px',
    color: '#2A363B',
  },
  activeLink: {
    color: '#4e52cd',
    display: 'inline-block',
    padding: 12,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '22px',
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      >
        Registration
      </NavLink>
      <NavLink to="/login" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
        Login
      </NavLink>
    </div>
  );
}
