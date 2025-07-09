import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { Card, Box, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Tableplot4() {
  const chartRef = useRef(null);
  const [Segment, setSegment] = useState([]);

  const fetchitem = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/samplesuperstore/orders');
      const data = await response.json();
      setSegment(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchitem();
  }, []);

  useEffect(() => {
    if (!Segment.length || !chartRef.current) return;

    const aggregatedData = {};
    Segment.forEach((item) => {
      const Segment = item.Segment || 'Unknown';
      const Profit = Number(item.Profit) || 0;
      if (!aggregatedData[Segment]) {
        aggregatedData[Segment] = Profit;
      } else {
        aggregatedData[Segment] += Profit;
      }
    });

    const SegmentNames = Object.keys(aggregatedData);
    const ProfitValues = Object.values(aggregatedData);

    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Profit by Segment',
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
        data: SegmentNames,
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
          name: 'Profit',
          data: ProfitValues,
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
  }, [Segment]);

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

export default Tableplot4;
