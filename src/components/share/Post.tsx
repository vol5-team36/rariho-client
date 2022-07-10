import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';




const Post = () => {

    const[name,setName] = useState();
    const[twitter,setTwitter] = useState();
    const[github,setGithub] = useState();
    const[comment,setComment] = useState();
        
        
    let id =useParams();

    console.log(process.env.REACT_APP_API_URL + `/api/profiles/` + id.id)
    axios.get(process.env.REACT_APP_API_URL + `/api/profiles/` + id.id)
        .then(res => {
            console.log(res.data.name);
            setName(res.data.name);
            setTwitter(res.data.twitter_account)
            setGithub(res.data.github_account)
            setComment(res.data.comment)
        })

    return (
        <>
            <h2>data</h2>
            <h3>名前：{name}</h3>
            <h3>Twitter：{twitter}</h3>
            <h3>github：{github}</h3>
            <h3>comment：{comment}</h3>
            
        </>
        

        
    )
}

export default Post