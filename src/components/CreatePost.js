import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = uuidv4();
        const post = {title, text, userId};
        console.log(post);
        
    }

    const handleChange = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        } else if (e.target.name === "body") {
            setText(e.target.value);
        }

    
  return (
    <div>
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" onChange={handleChange} />
            <input type="text" name="body" placeholder="Body" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
