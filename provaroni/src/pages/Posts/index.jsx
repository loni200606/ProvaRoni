import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostsCard from "../../components/PostsCard";

export default function Posts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Link to={"/albums"}>Album</Link> 
      <Link to={"/todos"}>Todos</Link>

      <div>
        {data.map((photos) => (
          <div key={photos.id}>
            <PostsCard photo={photos.url} />
          </div>
        ))}
      </div>
    </div>
  );
}
