import React from 'react'
import { Button, Container, Stack, TextField } from '@mui/material'
import SelectSkills from '../pages/SelectSkills'

export default function Content() {
    return (
        <Container maxWidth="sm" sx={{ pt: 5 }}>
            <Stack spacing={3}>
                <TextField required label="お名前" />
                <TextField required label="Twitter" />
                <TextField required label="GitHub" />
                <TextField required label="その他URL" />
                <TextField required inputProps={{ maxLength: 40 }} label="ひとこと" />
                <SelectSkills />

                <Button color="primary" variant="contained" size="large">
                送信
                </Button>
            </Stack>
        </Container>
    )
}

