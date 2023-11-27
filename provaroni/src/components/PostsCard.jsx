import React, { useState, useEffect } from "react";
import axios from "axios";
import "./postsCard.css";

export default function PostsCard({ photo }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-card" >
      {data.map((post) => (
        <div className="card">
        <div key={post.id}>
          <p>{post.title}</p>
          <img className="apiImagem" src={photo} alt="Post" />
        </div></div>
      ))}
    </div>
  );
}
