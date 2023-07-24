import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import the auto version of Chart.js
import 'chartjs-adapter-date-fns'; // Import the date adapter
import datos from '../data/dataTable';
const Federal = () => {
    const regionData = {};

    // Group the data by region and accumulate the values for each category
    datos.forEach((item) => {
      if (!regionData[item.region]) {
        regionData[item.region] = {
          LNOM: 0,
          Meta: 0,
          Compromisos: 0,
          Avance: 0,
          SIAN: 0, // Using "detectados" instead of "SIAN" from the data provided
          Otros: 0,
        };
      }
  
      regionData[item.region].LNOM += item.lnom;
      regionData[item.region].Meta += item.meta;
      regionData[item.region].Compromisos += item.compromisos;
      regionData[item.region].Avance += item.avance;
      regionData[item.region].SIAN += item.detectados;
      regionData[item.region].Otros += item.otros;
    });
  
    // Convert the regionData object into arrays for chart data
    const regionLabels = Object.keys(regionData);
    regionLabels.sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1))); // Sort by numeric value (R1 to R7)
  
    const regionCumulative = {
      LNOM: [],
      Meta: [],
      Compromisos: [],
      Avance: [],
      SIAN: [],
      Otros: [],
    };
  
    let LNOMAccumulative = 0;
    let MetaAccumulative = 0;
    let CompromisosAccumulative = 0;
    let AvanceAccumulative = 0;
    let SIANAccumulative = 0;
    let OtrosAccumulative = 0;
  
    regionLabels.forEach((region) => {
      LNOMAccumulative += regionData[region].LNOM;
      MetaAccumulative += regionData[region].Meta;
      CompromisosAccumulative += regionData[region].Compromisos;
      AvanceAccumulative += regionData[region].Avance;
      SIANAccumulative += regionData[region].SIAN;
      OtrosAccumulative += regionData[region].Otros;
  
      regionCumulative.LNOM.push(LNOMAccumulative);
      regionCumulative.Meta.push(MetaAccumulative);
      regionCumulative.Compromisos.push(CompromisosAccumulative);
      regionCumulative.Avance.push(AvanceAccumulative);
      regionCumulative.SIAN.push(SIANAccumulative);
      regionCumulative.Otros.push(OtrosAccumulative);
    });
  
    const dataLine = {
      labels: regionLabels,
      datasets: [
        {
          label: 'LNOM',
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: regionCumulative.LNOM,
        },
        {
          label: 'Meta',
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: regionCumulative.Meta,
        },
        {
          label: 'Compromisos',
          backgroundColor: 'rgba(255, 206, 86, 0.6)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
          data: regionCumulative.Compromisos,
        },
        {
          label: 'Avance',
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: regionCumulative.Avance,
        },
        {
          label: 'SIAN',
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
          data: regionCumulative.SIAN,
        },
        {
          label: 'Otros',
          backgroundColor: 'rgba(255, 159, 64, 0.6)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
          data: regionCumulative.Otros,
        },
      ],
    };
  
    const optionsLine = {
      scales: {
        x: {
          beginAtZero: true,
          type: 'category',
        },
        y: {
          beginAtZero: true,
        },
      },
    };
  
    const dataBar = {
      labels: ['LNOM', 'Meta', 'Compromisos', 'Avance', 'SIAN', 'Otros'],
      datasets: regionLabels.map((region, index) => ({
        label: region,
        backgroundColor: getRandomColor(),
        borderColor: 'rgba(0, 0, 0, 0.6)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0, 0, 0, 0.8)',
        hoverBorderColor: 'rgba(0, 0, 0, 1)',
        data: [
          regionData[region].LNOM,
          regionData[region].Meta,
          regionData[region].Compromisos,
          regionData[region].Avance,
          regionData[region].SIAN,
          regionData[region].Otros,
        ],
      })),
    };
  
    const optionsBar = {
      scales: {
        y: {
          beginAtZero: true,
          stepSize: 250000,
        },
      },
    };
  
    return (
      <div>
        <Line data={dataLine} options={optionsLine} />
        <Bar data={dataBar} options={optionsBar} />
      </div>
    );

  // Función para obtener un color aleatorio de una paleta de colores
  function getRandomColor() {
    const colors = [
      '#FF5733', '#33FF57', '#5733FF', '#33FFED', '#FF33CB', '#FFEE33', '#33B0FF', '#FF9433', '#B733FF', '#33FFB4'
      // Puedes agregar más colores aquí
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
};

export default Federal