  import React, { useState } from "react";
  // import { task } from "./tasks/tasks";

  export const NewTask = ({addTodo}) => {
    const [newTask, setNewTask] = useState(""); 

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (newTask.trim() === "") {
        return; // Don't add empty tasks
      }
      addTodo(newTask)
      // setTasks([...tasks, newTask]); 
      // console.log(tasks);

      setNewTask(""); 
    };

    return (
      <>
        <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleSubmit}>
          <div className="form-outline flex-fill">
            <input
              type="text"
              id="newTask"
              className="form-control"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <label className="form-label" htmlFor="newTask">
              New task...
            </label>
          </div>
          <button type="submit" className="btn btn-info ms-2">
            Add
          </button>
        </form>
      </>
    );
  };
