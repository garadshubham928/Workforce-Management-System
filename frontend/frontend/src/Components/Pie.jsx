import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { Card, Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import moment from 'moment';

function Pie1() {
  const chartRef = useRef(null);
  const [State, setState] = useState([]);

  const fetchitem = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/samplesuperstore/orders');
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchitem();
  }, []);

  useEffect(() => {
    if (!State.length || !chartRef.current) return;

    // Aggregate sales by month
    const aggregatedData = {};
    State.forEach((item) => {
      const State = moment(item["Order Date"]).format("YYYY-MM") || 'Unknown';
      const Sales = Number(item.Sales) || 0;
      if (!aggregatedData[State]) {
        aggregatedData[State] = Sales;
      } else {
        aggregatedData[State] += Sales;
      }
    });

    // Sort and take top 6 entries (optional)
    const sortedData = Object.entries(aggregatedData)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6); // top 6 months by sales

    const StateNames = sortedData.map(([key]) => key);
    const SalesValues = sortedData.map(([, value]) => value);

    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Top 6 Monthly Sales Distribution',
        left: 'center',
        top: '20px',
        textStyle: { fontSize: 18, fontWeight: 'bold' },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Sales',
          type: 'pie',
          radius: '65%',
          center: ['50%', '60%'],
          data: StateNames.map((name, index) => ({
            name,
            value: SalesValues[index],
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          label: {
            formatter: '{b}\n{d}%',
            fontSize: 14,
            fontWeight: 'bold',
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
  }, [State]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          {/* Optional AppBar content */}
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

export default Pie1;
