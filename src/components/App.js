import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categoryFilter, setCategoryFilter] = useState("All")

  function handleDelet(text) {
    const deletedTasks = tasks.filter((task) => task.text !== text)
    setTasks(deletedTasks);
  }

  //adding newtask to array task
  function handleNewTasks(element) {
    setTasks([...tasks, element])
  }

  const displayTasks = tasks.filter((task) => {
    if (categoryFilter === "All") {
      return true;
    }
    else {
      return categoryFilter === task.category;
    }

  })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={setCategoryFilter} selectCategory={categoryFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTasks} />
      <TaskList tasks={displayTasks} onDeleteTask={handleDelet} />
    </div>
  );
}

export default App;
