import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Container, Box, MenuItem } from '@mui/material';
import municipios from '../data/municipios'

const InfoCred = () => {
  const initialFormData = {
    calle: '',
    numeroExt: '',
    numeroInt: '',
    municipioVota: '',
    localidad: '',
    colonia: '',
    cp: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realiza cualquier acción con los datos del formulario, como enviarlos a un servidor o procesarlos de alguna manera.
    console.log(formData);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5" align="center" gutterBottom>
        Información de Credencial
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Calle"
              name="calle"
              value={formData.calle}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Número Ext"
              name="numeroExt"
              value={formData.numeroExt}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Número Int"
              name="numeroInt"
              value={formData.numeroInt}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Municipio Vota"
              name="municipioVota"
              value={formData.municipioVota}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              select
              required
            >
                {/* Mapea los estados para generar las opciones de la lista desplegable */}
              {municipios.map((municipio) => (
                <MenuItem key={municipio} value={municipio}>
                  {municipio}
                </MenuItem>
              ))}
                </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Localidad"
              name="localidad"
              value={formData.localidad}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              select
              required
              >
              {/* Mapea los estados para generar las opciones de la lista desplegable */}
            {municipios.map((municipio) => (
              <MenuItem key={municipio} value={municipio}>
                {municipio}
              </MenuItem>
            ))}
              </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Colonia"
              name="colonia"
              value={formData.colonia}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Código Postal"
              name="cp"
              value={formData.cp}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button type="button" variant="contained" color="error" onClick={handleReset}>
              Limpiar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default InfoCred;
