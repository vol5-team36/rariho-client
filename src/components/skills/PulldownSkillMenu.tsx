import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

type Props = {
    title: string
    skills: Skill[]
    method: any
}

type Skill = {
    id: number;
    skillid: number;
    label: string;
    rank: number;
};



export default function Sample(props: Props) {

    const [inputValue, setInputValue] = useState<Skill>({id: 0,skillid: 0, label: "",rank: 0});
      
    type Skill = {
        id: number;
        skillid: number;
        label: string;
        rank: number;
    };

    const handleChange = (v: any) => {
        console.log(v);
        setInputValue(v);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(props.skills.length >= 10)return;
        const newskill: Skill = {
            id: props.skills.length,
            skillid: inputValue.id,
            label: inputValue.label,
            rank: 9,
        };
        for(var i = 0;i < props.skills.length;i++){
            if(props.skills[i].skillid == newskill.skillid){
                return
            }
        }
        props.method([...props.skills, newskill])
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container sx = {{ mt: 1 }}  spacing={2} alignItems="center" >
                    
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
        </div>
      
    );
  }
  
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const list = [
    { label: 'java', id: 1 },
    { label: 'c++', id: 2 },
    { label: 'c#', id: 3 },
    { label: 'Python', id: 4 },
    { label: 'JavaScript', id: 5 },
    { label: 'Objective-C', id: 6 },
    { label: 'Scala', id: 7 },
    { label: 'Go', id: 8 },
    { label: 'Swift', id: 9 },
    { label: 'Kotlin', id: 10 },
    { label: 'Rust', id: 11 },
  ];
  