import React from 'react';
import { Card, Box, Button, Typography } from '@mui/material';
import Plot from './Plot';
import Plot2 from './Plot2';
import Plot3 from './Plot3';
import Plot4 from './Plot4';
import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';

function Dashboard() {
  return (
    <>
   <Header />
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexWrap: 'initial', gap: '5px', padding: '5px', marginBottom: '20px' }}>
                <Card style={{ width: '100%', gap: '20px', padding: '20px' }}>
                    <Typography variant="h4" component="h1" gutterBottom></Typography>
                    <Plot />
                </Card>
                <Card style={{ width: '100%', gap: '5px', padding: '20px' }}>
                    <Typography variant="h4" component="h1" gutterBottom></Typography>
                    <Plot2 />
                </Card>
            </div>
            <div style={{ display: 'flex', flexWrap: 'initial', gap: '5px', padding: '5px' }}>
                <Card style={{ width: '100%', gap: '5px', padding: '20px' }}>
                    <Typography variant="h4" component="h1" gutterBottom></Typography>
                    <Plot3 />
                </Card>
                <Card style={{ width: '100%', gap: '5px', padding: '20px' }}>
                    <Typography variant="h4" component="h1" gutterBottom></Typography>
                    <Plot4 />
                </Card>
            </div>
        </div>
       <Footer />
    </>
  )
}

export default Dashboard