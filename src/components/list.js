import React from "react";
import "./list.css";

const List = ({tasks}) =>
{

    const taskCompleted = (e) => {
        const parent = e.target.closest(".ListParent");
        parent.style.textDecoration = "line-through";
        parent.style.backgroundColor = "greenyellow";
        parent.style.opacity = 0.5;
    }

    const deleteTask = (e) => {
        const parent = e.target.closest(".ListParent");
        parent.style.display = "none";
    }

    return(
        <div className="ListParent" id="ListParent">
            <div className="text">
            {tasks.name} 
            </div>
            <div className="buttons">
            <button className="checkButton" onClick={taskCompleted}>
            <svg className="checkSVG" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
            </svg>
            </button>

            <button className="deleteButton" onClick={deleteTask}>
            <svg className="deleteSVG" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
            </svg>
            </button>
            </div>
        </div>
    );
}

export default List;