import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { Card, Box, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Plot() {
  const chartRef = useRef(null);
  const [Country, setCountry] = useState([]);

  const fetchitem = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/samplesuperstore/gallery');
      const data = await response.json();
      setCountry(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchitem();
  }, []);

  useEffect(() => {
    if (!Country.length || !chartRef.current) return;

    const aggregatedData = {};
    Country.forEach((item) => {
      const country = item.Country || 'Unknown';
      const manpower = Number(item.Manpower) || 0;
      if (!aggregatedData[country]) {
        aggregatedData[country] = manpower;
      } else {
        aggregatedData[country] += manpower;
      }
    });

    const countryNames = Object.keys(aggregatedData);
    const manpowerValues = Object.values(aggregatedData);

    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Manpower by Country',
        left: 'center',
        top: '20px',
        textStyle: { fontSize: 18, fontWeight: 'bold' },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
      },
      xAxis: {
        type: 'category',
        data: countryNames,
        axisLabel: { rotate: 45, color: '#333' },
      },
      yAxis: {
        type: 'value',
        axisLabel: { color: '#333' },
      },
      dataZoom: [
      {
        type: 'slider',     // Horizontal slider
        show: true,
        start: 0,            // Initial zoom start %
        end: 30,             // Initial zoom end %
        xAxisIndex: 0,
      },
      {
        type: 'inside',      // Enable mouse/touch scroll zooming
        xAxisIndex: 0,
      },
    ],
      series: [
        {
          name: 'Manpower',
          data: manpowerValues,
          type: 'bar',
          itemStyle: {
            color: '#4CAF50', 
            borderRadius: [10, 10, 0, 0],
          },
        },
      ],
    };

    myChart.setOption(option);

    const resizeHandler = () => myChart.resize();
    window.addEventListener('resize', resizeHandler);

    return () => {
      myChart.dispose();
      window.removeEventListener('resize', resizeHandler);
    };
  }, [Country]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
         
        </AppBar>
      </Box>
        <div>
      <Card sx={{ mt: 0, p: 2 }}>
        
        <div
          ref={chartRef}
          style={{ width: '100%', height: '500px', maxWidth: '1200px', margin: '0 auto' }}
        />
      </Card>
      </div>
    </>
  );
}

export default Plot;
