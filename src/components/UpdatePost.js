import React, { useState, useEffect } from 'react'

export default function UpdatePost() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("")
    const [posts, setPosts] = useState([]);

    const getPosts = async () => { 
        const response = await fetch(process.env.REACT_APP_API_URL);
        const data = await response.json();
        setPosts(data);
    }

    useEffect(() => {
        getPosts();
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        // const userId = uuidv4();
        const post = {title, text};
        console.log(post);

        fetch(process.env.REACT_APP_API_URL, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

    }


  return (
    <div style={{paddingBottom: "5rem"}}>UpdatePost</div>
  )
}
