import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const { title, _id, desc, createdAt } = post;
  return (
    <div className="post">
      <Link to={`/post/${_id}`} className="link">
        <img src="https://i.ibb.co/mHtkdX3/music-Lessons.png" alt="" />
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((c) => (
              <span className="postCat">{c.name}</span>
            ))}
          </div>

          <span className="postTitle">{title}</span>
          <hr />
          <span className="postDate">
            {new Date(createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{desc}</p>
      </Link>
    </div>
  );
}
