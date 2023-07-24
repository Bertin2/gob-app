import React from 'react';


const Menu = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className="menu">
      <ul className="nav">
        <li
          className={activeMenu === 'movilizacion' ? 'active' : ''}
          onClick={() => setActiveMenu('movilizacion')}
        >
          Movilizacion
        </li>
        <li
          className={activeMenu === 'formulario' ? 'active' : ''}
          onClick={() => setActiveMenu('formulario')}
        >
          Formulario
        </li>
      </ul>
    </div>
  );
};

export default Menu;
