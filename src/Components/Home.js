import React, { useEffect, useState } from "react";
import "./Home.css";
import Task from "./Task";
const Home = () => {
  const initialArray = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];
  const [task, setTask] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([
      ...task,
      {
        title,
        description,
      },
    ]);
    setTitle("");
    setDescription("");
  };
  const deleteTask = (index) => {
    const filterArr = task.filter((val, i) => {
      return i !== index;
    });
    setTask(filterArr);
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  return (
    <div className="container">
      <div className="my-notebook">
        <h1>My WorkBook</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="add-button">
            ADD
          </button>
        </form>
          <div className="my-tasks" style={task?{visibility:'visible'}:{visibility:"hidden"}}>
            {task.map((item, index) => (
              <Task
                key={index}
                title={item.title}
                description={item.description}
                deleteTask={deleteTask}
                index={index}
              />
            ))}
          </div>
      </div>
    </div>
  );
};
export default Home;
