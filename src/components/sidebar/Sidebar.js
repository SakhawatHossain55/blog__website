import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  console.log(cats);
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__item">
          <div className="sidebar__title">TOP NEWS</div>
          <img src="https://i.ibb.co/GMhRWQh/ISg-Uj-Ss-A-400x400.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            animi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque, anim
          </p>
        </div>
        <div className="sidebar__title">
          <span className="sidebar__title">CATEGORIES</span>
          <ul>
            {cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">
                <li>{c.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebar__item">
          <span className="sidebar__title">FOLLOW US</span>
          <div className="sidebar__title__social">
            <i className=" fab fa-facebook-square"></i>
            <i className=" fab fa-twitter-square"></i>
            <i className=" fab fa-pinterest-square"></i>
            <i className=" fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
