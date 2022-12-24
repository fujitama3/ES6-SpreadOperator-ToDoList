import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  // const items = [];

  // function handleInput(event) {
  //   const { name, value } = event.target;

  //   setItem(value);
  //   console.log(item);
  // }

  // function addList(event) {
  //   const newItem = event.target.value;
  //   items.push(newItem);
  //   console.log(items);
  // }

  function handleInput(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function addItem() {
    setItems((prevItems) => [...prevItems, item]);
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem) => (
            <li>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
