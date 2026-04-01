import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Task
  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  // Delete Task
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{
      textAlign: "center",
      marginTop: "50px",
      fontFamily: "Arial"
    }}>
      
      <h1>📝 Todo App</h1>

      {/* Input Box */}
      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "5px",
          border: "1px solid gray"
        }}
      />

      {/* Add Button */}
      <button
        onClick={addTodo}
        style={{
          padding: "10px 15px",
          marginLeft: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Add
      </button>

      {/* Todo List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              marginTop: "15px",
              border: "1px solid #ccc",
              padding: "10px",
              width: "350px",
              margin: "15px auto",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {todo}

            {/* Delete Button */}
            <button
              onClick={() => deleteTodo(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}























//function Card({ image, title, description, mobile }) {
//  return (
//    <div style={{
//      border: "1px solid #ccc",
//      borderRadius: "10px",
//      padding: "15px",
//      width: "220px",
//      textAlign: "center"
//    }}>
//      <img src={image} alt="card" width="100%" />
//      <h3>{title}</h3>
//      <p>{description}</p>
//
//      {/* ✅ Show mobile only if exists */}
//      {mobile && <p><b>📞 {mobile}</b></p>}
//    </div>
//  );
//}
//
//export default function App() {
//  return (
//    <div style={{ display: "flex", gap: "20px" }}>
//
//      {/* With mobile */}
//      <Card 
//        image="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
//        title="Shahu"
//        mobile="9876543210"
//      />
//
//      <Card 
//        image="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
//        title="Rahul"
//        mobile="9123456780"
//      />
//    </div>
//  );
//}