import React from 'react';
import Formulario from '../components/responsable';
import DatosPersonales from '../components/datosPersonales';


const Captura = () => {
  return (
    <div>
      <Formulario />
      <br/><br/>
      <div className="divider" /> {/* Usa la clase "divider" para la línea divisoria */}
      <DatosPersonales />
      <br/><br/>
    </div>
  );
};

export default Captura;

