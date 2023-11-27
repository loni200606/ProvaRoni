import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Todos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
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
        {data.map((todos) => (
          <div key={todos.id}>
            <p>{todos.title}</p>
            {todos.completed ? "Completa 🟢" : "Incompleta 🔴"}
          </div>
        ))}
      </div>
    </div>
  );
}
