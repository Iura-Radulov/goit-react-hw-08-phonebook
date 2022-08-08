import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const activeLink = {
  color: '#4e52cd',
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={s.link}
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        SIGN UP
      </NavLink>
      <NavLink
        to="/login"
        className={s.link}
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        LOG IN
      </NavLink>
    </div>
  );
}
