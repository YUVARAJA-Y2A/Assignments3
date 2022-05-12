import React, { useEffect, useState } from "react";
import Tours from "./Tours";

function Fetchjson() {
  const [todos, setTodos] = useState([]);

  const fetchData = () => {
    fetch(" https://course-api.com/react-tours-project")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(todos.length);
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Tours
            name={todo.name}
            info={todo.info}
            image={todo.image}
            price={todo.price}
            length={todos.length}
          />
        </div>
      ))}
    </>
  );
}

export default Fetchjson;
