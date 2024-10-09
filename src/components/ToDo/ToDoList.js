import React, {useState} from 'react';
import './ToDoList.scss';
import videoHomePage from "../../assets/bgv.mp4";
import { TrashIcon } from "@heroicons/react/24/solid";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { ArrowUpIcon} from "@heroicons/react/24/solid";


const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleEventChange = (event) => setNewTask(event.target.value);
  

  const addTask = () =>{
    if(newTask.trim() !== '')
    {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  const deletedTasks = (index) =>{
    const updeateTasks = tasks.filter((e, i) => i !== index);
    setTasks(updeateTasks);
  }

  const moveTaskUp =(index) =>{
    if(index > 0){
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index-1],updateTasks[index]];
      setTasks(updateTasks);
    }
    
  }

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [
        updateTasks[index], 
        updateTasks[index + 1]
      ] 
      = 
      [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  };




  return (
    <div>
      <div className="bgv">
        <video autoPlay muted loop>
          <source src={videoHomePage} type="video/mp4" />
        </video>
      </div>
      <div className="to-do-list">
        <h1>To Do List</h1>

        <input
          className="input"
          type="text"
          placeholder="Enter a task....."
          value={newTask}
          onChange={handleEventChange}
        />

        <button className="btn btn-add" onClick={addTask}>
          ADD
        </button>

        <ol>
          {tasks.map((task, index) => (
            <li className="content" key={index}>
              <div className='content-text'>
                <span className="text">
                  {index + 1}. {task}
                </span>
              </div>
              <div className='content-button'>
                <button
                  className="btn btn-del"
                  onClick={() => deletedTasks(index)}
                >
                  <TrashIcon width={24} height={24}></TrashIcon>
                </button>

                <button
                  className="btn btn-move"
                  onClick={() => moveTaskUp(index)}
                >
                  <ArrowUpIcon width={24} height={24}></ArrowUpIcon>
                </button>

                <button
                  className="btn btn-move"
                  onClick={() => moveTaskDown(index)}
                >
                  <ArrowDownIcon width={24} height={24}></ArrowDownIcon>
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;