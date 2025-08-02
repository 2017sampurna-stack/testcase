import React from 'react';
import { Link } from 'react-router-dom';  // ✅ Added for routing

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link> {/* ✅ Fixed link */}
          </li>
        </ul>

        <form className="form-inline my-3 my-lg-1">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form>

        {/* ✅ Theme Color Buttons */}
        <div className="d-flex gap-2 align-items-center mx-3">
          <div className="btn-group" role="group" aria-label="Theme colors">
            <button className="btn btn-primary btn-sm" onClick={() => props.setThemeColor('blue')}>Blue</button>
            <button className="btn btn-success btn-sm" onClick={() => props.setThemeColor('green')}>Green</button>
            <button className="btn btn-danger btn-sm" onClick={() => props.setThemeColor('red')}>Red</button>
          </div>
        </div>

        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} my-2`}>
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
          />
          <label className="form-check-label" htmlFor="switchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
