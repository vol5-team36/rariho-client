import React from 'react'
import { Button, Container, Stack, TextField } from '@mui/material'
import CommentForm from './Test';
import SelectSkills from '../pages/SelectSkills'
interface Props{
    setName:(name:string)=>void;
    setTwitter:(name:string)=>void;
    setGithub:(name:string)=>void;
    setOtherurl:(name:string)=>void;
    setComment:(name:string)=>void;
}
export default function Content() {
    return (
        <Container maxWidth="sm" sx={{ pt: 5 }}>
            <Stack spacing={3}>

                <SelectSkills />
                <TextField required label="お名前" onChange={(event)=>p.setName(event.target.value)}/>
                <TextField required label="Twitter" onChange={(event)=>p.setTwitter(event.target.value)}/>
                <TextField required label="GitHub" onChange={(event)=>p.setGithub(event.target.value)}/>
                <TextField required label="その他URL" onChange={(event)=>p.setOtherurl(event.target.value)}/>
                <TextField required inputProps={{ maxLength: 40 }} label="ひとこと" onChange={(event)=>p.setComment(event.target.value)}/>
                <Button variant="contained" component="label">
                    Upload File
                    <input type="file" accept="image/*" hidden/>
                </Button>
                <label htmlFor="select-image">
                    <Button variant="contained" color="primary" component="span">
                    Upload Image
                    </Button>
                </label>

                <CommentForm />
                

                <Button color="primary" variant="contained" size="large">
                送信
                </Button>

            </Stack>
        </Container>
    )
}

