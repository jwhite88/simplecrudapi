import React, { useState, useEffect } from 'react'

export default function GetPosts() {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => { 
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
    }

    useEffect(() => {
        getPosts();
    }, []);

  return (
    <div>
        <h2>Get Posts</h2>
        {posts.map((post) => (
            <div key={post.id}>
                <h3 style={{textTransform: 'capitalize'}}>{post.title}</h3>
                <p>{post.body}</p>
                </div>
        ))}
    </div>
  )
}
