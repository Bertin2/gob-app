const datos = [
    {id: 1, df: 15, dl: 21, region: "R4", municipio: 'ABASOLO', poligono: "1_03", seccion: 1, lnom: 1160, meta: 580, compromisos: 290, avance: 290, detectados: 96.66, otros:241, porcentaje: 5,efectividad: -78.51 },
    {id: 2, df: 15, dl: 21, region: "R4", municipio: 'ABASOLO', poligono: "1_03", seccion: 1, lnom: 570, meta: 285, compromisos: 142.5, avance: 142.5, detectados: 47.5, otros:132, porcentaje: 9.12,efectividad:-67.08 },
    {id: 3, df: 15, dl: 21, region: "R4", municipio: 'ABASOLO', poligono: "1_03", seccion: 1, lnom: 558, meta: 279, compromisos: 139.5, avance: 139.5, detectados: 46.5, otros:394, porcentaje: 12.90,efectividad: -83.25 },
    {id: 4, df: 15, dl: 21, region: "R4", municipio: 'ABASOLO', poligono: "1_03", seccion: 1, lnom: 1330, meta: 665, compromisos: 332.5, avance: 332.5, detectados: 110.83, otros:461, porcentaje: 7.36,efectividad:-80.78 },
    { id: 5, df: 19, dl: 32, region: "R2", municipio: 'CADEREYTA', poligono: "1_01", seccion: 2, lnom: 1980, meta: 990, compromisos: 495, avance: 495, detectados: 50, otros: 300, porcentaje: 20, efectividad: 120 },
    { id: 6, df: 12, dl: 26, region: "R3", municipio: 'CARMEN', poligono: "1_02", seccion: 3, lnom: 1750, meta: 875, compromisos: 438, avance: 438, detectados: 60, otros: 320, porcentaje: 15, efectividad: 140 },
    { id: 7, df: 17, dl: 29, region: "R4", municipio: 'CASTAÑOS', poligono: "1_03", seccion: 1, lnom: 1160, meta: 580, compromisos: 290, avance: 290, detectados: 96.66, otros: 241, porcentaje: 5, efectividad: -78.51 },
    { id: 8, df: 21, dl: 36, region: "R1", municipio: 'COLON', poligono: "2_01", seccion: 4, lnom: 2200, meta: 1100, compromisos: 550, avance: 550, detectados: 50, otros: 300, porcentaje: 50, efectividad: 180 },
    { id: 9, df: 16, dl: 28, region: "R2", municipio: 'COMONFORT', poligono: "2_02", seccion: 5, lnom: 1440, meta: 720, compromisos: 360, avance: 360, detectados: 80, otros: 270, porcentaje: 30, efectividad: 100 },
    { id: 10, df: 23, dl: 39, region: "R3", municipio: 'CORTAZAR', poligono: "2_03", seccion: 1, lnom: 1210, meta: 605, compromisos: 302.5, avance: 302.5, detectados: 50, otros: 270, porcentaje: 25, efectividad: 90 },
    { id: 11, df: 18, dl: 31, region: "R4", municipio: 'CUERAMARO', poligono: "3_01", seccion: 2, lnom: 2030, meta: 1015, compromisos: 507.5, avance: 507.5, detectados: 50, otros: 260, porcentaje: 35, efectividad: 140 },
    { id: 12, df: 20, dl: 35, region: "R1", municipio: 'DOCTOR MORA', poligono: "3_02", seccion: 3, lnom: 2500, meta: 1250, compromisos: 625, avance: 625, detectados: 40, otros: 250, porcentaje: 50, efectividad: 180 },
    { id: 13, df: 14, dl: 24, region: "R2", municipio: 'DOLORES HIDALGO', poligono: "3_03", seccion: 4, lnom: 1600, meta: 800, compromisos: 400, avance: 400, detectados: 80, otros: 250, porcentaje: 50, efectividad: 160 },
    { id: 14, df: 22, dl: 37, region: "R3", municipio: 'GUANAJUATO', poligono: "4_01", seccion: 5, lnom: 1900, meta: 950, compromisos: 475, avance: 475, detectados: 50, otros: 250, porcentaje: 50, efectividad: 180 },
    { id: 15, df: 15, dl: 26, region: "R4", municipio: 'HUALAHUISES', poligono: "4_02", seccion: 1, lnom: 2200, meta: 1100, compromisos: 550, avance: 550, detectados: 40, otros: 240, porcentaje: 50, efectividad: 180 },
    { id: 16, df: 20, dl: 30, region: "R1", municipio: 'IRAPUATO', poligono: "4_03", seccion: 2, lnom: 1700, meta: 850, compromisos: 425, avance: 425, detectados: 50, otros: 240, porcentaje: 50, efectividad: 180 },
    { id: 17, df: 18, dl: 25, region: "R2", municipio: 'JARAL DEL PROGRESO', poligono: "5_01", seccion: 3, lnom: 2000, meta: 1000, compromisos: 500, avance: 500, detectados: 50, otros: 240, porcentaje: 50, efectividad: 180 },
    { id: 18, df: 25, dl: 34, region: "R3", municipio: 'JERECUARO', poligono: "5_02", seccion: 4, lnom: 2400, meta: 1200, compromisos: 600, avance: 600, detectados: 40, otros: 230, porcentaje: 50, efectividad: 180 },
    { id: 19, df: 19, dl: 29, region: "R4", municipio: 'LEON', poligono: "5_03", seccion: 5, lnom: 1800, meta: 900, compromisos: 450, avance: 450, detectados: 50, otros: 230, porcentaje: 50, efectividad: 180 },
    { id: 20, df: 21, dl: 36, region: "R1", municipio: 'MOROLEON', poligono: "6_01", seccion: 1, lnom: 1900, meta: 950, compromisos: 475, avance: 475, detectados: 40, otros: 230, porcentaje: 50, efectividad: 180 },
    { id: 21, df: 17, dl: 28, region: "R2", municipio: 'OJINAGA', poligono: "6_02", seccion: 2, lnom: 1500, meta: 750, compromisos: 375, avance: 375, detectados: 50, otros: 230, porcentaje: 50, efectividad: 180 },
    { id: 22, df: 23, dl: 39, region: "R3", municipio: 'PENJAMO', poligono: "6_03", seccion: 3, lnom: 2500, meta: 1250, compromisos: 625, avance: 625, detectados: 40, otros: 220, porcentaje: 50, efectividad: 180 },
    { id: 23, df: 18, dl: 30, region: "R4", municipio: 'PURISIMA', poligono: "7_01", seccion: 4, lnom: 2000, meta: 1000, compromisos: 500, avance: 500, detectados: 50, otros: 220, porcentaje: 50, efectividad: 180 },
    { id: 24, df: 20, dl: 34, region: "R7", municipio: 'ROMITA', poligono: "7_02", seccion: 5, lnom: 2200, meta: 1100, compromisos: 550, avance: 550, detectados: 40, otros: 220, porcentaje: 50, efectividad: 180 },
    { id: 25, df: 14, dl: 26, region: "R6", municipio: 'SALAMANCA', poligono: "7_03", seccion: 1, lnom: 1900, meta: 950, compromisos: 475, avance: 475, detectados: 50, otros: 220, porcentaje: 50, efectividad: 180 },
    { id: 25, df: 14, dl: 26, region: "R5", municipio: 'SALAMANCA', poligono: "7_03", seccion: 1, lnom: 1900, meta: 950, compromisos: 475, avance: 475, detectados: 50, otros: 220, porcentaje: 50, efectividad: 180 },
  ];
  
  
  export default datos;