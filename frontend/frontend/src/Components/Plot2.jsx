import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { Card, Box, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Plot2() {
  const chartRef = useRef(null);
  const [Months, setMonths] = useState([]);

  const fetchitem = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/samplesuperstore/gallery');
      const data = await response.json();
      setMonths(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchitem();
  }, []);

  useEffect(() => {
    if (!Months.length || !chartRef.current) return;

    const aggregatedData = {};
    Months.forEach((item) => {
      const Months = item.Months || 'Unknown';
      const Manpower = Number(item.Manpower) || 0;
      aggregatedData[Months] = (aggregatedData[Months] || 0) + Manpower;
    });

    const MonthsNames = Object.keys(aggregatedData);
    const ManpowerValues = Object.values(aggregatedData);

    const myChart = echarts.init(chartRef.current);
    const option = {
      title: {
        text: 'Months vs Manpower',
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
        data: MonthsNames,
        axisLabel: { rotate: 45, color: '#333' },
      },
      yAxis: {
        type: 'value',
        axisLabel: { color: '#333' },
      },
      dataZoom: [
      {
        type: 'slider',     
        show: true,
        start: 0,           
        end: 30,            
        xAxisIndex: 0,
      },
      {
        type: 'inside',      
        xAxisIndex: 0,
      },
    ],
      series: [
        {
          name: 'Manpower',
          data: ManpowerValues,
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
      window.removeEventListener('resize', resizeHandler);
      myChart.dispose();
    };
  }, [Months]);

  return (
    <>
      <Card sx={{ mt: 0, p: 2 }}>
       
        <div
          ref={chartRef}
          style={{ width: '100%', height: '500px', maxWidth: '1200px', margin: '0 auto' }}
        />
      </Card>
    </>
  );
}

export default Plot2;
