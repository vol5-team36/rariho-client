import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';




const Post = () => {


        
        
    let id =useParams();

    console.log(process.env.REACT_APP_API_URL + `/api/profiles/` + id.id)
    axios.get(process.env.REACT_APP_API_URL + `/api/profiles/` + id.id)
        .then(res => {

        })

    return (
        
        <h2>Single Post</h2>
    )
}

export default Post