import React from 'react'
import { Grid } from '@mui/material';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

export default function MainPage(){
  return (
<Grid container>
      <Header />
      <Grid item xs = {6}>
        <div style={{ padding: 30 }}>
          <Content 
            setName = {setName}
            setTwitter = {setTwitter}
            setGithub = {setGithub}
            setOtherurl = {setOtherurl}
            setComment = {setComment}
          />
        </div>
      </Grid>
    
      <Grid item xs = {6}>
        
        <Preview 
          name = {name}
          twitter = {twitter}
          github = {github}
          url ={otherurl}
          comment = {comment}
        />
      </Grid>
     
      <Footer />
    </Grid>
  )
}
