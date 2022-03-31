import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PostDetail.css";
const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  return (
    <div>
      <h4>This is Post detail for: {postId}</h4>
      <div className="single-post">
        <p>User ID: {post.userId}</p>
        <p>Title: {post.title}</p>
        <p className="body">{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetail;
