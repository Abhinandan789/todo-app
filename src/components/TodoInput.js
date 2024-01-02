import React from "react";

const TodoInput = ({ inputText, setInputText, addTask }) => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    };

    return (
        <div className="editInfo">
            <input
                type="text"
                placeholder="Create a new todo"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                id="inputText"
            />
            <button onClick={addTask} id="add">
                +
            </button>
        </div>
    );
};

export default TodoInput;
