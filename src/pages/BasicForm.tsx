import React from 'react'
import {Stack, TextField } from '@mui/material'
import ImageUpload from '../components/basic/ImageUpload';

type Props = {
  name: any
  twitter: any
  github: any
  url: any
  comment: any
  icon: any
  
  namemethod: any
  twittermethod: any
  githubmethod: any
  urlmethod: any
  commentmethod: any
  iconmethod: any
}


const BasicForm = (props: Props) => {

  const nameChange = (e: any) => {
    console.log(e.target.value);
    props.namemethod(e.target.value);
  };
  const twitterChange = (e: any) => {
    console.log(e.target.value);
    props.twittermethod(e.target.value);
  };
  const githubChange = (e: any) => {
    console.log(e.target.value);
    props.githubmethod(e.target.value);
  };
  const urlChange = (e: any) => {
    console.log(e.target.value);
    props.urlmethod(e.target.value);
  };
  const commentChange = (e: any) => {
    console.log(e.target.value);
    props.commentmethod(e.target.value);
  };
  const iconChange = (e: any) => {
    //console.log(e.target.value);
    //alert("アイコン読み込み完了");
    props.iconmethod(e);
  };



  return (
    <div>
        <Stack spacing={3}>
                <TextField required label="お名前" defaultValue={props.name} onChange={(e) => nameChange(e)} />
                <TextField required label="Twitter" defaultValue={props.twitter} onChange={(e) => githubChange(e)} />
                <TextField required label="GitHub" defaultValue={props.github} onChange={(e) => twitterChange(e)}/>
                <TextField required label="その他URL" defaultValue={props.url} onChange={(e) => urlChange(e)} />
                <TextField required inputProps={{ maxLength: 40 }} label="ひとこと" defaultValue={props.comment} onChange={(e) => commentChange(e)} />

                <ImageUpload defaultValue={props.icon} onChange={(e: any) => iconChange(e)} />
        </Stack>
    </div>
  )
}

export default BasicForm