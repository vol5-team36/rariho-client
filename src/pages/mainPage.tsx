import React from 'react'
import { Grid } from '@mui/material';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

export default function App(){
  return (
    <Grid container direction="column">
      <Header />
      <div style={{ padding: 30 }}>
        <Content />
      </div>
      <Footer />
    </Grid>
  )
}