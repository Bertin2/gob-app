import React, { useState } from 'react';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, Stepper, Step, StepLabel, Grid, Container, Box, MenuItem } from '@mui/material';
import DatosDomicilio from './datosDomicilio';
import estados from '../data/estados';

const DatosPersonales = () => {
  const initialFormData = {
    clave: '',
    sexo: '',
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    estadoNacimiento: '',
    responsable: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);

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

  const handleNext = () => {
    // Aquí podrías validar los datos antes de avanzar al siguiente formulario
    // En este caso, simplemente avanzamos al formulario de "Domicilio" si los campos requeridos están completos
    if (
      formData.clave &&
      formData.sexo &&
      formData.nombre &&
      formData.apellidoPaterno &&
      formData.apellidoMaterno &&
      formData.fechaNacimiento &&
      formData.estadoNacimiento &&
      formData.responsable
    ) {
      setCurrentStep(currentStep + 1);
    } else {
      alert('Por favor, completa todos los campos requeridos en Datos Personales.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realiza cualquier acción con los datos del formulario, como enviarlos a un servidor o procesarlos de alguna manera.
    console.log(formData);
  };

  const steps = ['Datos Personales', 'Domicilio']; // Pasos o secciones del formulario

  return (
    <Container maxWidth="md">
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form onSubmit={handleSubmit}>
        {currentStep === 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6}>
                <TextField
                  label="Responsale"
                  name="responsable"
                  value={formData.responsable}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                />
                <br/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Clave Elector"
                  name="clave"
                  value={formData.clave}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nombre(s)"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Apellido Paterno"
                  name="apellidoPaterno"
                  value={formData.apellidoPaterno}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Apellido Materno"
                  name="apellidoMaterno"
                  value={formData.apellidoMaterno}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Fecha de Nacimiento"
                  name="fechaNacimiento"
                  type="date"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Estado de Nacimiento"
                  name="estadoNacimiento"
                  value={formData.estadoNacimiento}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  select
                  required
                >
                  {/* Mapea los estados para generar las opciones de la lista desplegable */}
              {estados.map((estado) => (
                <MenuItem key={estado} value={estado}>
                  {estado}
                </MenuItem>
              ))}
                  </TextField>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Sexo</FormLabel>
                  <RadioGroup name="sexo" value={formData.sexo} onChange={handleChange} row>
                    <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button type="button" variant="contained" color="error" onClick={handleReset}>
                  Limpiar
                </Button>
                <Button type="button" variant="contained" color="primary" onClick={handleNext}>
                  Siguiente
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
        {currentStep === 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={12}>
                <DatosDomicilio formData={formData} setFormData={setFormData} handleBack={() => setCurrentStep(currentStep - 1)} handleReset={handleReset} />
              </Grid>
              <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button type="button" variant="contained" color="primary" onClick={() => setCurrentStep(currentStep - 1)}>
                  Anterior
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </form>
    </Container>
  );
};

export default DatosPersonales;
