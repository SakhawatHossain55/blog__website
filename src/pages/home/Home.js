import React from 'react';
import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import axios from "axios"
import { useLocation } from "react-router";
import { Container } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import Sidebar from '../../components/sidebar/Sidebar';


const Home = () => {
  const [posts, setPosts] = useState([])
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <Container>
      <Banner />
      <div style={{display: 'flex'}}>
          <Posts posts={posts} />
          <Sidebar />
      </div>
    </Container>
  );
}

export default Home;