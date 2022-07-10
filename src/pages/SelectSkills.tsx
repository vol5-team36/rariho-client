import React, {useState} from 'react'
import PulldownSkillMenu from '../components/skills/PulldownSkillMenu'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Props = {
    method: any
}

const SelectSkills = (props: Props) => {
    


    const [inputValue, setInputValue] = useState<Skill>({id: 0,skillid: 0, name: "",rank: 0,type: ""});
    const [skills, setSkills] = useState<Skill[]>([]);
    const [rank, setRank] = React.useState('');
      
    type Skill = {
        id: number;
        skillid: number;
        name: string;
        rank: number;
        type: string;
    };

    const rankChange = (event: SelectChangeEvent, id: any) => {
        skills[id].rank = Number(event.target.value);
        setRank(event.target.value as string);
        
    };

    const handleDelete = (id: number) => {
        const newSkills = skills.filter((skill) => skill.id !== id);
        setSkills(newSkills)
        props.method(newSkills)
    };

    const handleUp = (id: number) => {
        if(id === 0)return;
        const copy = skills.concat();
        const swap = copy[id];
        copy[id] = copy[id-1];
        copy[id -1] = swap;

        const swapid = copy[id].id;
        copy[id].id = copy[id-1].id;
        copy[id -1].id = swapid;

        setSkills(copy);
        props.method(copy)

    };

    const handleDown = (id: number) => {
        if(id === skills.length - 1)return;
        const copy = skills.concat();
        const swap = copy[id];
        copy[id] = copy[id+1];
        copy[id+1] = swap;

        const swapid = copy[id].id;
        copy[id].id = copy[id+1].id;
        copy[id+1].id = swapid;

        setSkills(copy);
        props.method(copy)
    };

  return (
    <div>
        <PulldownSkillMenu title="languages" skills={skills} method = {setSkills} method2 = {props.method}/>
        <PulldownSkillMenu title="frameworks" skills={skills} method = {setSkills} method2 = {props.method}/>
        <List>
            {skills.map((skill) => (
                <ListItem key={skill.id.toString()}>
                    <IconButton onClick={() => handleUp(skill.id)}>
                        <ArrowDropUpIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDown(skill.id)}>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <ListItemText primary={skill.name} />
                    <FormControl>
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

                    <IconButton aria-label="Delete" onClick={() => handleDelete(skill.id)}>
                        <DeleteIcon />
                    </IconButton>

                </ListItem>
            ))}
        </List>
    </div>
    
  )
}
//未使用のコード
export default SelectSkills