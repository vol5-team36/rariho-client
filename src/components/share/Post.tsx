import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';




const Post = () => {

    const[data,setData] = useState();
        
        
    let id =useParams();

    console.log(process.env.REACT_APP_API_URL + `/api/profiles/` + id.id)
    axios.get(process.env.REACT_APP_API_URL + `/api/profiles/` + id.id)
        .then(res => {
            console.log(res.data);
            setData(res.data)
        })

    return (
        <h2>data</h2>

        
    )
}

export default Post