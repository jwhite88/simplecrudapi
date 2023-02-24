import React, { useState, useEffect } from "react";

export default function DeletePost() {
  const [id, setId] = useState("");
  const [posts, setPosts] = useState([]);
  const [postIds, setPostIds] = useState([])
  const [postId, setPostId] = useState(1);

  const getPosts = async () => {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const data = await response.json();
    const ids = data.map((post) => post.id);
    console.log("ids", ids);
    setPostIds(ids);
    // setPosts(data);
  };

  const deletePost = async (id) => {
    const result = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: "DELETE",
    });
    console.log("==", result.ok);
    return result.ok;
  };


  useEffect(() => {
    getPosts();
  }, []);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postId);

    let isDeleted = deletePost(postId)
    if (isDeleted) {
        const newPostIds = postIds.filter((id) => id !== postId);
        setPostIds(newPostIds);
    }
  };
  return (
    <div style={{ paddingBottom: "5rem" }}>
      <h2>DeletePost</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={postId}
          id=""
          onChange={(e) => setPostId(e.target.value)}
        >
          {postIds.map((id) => (
            <option value={id}>{id}</option>
          ))}
        </select>
        <button type="submit">Delete Post</button>
      </form>
    </div>
  );
}
