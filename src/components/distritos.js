import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Select, MenuItem, Paper, Grid, Box, Divider, } from '@mui/material';
import TableData from './dataTable';
import Estatal from './estatal';
import Federal from './federal';
import Local from './local';

const Distritos = () => {
  const [formularioSeleccionado, setFormularioSeleccionado] = useState('estatal');

  const handleChangeFormulario = (event) => {
    setFormularioSeleccionado(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard Movilización
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="formulario-seleccionado">Vista</InputLabel>
              <Select
                value={formularioSeleccionado}
                onChange={handleChangeFormulario}
                label="Vista"
                inputProps={{ name: 'formulario', id: 'formulario-seleccionado' }}
              >
                <MenuItem value="estatal">Estatal</MenuItem>
                <MenuItem value="distritoFederal">Distrito Federal</MenuItem>
                <MenuItem value="distritoLocal">Distrito Local</MenuItem>
                {/* Add more options if needed */}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {/* Mostrar el formulario correspondiente según la selección */}
        {formularioSeleccionado === 'estatal' && <Estatal />}
        {formularioSeleccionado === 'distritoFederal' && <Federal/>}
        {formularioSeleccionado === 'distritoLocal' && <Local/>}
      </Paper>
      <Divider sx={{ my: 3 }} />
      <Paper elevation={3} sx={{ p: 3, overflow: 'hidden' }}>
        <TableData />
      </Paper>
    </Container>
  );
};

export default Distritos;
