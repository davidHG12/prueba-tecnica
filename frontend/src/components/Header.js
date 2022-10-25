import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Contactos</h1>
    <Link to={'/create'} className="btn btn-primary mt-2 mb-2">
      <i className="fas fa-plus"></i>
    </Link>
  </div>
);

export default Header;
