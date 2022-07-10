import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';




const Post = () => {


        
        
    let id =useParams();


    axios.get(`http://ec2-3-239-217-103.compute-1.amazonaws.com/api/profiles/` + id.id)
        .then(res => {

        })

    return (
        
        <h2>Single Post</h2>
    )
}

export default Post