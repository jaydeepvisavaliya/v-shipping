import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Style from "./api.css";
import { Link } from 'react-router-dom';
import Child from "../pages/Child"


function Api() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://api.interns-world.com/wp-json/fream/v1/freams/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className='main'>
          <Child post={post} />
        </div>
      ))}

    </div>

  );
}

export default Api;