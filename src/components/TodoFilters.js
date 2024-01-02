// TodoFilters.js

import React from "react";

const TodoFilters = ({ handleFilterClick, currentFilter }) => {
    return (
        <div className="btns">
            <button
                onClick={() => handleFilterClick("all")}
                id="allTask"
                className={currentFilter === "all" ? "active" : ""}
            >
                All
            </button>
            <button
                onClick={() => handleFilterClick("active")}
                id="activeTask"
                className={currentFilter === "active" ? "active" : ""}
            >
                Active
            </button>
            <button
                onClick={() => handleFilterClick("completed")}
                id="completedTask"
                className={currentFilter === "completed" ? "active" : ""}
            >
                Completed
            </button>
        </div>
    );
};

export default TodoFilters;
