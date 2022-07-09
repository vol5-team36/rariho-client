import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

type Props = {
    title: string
}

export default function Sample(props: Props) {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={skills}
        renderInput={(params) => <TextField {...params} label={props.title} />}
      />
    );
  }
  
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const skills = [
    { label: 'java', id: 1 },
    { label: 'c++', id: 2 },
  ];
  