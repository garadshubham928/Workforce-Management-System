import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { Card, Box, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import moment from 'moment/moment';

function Tableplot1() {
  const chartRef = useRef(null);
  const [OrderDate, setOrderDate] = useState([]);

  const fetchitem = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/samplesuperstore/orders');
      const data = await response.json();
      setOrderDate(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchitem();
  }, []);

  useEffect(() => {
    if (!OrderDate.length || !chartRef.current) return;

    const aggregatedData = {};
    OrderDate.forEach((item) => {
     const OrderDate = moment(item["Order Date"]).format("YYYY-MM") || 'Unknown';
      const Profit = Number(item.Profit) || 0;
      if (!aggregatedData[OrderDate]) {
        aggregatedData[OrderDate] = Profit;
      } else {
        aggregatedData[OrderDate] += Profit;
      }
    });

    const OrderDateNames = Object.keys(aggregatedData);
    const ProfitValues = Object.values(aggregatedData);

    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Profit by OrderDate',
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
        data: OrderDateNames,
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
          name: 'Profit',
          data: ProfitValues,
          type: 'bar',
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
  }, [OrderDate]);

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

export default Tableplot1;
