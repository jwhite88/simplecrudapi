import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [newPost, setNewPost] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = uuidv4();
    const post = { title, text, userId };
    console.log(post);

    fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setNewPost(json);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "body") {
      setText(e.target.value);
    }
  };

  return (
    <div style={{ paddingBottom: "5rem" }}>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          type=""
          name="body"
          placeholder="Body"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div>
        <div>
          {Object.keys(newPost).length > 0 && (
            <>
              <h3>New Post</h3>
              <h4>{newPost.title}</h4>
              <p>{newPost.text}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
