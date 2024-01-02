import React from "react";

const TodoList = ({ filteredTasks, toggleTaskCompletion, removeTask }) => {
    return (
        <div className="tasks">
            {filteredTasks.map((task, index) => (
                <div
                    className={`taskList ${task.completed ? "completed" : ""}`}
                    key={index}
                >
                    <input
                        type="checkbox"
                        className="check"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(index)}
                    />
                    <h1
                        style={{
                            gap: "12px",
                            textDecoration: task.completed ? "line-through" : "none",
                        }}
                    >
                        {task.text}
                    </h1>
                    <button onClick={() => removeTask(index)} className="delBtn">
                        X
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
