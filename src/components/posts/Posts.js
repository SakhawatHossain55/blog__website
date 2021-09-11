import { Row } from "react-bootstrap";
import Post from "../post/Post";
import "./posts.css";
import React from 'react';

const Posts = ({ posts }) => {
  return (
    <Row>
      <div className="posts">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </Row>
  );
}

export default Posts;