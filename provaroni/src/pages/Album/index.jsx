import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Album() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
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
        <Link to={"/"}>Home</Link>
      <div>
        {data.map((album) => (
          <div key={album.id}>
            <p>{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
