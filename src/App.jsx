import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [shoppingList, setShoppingList] = useState(() => {
    const savedList = localStorage.getItem("myShoppingList");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [inputValue, setInputValue] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    localStorage.setItem("myShoppingList", JSON.stringify(shoppingList));
  }, [shoppingList]);

  function addItem() {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setShoppingList([...shoppingList, newItem]);
      setInputValue("");
    }
  }

  function deleteItem(id) {
    const updatedList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(updatedList);
  }

  function toggleComplete(id) {
    const updatedList = shoppingList.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setShoppingList(updatedList);
  }

  const filteredItems = shoppingList.filter((item) => {
    if (filterStatus === "completed") {
      return item.completed === true;
    } else if (filterStatus === "active") {
      return item.completed === false;
    } else {
      return true;
    }
  });

  return (
    <>
      <div className="wrapper">
        <div className="input-area">
          <input
            type="text"
            id="list-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add an Item..."
            onKeyDown={(e) => e.key === "Enter" && addItem()}
          />
          <button className="btn-add" onClick={addItem}>
            Add
          </button>
        </div>
        <div className="shopping-list">
          <ul>
            {filteredItems.map((item) => (
              <div className="list-item" key={item.id}>
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(item.id)}
                />
                <li
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </li>
                <button
                  className="btn-delete"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
          <div className="btns-filter">
            <button
              className={filterStatus === "active" ? "active" : ""}
              onClick={() => setFilterStatus("active")}
            >
              To-Do
            </button>
            <button
              className={filterStatus === "all" ? "active" : ""}
              onClick={() => setFilterStatus("all")}
            >
              All
            </button>
            <button
              className={filterStatus === "completed" ? "active" : ""}
              onClick={() => setFilterStatus("completed")}
            >
              Completed
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
