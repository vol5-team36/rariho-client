import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

type Props = {
    title: string
}


export default function Sample(props: Props) {

    const [inputValue, setInputValue] = useState<Skill>({id: 0,skillid: 0, label: "",rank: 0});
    const [skills, setSkills] = useState<Skill[]>([]);
    const [rank, setRank] = React.useState('');
      
    type Skill = {
        id: Number;
        skillid: Number;
        label: string;
        rank: Number;
    };

    const handleChange = (v: any) => {
        console.log(v);
        setInputValue(v);
    }

    const handleSubmit = (e: any) => {
        
        e.preventDefault();
        const newskill: Skill = {
            id: skills.length,
            skillid: inputValue.id,
            label: inputValue.label,
            rank: 9,
        };
        for(var i = 0;i < skills.length;i++){
            if(skills[i].skillid == newskill.skillid){
                return
            }
        }
        setSkills([...skills, newskill])
    }
    const rankChange = (event: SelectChangeEvent, id: any) => {
        skills[id].rank = Number(event.target.value);
        setRank(event.target.value as string);
        
      };
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid  sx = {{ m: 1 }} container spacing={2} alignItems="flex-end">
                    
                    <Grid item xs={8}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={list}
                            onChange={(e,v) => handleChange(v)}
                            renderInput={(params) => <TextField {...params} label={props.title} />}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" size="large" type="submit">add</Button>
                    </Grid>
                    
                    
                </Grid>
            </form>
            <ul>
                {skills.map((skill) => (
                    <li key={skill.id.toString()}>
                        {skill.label}
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Rank</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={skill.rank.toString()}
                                label="rank"
                                onChange={(e, id) => rankChange(e, skill.id)}
                                defaultValue={skill.rank.toString()}
                                >
                                <MenuItem value={1}>SSS</MenuItem>
                                <MenuItem value={2}>SS</MenuItem>
                                <MenuItem value={3}>S</MenuItem>
                                <MenuItem value={4}>A</MenuItem>
                                <MenuItem value={5}>B</MenuItem>
                                <MenuItem value={6}>C</MenuItem>
                                <MenuItem value={7}>D</MenuItem>
                                <MenuItem value={8}>E</MenuItem>
                                <MenuItem value={9}>F</MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                ))}
            </ul>
        </div>
      
    );
  }
  
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const list = [
    { label: 'java', id: 1 },
    { label: 'c++', id: 2 },
    { label: 'c#', id: 3 },
    { label: 'Python', id: 4 },
  ];
  