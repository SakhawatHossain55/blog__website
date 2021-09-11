import React from 'react';
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
const Post = ({ post }) => {

  const { title, username, _id, createdAt } = post;
  const PF = "http://localhost:5000/images/";
  return (
    <Col lg={6} className="post mb-4 text-center">
          {post.photo && (
            <img className="postImg" src={PF + post.photo} alt="" />
          )}
          <div className="post__info">
            <div>
              {post.categories.map((c) => (
                <span className="post__info__cat">{c.name}</span>
              ))}
            </div>
            <span className="post__info__title">{title}</span>
            <p className="post__info__author">Author: {username}</p>
            <span className="post__info__date">
              {new Date(createdAt).toDateString()}
            </span>
          </div>
          <Link to={`/post/${_id}`} className="link">
            <button className="btn-brand mt-3">Detail</button>
        </Link>
    </Col>
  );
}

export default Post;
