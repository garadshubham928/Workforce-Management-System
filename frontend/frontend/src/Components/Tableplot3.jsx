import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { Card, Box, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Tableplot3() {
  const chartRef = useRef(null);
  const [Region, setRegion] = useState([]);

  const fetchitem = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/samplesuperstore/orders');
      const data = await response.json();
      setRegion(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchitem();
  }, []);

  useEffect(() => {
    if (!Region.length || !chartRef.current) return;

    const aggregatedData = {};
    Region.forEach((item) => {
      const Region = item.Region || 'Unknown';
      const Sales = Number(item.Sales) || 0;
      if (!aggregatedData[Region]) {
        aggregatedData[Region] = Sales;
      } else {
        aggregatedData[Region] += Sales;
      }
    });

    const RegionNames = Object.keys(aggregatedData);
    const SalesValues = Object.values(aggregatedData);

    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Sales by Region',
        left: 'center',
        top: '20px',
        textStyle: { fontSize: 18, fontWeight: 'bold' },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'line' },
      },
      xAxis: {
        type: 'category',
        data: RegionNames,
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
          name: 'Sales',
          data: SalesValues,
          type: 'line', // 👈 Changed from 'bar' to 'line'
          smooth: true,
          symbol: 'circle',
          symbolSize: 8,
          lineStyle: {
            color: 'black',
            width: 3,
          },
          itemStyle: {
            color: 'blue',
            borderColor: '#2e7d32',
            borderWidth: 2,
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
  }, [Region]);

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

export default Tableplot3;
