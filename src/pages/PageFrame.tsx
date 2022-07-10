import React from 'react'
import { Grid } from '@mui/material';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from '../components/share/Post';
import Shares from '../components/share/Share';

export default function PageFrame(){
  return (
    <Grid container direction="column">
      <Header />
      <BrowserRouter>
      <div style={{ padding: 30 }}>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/shares" element={<Shares />}>
            <Route path=":id" element={<Post />} />
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
      
      <Footer />
    </Grid>
  )
}
