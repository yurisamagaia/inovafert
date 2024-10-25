import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <Link to="banner" smooth={true} className="link" activeClass="active" spy={true}>Home</Link>
        <Link to="about" smooth={true} className="link" activeClass="active" spy={true}>Sobre</Link>
        <Link to="services" smooth={true} className="link" activeClass="active" spy={true}>Serviços</Link>
        <Link to="contact" smooth={true} className="link" activeClass="active" spy={true}>Contato</Link>
      </ul>
    </nav>
  );
};

export default Navbar;