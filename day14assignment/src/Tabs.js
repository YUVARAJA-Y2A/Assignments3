import React, { useEffect, useState } from "react";
import "./tabs.css";

function Tabs() {
  const [Index] = useState(0);
  const [Todos, setTodos] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://course-api.com/react-tabs-project");
    const data = await response.json();

    setTodos(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (index) => {
    // setIndex(index);
  };

  return (
    <div class="div-tabs-main">
      <div>
        {Todos.map((todo, index) => (
          <div class="d-flex">
            <button class="button-options" onClick={() => handleClick(index)}>
              {todo.company}
            </button>
          </div>
        ))}
      </div>
      <div>{console.log(Todos.filter([Index].title))}</div>
    </div>
  );
}

export default Tabs;
