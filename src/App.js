import React, { useState } from 'react';
import './App.css';
import Menu from './components/menu';
import Formulario from './pages/formularioCap';
import Movilizacion from './pages/movilizacion';

function App() {
  const [activeMenu, setActiveMenu] = useState('movilizacion');

  return (
    <div className="App">
      <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        {activeMenu === 'movilizacion' ? <Movilizacion /> : <Formulario />}
      </div>
    </div>
  );
}

export default App;
