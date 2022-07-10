import React from 'react';
import {Typography} from '@mui/material';
import {Box} from '@mui/material';
import {Button} from '@mui/material';
import axios from 'axios';

import pic from "../Images/E.png"

const ErrorImage = (e: any) => {
    if (e == undefined) return pic;
    return URL.createObjectURL(e)
};



type Props = {
    name:string,
    twitter:string,
    github:string,
    comment:string,
    url:string,
    skills:any,
    icon:any,
}

function Rank(i:number){
    switch(i){
        case 1:
            return('sss');
        case 2:
            return('ss');
        case 3:
            return('s');
        case 4:
            return('a');
        case 5:
            return('b');
        case 6:
            return('c');
        case 7:
            return('d');
        case 8:
            return('e');
        case 9:
            return('f');
    }
}

function getBase64(file:any) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

function Preview(p:Props){
    const data= {
            "name":p.name,
            "image":getBase64(p.icon[0]),
            "github_account":p.github,
            "twitter_account":p.twitter,
            "url":p.url,
            "comment":p.comment,
            "skills":p.skills
    }
    return(
        <Box component = "div" sx={{
            //color:'primary.main',
            bgcolor:'divider',
            
            mx :'true',
            //borderColor:'grey.400',
        }}>
            <Typography paragraph={true}>
                <h1>
                    name:{p.name}
                </h1>

                <h1>
                    twitter:{p.twitter}
                </h1>

                <h1>
                    github:{p.github}
                </h1>
                <h1>
                    url:{p.url}
                </h1>
                <h1>
                    comment:{p.comment}
                </h1>
                <ul>
                    {p.skills.map((skill:any)=>
                        <h1>{skill.name}:{Rank(skill.rank)}</h1>     
                    )}
                </ul>
            </Typography> 
            
            

            <div
            style={{
                position: "relative",
                width: "40%"
            }}
            >
            <img
                src={
                    //URL.createObjectURL(p.icon[0])
                    ErrorImage(p.icon[0])
                }
                style={{
                width: "100%"
                }}
            />
            </div>

            <Button onClick={()=>axios.post('http://ec2-3-239-217-103.compute-1.amazonaws.com/api/profiles',data)
                                        .then(responce=>{
                                            console.log("posting");
                                            console.log(responce);
                                        })}>upload </Button>

        </Box>
        
    );
}
export default Preview;