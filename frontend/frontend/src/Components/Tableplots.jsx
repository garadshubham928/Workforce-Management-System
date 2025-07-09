import React from 'react';
import { Card, Box, Button, Typography } from '@mui/material';
import Tableplot1 from './Tableplot1';
import Tableplot2 from './Tableplot2';
import Tableplot3 from './Tableplot3';
import Tableplot4 from './Tableplot4';
import Pie1 from './Pie';
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
                    <Tableplot1/>
                </Card>
                <Card style={{ width: '100%', gap: '5px', padding: '20px' }}>
                    <Typography variant="h4" component="h1" gutterBottom></Typography>
                    <Tableplot2 />
                </Card>
            </div>
            <div style={{ display: 'flex', flexWrap: 'initial', gap: '5px', padding: '5px' }}>
                <Card style={{ width: '100%', gap: '5px', padding: '20px' }}>
                    <Typography variant="h4" component="h1" gutterBottom></Typography>
                    <Tableplot3 />
                </Card>
                <Card style={{ width: '100%', gap: '5px', padding: '20px' }}>
                    <Typography variant="h4" component="h1" gutterBottom></Typography>
                    <Tableplot4 />
                </Card>
            </div>
             <div style={{ display: 'flex', flexWrap: 'initial', gap: '5px', padding: '5px' }}>
                <Card style={{ width: '100%', gap: '5px', padding: '20px' }}>
                    <Typography variant="h4" component="h1" gutterBottom></Typography>
                    <Tableplot3 />
                </Card>
                <Card style={{ width: '100%', gap: '5px', padding: '20px' }}>
                    <Typography variant="h4" component="h1" gutterBottom></Typography>
                    <Pie1/>
                </Card>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default Dashboard