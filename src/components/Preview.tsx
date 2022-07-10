import React from 'react';
import {Typography} from '@mui/material';
import {Box} from '@mui/material';
type Props = {
    name:string,
    twitter:string,
    github:string,
    comment:string,
    url:string,
    icon:any,
}

function Preview(p:Props){
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
            </Typography> 
            

            <div
            style={{
                position: "relative",
                width: "40%"
            }}
            >
            <img
                src={
                URL.createObjectURL(p.icon[0])
                }
                style={{
                width: "100%"
                }}
            />
            </div>
        
        </Box>
    );
}
export default Preview;