import React from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TakList";


const TodoApp = () => {
  return (
    <div>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TodoApp;