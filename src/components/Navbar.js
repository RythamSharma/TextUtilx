import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand me-3" style={{ color: '#FE347E', fontSize: '30px', fontWeight: 'bolder', marginLeft: '5px' }} to="/">{props.title}</Link>
          <ul className="navbar-nav d-flex">
            <li className="nav-item me-3">
              <Link className="nav-link" style={{ color: '#FE347E', fontSize: '15px', fontWeight: 'light' }} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: '#FE347E', fontSize: '15px', fontWeight: 'light' }} to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
          <input className="form-check-input" onClick={props.togglemode} type="checkbox" style={{ backgroundColor: '#AF0064' }} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label mx-0.5" onClick={props.togglemode} htmlFor="flexSwitchCheckDefault">{(props.mode) === 'dark' ? 'light' : 'dark'}</label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
};

Navbar.defaultProps = {
  title: 'my website name'
};
