import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Card, CardContent, MenuItem } from '@mui/material';
import municipios from '../data/municipios';
import data from '../data/data';

const Formulario = () => {
  const [formData, setFormData] = useState({
    responsable: '',
    municipio: '',
    seccion: '',
    mostrarFormulario: 'no', // Agregamos un campo para el radio button
  });
  const [resultados, setResultados] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { responsable, municipio, seccion } = formData;
    
    // Filtrar los datos según los criterios de búsqueda
    const filteredData = data.filter((item) => {
      const matchResponsable = item.responsable.toLowerCase().includes(responsable.toLowerCase());
      const matchMunicipio = item.municipio.toLowerCase() === municipio.toLowerCase();
      const matchSeccion = item.seccion === seccion;
      return matchResponsable && (!municipio || matchMunicipio) && (!seccion || matchSeccion);
    });

    setResultados(filteredData);
  };

  const handleLimpiar = () => {
    setFormData({
      responsable: '',
      municipio: '',
      seccion: '',
      mostrarFormulario: formData.mostrarFormulario, // Mantener el valor del radio button
    });
    setResultados(data); // Mostrar el array completo nuevamente al limpiar
  };

  const handleMostrarFormularioChange = (event) => {
    setFormData({
      ...formData,
      mostrarFormulario: event.target.value,
    });
  };

  // Cargar todos los datos al cargar la página
  useEffect(() => {
    setResultados(data);
  }, []);

  return (
    <Container maxWidth="lg" style={{ display: 'flex' }}>
      <div style={{ flex: '1', paddingRight: '16px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Búsqueda de Responsable
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Campos del formulario */}
          <TextField
            label="Responsable"
            name="responsable"
            value={formData.responsable}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Municipio"
            name="municipio"
            value={formData.municipio}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            select
          >
            {/* Mapea los municipios para generar las opciones de la lista desplegable */}
            {municipios.map((municipio) => (
              <MenuItem key={municipio} value={municipio}>
                {municipio}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Sección"
            name="seccion"
            value={formData.seccion}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            select
          >
            {/* Opciones de sección con ceros a la izquierda */}
            <MenuItem value="">Seleccione</MenuItem>
            {Array.from({ length: 26 }, (_, index) => index + 1).map((num) => (
              <MenuItem key={num} value={num.toString().padStart(2, '0')}>
                {num.toString().padStart(2, '0')}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Buscar
          </Button>
          <Button variant="contained" color="error" fullWidth onClick={handleLimpiar}>
            Limpiar
          </Button>
        </form>
      </div>
      <div style={{ flex: '1', maxHeight: '400px', overflowY: 'auto' }}>
        <Typography variant="h6" align="center" gutterBottom>
          Resultados de la búsqueda
        </Typography>
        <div style={{ marginBottom: '16px' }}>
          {resultados.map((resultado, index) => (
            <Card key={index} style={{ marginBottom: '16px' }}>
              <CardContent>
                <Typography variant="body1">Telefono: {resultado.telefono}</Typography>
                <Typography variant="body2">Responsable: {resultado.responsable}</Typography>
                <Typography variant="body2">Municipio: {resultado.municipio}</Typography>
                <Typography variant="body2">Seccion: {resultado.seccion}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Formulario;

