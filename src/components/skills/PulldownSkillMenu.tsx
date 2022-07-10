import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from 'axios';

type Props = {
    title: string
    skills: Skill[]
    method: any
    method2: any
}

type Skill = {
    id: number;
    skillid: number;
    name: string;
    rank: number;
};



export default function Sample(props: Props) {

    const [inputValue, setInputValue] = useState<Skill>({id: 0,skillid: 0, name: "",rank: 0});
    const [list, serList] = useState([
                                        { id: 1, name: "java" },
                                        { id: 2, name: 'c++'},
                                        { id: 3, name: 'c#'},
                                        { id: 4, name: 'Python'},
                                        { id: 5, name: 'JavaScript'},
                                        { id: 6, name: 'Objective-C'},
                                        { id: 7, name: 'Scala'},
                                        { id: 8, name: 'Go'},
                                        { id: 9, name: 'Swift'},
                                        { id: 10, name: 'Kotlin'},
                                        { id: 11, name: 'Rust'},
                                    ])
    
      
    type Skill = {
        id: number;
        skillid: number;
        name: string;
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
            name: inputValue.name,
            rank: 9,
        };
        for(var i = 0;i < props.skills.length;i++){
            if(props.skills[i].skillid == newskill.skillid){
                return
            }
        }
        props.method([...props.skills, newskill])
        props.method2([...props.skills, newskill])
    };

    useEffect(() => {
        axios.get(`http://ec2-3-239-217-103.compute-1.amazonaws.com/api/skills`)
        .then(res => {
          console.log(res.data.skills[props.title]);
        })
            
    }, []);

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container sx = {{ mt: 1 }}  spacing={2} alignItems="center" >
                    
                    <Grid item xs={8}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={list}
                            getOptionLabel={(option) => option.name}
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
  
  