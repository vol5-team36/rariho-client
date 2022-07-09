import React from 'react'
import { Button, Container, Stack, TextField } from '@mui/material'
import CommentForm from '../components/CommentForm';

type Props = {
    handleNext: any
}


const BasicForm = (props: Props) => {
  return (
    <div>
        <Stack spacing={3}>
                <TextField required label="お名前" />
                <TextField required label="Twitter" />
                <TextField required label="GitHub" />
                <TextField required label="その他URL" />
                <TextField required inputProps={{ maxLength: 40 }} label="ひとこと" />

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

                    

            </Stack>
    </div>
  )
}

export default BasicForm