import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function Sample() {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={skills}
        renderInput={(params) => <TextField {...params} label="言語" />}
      />
    );
  }
  
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const skills = [
    { label: 'java', id: 1 },
    { label: 'c++', id: 2 },
  ];
  