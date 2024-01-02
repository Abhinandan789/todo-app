// App.js

import React, { useState } from "react";
import "./style.css";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import Clock from "./components/Clock";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [tasksLeft, setTasksLeft] = useState(0);
  const [filter, setFilter] = useState("all");

  // const addTask = () => {
  //   if (!inputText) {
  //     alert("Enter Task!");
  //     return;
  //   }

  //   setTasks((prevTasks) => [
  //     ...prevTasks,
  //     { text: inputText, completed: false },
  //   ]);
  //   setInputText("");
  //   setTasksLeft((prevTasksLeft) => prevTasksLeft + 1);
  // };

  const addTask = () => {
    if (!inputText) {
      alert('Enter Task!');
      return;
    }

    setTasks((prevTasks) => [
      ...prevTasks,
      { text: inputText, completed: false, time: new Date() },
    ]);
    setInputText('');
    setTasksLeft((prevTasksLeft) => prevTasksLeft + 1);
  };


  const removeTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });

    setTasksLeft((prevTasksLeft) => prevTasksLeft - 1);
  };

  const clearCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));

    setTasksLeft((prevTasksLeft) => {
      const remainingTasks = document.querySelectorAll(
        ".taskList:not(.completed)"
      ).length;
      return remainingTasks;
    });
  };

  const handleFilterClick = (filterType) => {
    setFilter(filterType);
  };

  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        completed: !updatedTasks[index].completed,
      };
      return updatedTasks;
    });
  };

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "all":
        return true;
      case "active":
        return !task.completed;
      case "completed":
        return task.completed;
      default:
        return true;
    }
  });

  return (
    <div>
      <Clock />
      <TodoHeader />
      <TodoInput
        inputText={inputText}
        setInputText={setInputText}
        addTask={addTask}
      />
      <section className="sec-1">
        <div className="info">
          <h4 className="leftItems">
            <span className="number">{tasksLeft}</span> Tasks
          </h4>
          <button type="reset" onClick={clearCompletedTasks} id="clearAll">
            Clear Complete
          </button>
        </div>
        <TodoFilters
          handleFilterClick={handleFilterClick}
          currentFilter={filter}
        />
        <TodoList
          filteredTasks={filteredTasks}
          toggleTaskCompletion={toggleTaskCompletion}
          removeTask={removeTask}
        />
      </section>
    </div>
  );
};

export default App;
