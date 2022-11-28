import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("code");
  function handleNewTask(e) {
    setText(e.target.value)
  }

  function handleNewCategory(e) {
    setCategory(e.target.value)
  }
  const element = {
    text: text,
    category: category
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(element);


  }




  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNewTask} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewCategory}>
          {/* render <option> elements for each category here */}
          {categories.map((category) => {
            if (category !== "All")
              return <option key={category} value={category}>{category}</option>
          })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
