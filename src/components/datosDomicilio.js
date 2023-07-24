

import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Container, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem } from '@mui/material';
import InfoCred from './infoCred';
import municipios from '../data/municipios'

const DatosDomicilio = ({ handleBack }) => {
  const initialDomicilioData = {
    calle: '',
    numExt: '',
    numInt: '',
    municipioVive: '',
    localidad: '',
    colonia: '',
    cp: '',
    seccion: '',
    celular: '',
    telFijo: '',
    telMensajes: '',
  };

  const [domicilioData, setDomicilioData] = useState(initialDomicilioData);
  const [currentStep, setCurrentStep] = useState(0);
  const [mostrarFormulario, setMostrarFormulario] = useState(false); // Estado para mostrar u ocultar el formulario adicional


  const handleChange = (event) => {
    const { name, value } = event.target;
    setDomicilioData({
      ...domicilioData,
      [name]: value,
    });
  };
  const handleMostrarFormularioChange = (event) => {
    setMostrarFormulario(event.target.value === 'si');
  };

  const handleReset = () => {
    setDomicilioData(initialDomicilioData);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5" align="center" gutterBottom>
        Datos de Domicilio
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6}>
          <TextField
              label="Calle"
              name="calle"
              value={domicilioData.calle}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Número Ext"
              name="numExt"
              value={domicilioData.numExt}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Número Int"
              name="numInt"
              value={domicilioData.numInt}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Municipio Vive"
              name="municipioVive"
              value={domicilioData.municipioVive}
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
              value={domicilioData.localidad}
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
              value={domicilioData.colonia}
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
              value={domicilioData.cp}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Sección Vota"
              name="seccion"
              value={domicilioData.seccion}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Teléfono Celular"
              name="celular"
              value={domicilioData.celular}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Teléfono Fijo"
              name="telFijo"
              value={domicilioData.telFijo}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Teléfono Mensajes"
              name="telMensajes"
              value={domicilioData.telMensajes}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button type="button" variant="contained" color="error" onClick={handleReset}>
              Limpiar
            </Button>
          </Grid>
          
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">¿La dirección de la Credencial de Elector y de donde vive son la misma?</FormLabel>
              <RadioGroup name="mostrarFormulario" value={mostrarFormulario ? 'si' : 'no'} onChange={handleMostrarFormularioChange} row>
                <FormControlLabel value="no" control={<Radio />} label="Sí" />
                <FormControlLabel value="si" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {mostrarFormulario && (
            <InfoCred />
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default DatosDomicilio;

