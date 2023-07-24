import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Menu, MenuItem, IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { saveAs } from 'file-saver'; // Import the saveAs function from file-saver library
import * as XLSX from 'xlsx'; // Import xlsx library
import '../css/table.css';
import datos from '../data/dataTable'; // Assuming you have the data in a separate file called 'data.js'

const Tabla = () => {
  const [elementosPorPagina, setElementosPorPagina] = useState(5);
  const [paginaActual, setPaginaActual] = useState(1);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const totalPaginas = Math.ceil(datos.length / elementosPorPagina);
  const indiceUltimoElemento = paginaActual * elementosPorPagina;
  const indicePrimerElemento = indiceUltimoElemento - elementosPorPagina;
  const datosPaginados = datos.slice(indicePrimerElemento, indiceUltimoElemento);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleCantidadPorPagina = (cantidad) => {
    setElementosPorPagina(cantidad);
    setPaginaActual(1);
    handleMenuClose();
  };

  const irPaginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const irPaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  // Function to handle the export button click
  const handleExportExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(datos);

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Convert buffer to blob
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Save the file using file-saver library
    saveAs(blob, 'data.xlsx');
  };

  return (
    <div className="tabla-container">
      <TableContainer component={Paper}>
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell>DF</TableCell>
              <TableCell>DL</TableCell>
              <TableCell>REGIÓN</TableCell>
              <TableCell>MUNICIPIO</TableCell>
              <TableCell>POLÍGONO</TableCell>
              <TableCell>SECCIÓN</TableCell>
              <TableCell>LNOM</TableCell>
              <TableCell>META</TableCell>
              <TableCell>COMPROMISOS</TableCell>
              <TableCell>AVANCE</TableCell>
              <TableCell>DETECTADOS</TableCell>
              <TableCell>OTROS</TableCell>
              <TableCell>PORCENTAJE</TableCell>
              <TableCell>EFECTIVIDAD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datosPaginados.map((fila) => (
              <TableRow key={fila.id} className="table-row">
                <TableCell>{fila.df}</TableCell>
                <TableCell>{fila.dl}</TableCell>
                <TableCell>{fila.region}</TableCell>
                <TableCell>{fila.municipio}</TableCell>
                <TableCell>{fila.poligono}</TableCell>
                <TableCell>{fila.seccion}</TableCell>
                <TableCell>{fila.lnom}</TableCell>
                <TableCell>{fila.meta}</TableCell>
                <TableCell>{fila.compromisos}</TableCell>
                <TableCell>{fila.avance}</TableCell>
                <TableCell>{fila.detectados}</TableCell>
                <TableCell>{fila.otros}</TableCell>
                <TableCell>{fila.porcentaje}</TableCell>
                <TableCell>{fila.efectividad}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        <div className="pagination-buttons">
          <IconButton onClick={irPaginaAnterior} disabled={paginaActual === 1}>
            <KeyboardArrowLeft />
          </IconButton>
          <p>Página {paginaActual} de {totalPaginas}</p>
          <IconButton onClick={irPaginaSiguiente} disabled={paginaActual === totalPaginas}>
            <KeyboardArrowRight />
          </IconButton>
        </div>
        <div className="items-per-page">
          <p>Mostrar</p>
          <Button onClick={handleMenuOpen}>{elementosPorPagina}</Button>
          <p>por página</p>
          <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
            <MenuItem onClick={() => handleCantidadPorPagina(5)}>5</MenuItem>
            <MenuItem onClick={() => handleCantidadPorPagina(10)}>10</MenuItem>
            <MenuItem onClick={() => handleCantidadPorPagina(20)}>20</MenuItem>
            {/* Agrega más opciones si lo deseas */}
          </Menu>
        </div>
      </div>
      <div className="export-button-container">
        <Button variant="contained" onClick={handleExportExcel}>
          Export to Excel
        </Button>
      </div>
    </div>
  );
};

export default Tabla;
