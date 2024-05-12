import React, { useState } from "react";
import "../components/todo.css";
import List from "./list";

function Todo(){

    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [reloadDiv, setReloadDiv] = useState(false);

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let arr = tasks;
        let obj = {
            "name":input,
            "completed":false
        }
        arr.push(obj);
        setTasks(arr);
        setReloadDiv(!reloadDiv);
    }

    return(
        <div className="ParentBox">
            <input type="text" className="inputBox" placeholder="Add a todo" onChange={handleInput}></input>
            <span><input type="submit" value={"Add"} className="submitButton"  onClick={handleSubmit}/></span>
            <br/>
            <div id="taskSection">
            {reloadDiv}
            {
                tasks.map((tasks, index) => (
                    <div className="inner" style={{display:"flex", justifyContent:"center", textAlign:"center", padding:"1%"}}>
                        <List tasks={tasks}></List>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default Todo;